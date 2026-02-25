import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/config/firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        throw new Error("Enter email and password");
                    }
                    
                    // Check if user exists
                    const userRef = doc(db, "users", credentials.email);
                    const userSnap = await getDoc(userRef);
                    
                    if (!userSnap.exists()) {
                        throw new Error("Email not registered, please sign up.");
                    }
                    
                    const user = userSnap.data();

                    if (user.provider === "google") {
                        throw new Error("This account uses Google login");
                    }

                    const passwordMatch = await bcrypt.compare(credentials.password, user.password);
                    if (!passwordMatch) {
                        throw new Error("Invalid password");
                    }
                    
                    return {
                        id: credentials.email,
                        name: user.name,
                        email: credentials.email,
                    };
                } catch (error) {
                    // Log the error for debugging
                    console.error("Authorization error:", error);
                    // Return null instead of throwing to prevent redirect to error page
                    return null;
                }
            },
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        Github({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                try {
                    const userRef = doc(db, "users", user.email);
                    const userSnap = await getDoc(userRef);

                    if (!userSnap.exists()) {
                        await setDoc(userRef, {
                            name: user.name,
                            email: user.email,
                            image: user.image,
                            provider: "google",
                            createdAt: new Date(),
                        });
                    }
                } catch (error) {
                    console.error("Google sign-in error:", error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id,
                    name: token.name,
                    email: token.email,
                };
            }
            return session;
        },
    },
    pages: {
        signIn: "/account",
        error: "/account", // Redirect back to account page on error
    },
});