import { db } from "@/config/firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        
        // Validate input
        if (!email || !password || !name) {
            return NextResponse.json(
                { error: "All fields are required" }, 
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters" }, 
                { status: 400 }
            );
        }
        
        // Check if user exists - FIX: Use email as the document ID
        const userRef = doc(db, "users", email); // Using email as ID
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
            return NextResponse.json(
                { error: "Email already registered" }, 
                { status: 409 }
            );
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Save user
        await setDoc(userRef, {
            name,
            email,
            password: hashedPassword,
            provider: "credentials",
            createdAt: new Date(),
        });
        
        return NextResponse.json(
            { success: true, message: "Account created successfully" }, 
            { status: 201 }
        );
        
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Server error. Please try again." }, 
            { status: 500 }
        );
    }
}