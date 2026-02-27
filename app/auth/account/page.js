"use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { BsBox2 } from "react-icons/bs";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { CircularProgress } from "@mui/material";

export default function Account() {
    const { data: session, status } = useSession();

    // =========================
    // ALL HOOKS MUST BE HERE
    // =========================

    const [Support, setSupport] = useState(false);
    const [order, setOrder] = useState(false);
    const [inbox, setInbox] = useState(false);
    const [orders, setOrders] = useState([]);

    const [mode, setMode] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupError, setSignupError] = useState("");
    const [signupLoading, setSignupLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // =========================
    // HANDLER FUNCTIONS
    // =========================

    const contactSupport = () => setSupport(true);
    const checkOrder = () => setOrder(true);
    const checkInbox = () => setInbox(true);

    // =========================
    // EFFECTS
    // =========================

    useEffect(() => {
        const fetchOrders = async () => {
            if (!session?.user?.email) return;

            try {
                const q = query(
                    collection(db, "orders"),
                    where("userId", "==", session.user.email)
                );

                const querySnapshot = await getDocs(q);

                const userOrders = [];
                querySnapshot.forEach((doc) => {
                    userOrders.push({ id: doc.id, ...doc.data() });
                });

                setOrders(userOrders);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        if (status === "authenticated") {
            fetchOrders();
        }
    }, [session, status]);

    //loading while next check cookies
    if(status === "loading") {
        return (
            <main className="h-[80vh] flex items-center justify-center">
                    <CircularProgress className="text-5xl" />
                </main>
        );
    }

    //if user is in session
    if (status === "authenticated") {
    return (
        <main className="relative flex w-full pt-30 py-15 justify-center bg-gray-100 min-h-screen">

            {/* MAIN PROFILE CARD */}
            <div className="border border-orange-200 w-full mx-3 md:mx-5 lg:w-1/2 py-10 px-8 rounded-2xl shadow-lg bg-white relative z-10">

                <div className="text-center">
                    {session.user?.image ? (
                        <Image
                            src={session.user.image}
                            alt="profile"
                            width={64}
                            height={64}
                            className="w-15 h-15 rounded-full mx-auto mb-4 border object-cover"
                        />
                    ) : (
                        <div className="w-15 h-15 rounded-full mx-auto mb-4 border bg-gray-200 flex items-center justify-center text-3xl text-blue-400">
                            <CgProfile />
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-gray-800">
                        Welcome {session?.user?.name}!
                    </h2>

                    <p className="text-gray-500 mt-1">
                        {session?.user?.email}
                    </p>
                </div>

                <div className="w-full h-1 my-6 bg-gray-200"></div>

                {/* CONTACT SUPPORT */}
                <div onClick={contactSupport} className="flex justify-between items-center border-b border-gray-200 pb-4 cursor-pointer hover:bg-gray-50 transition px-2">
                    <p className="font-medium">Contact Support</p>
                    <span>&gt;</span>
                </div>

                <div onClick={checkOrder} className="flex justify-between items-center border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition px-2">
                    <div className="flex gap-2 items-center my-5">
                        <span><BsBox2 /></span>
                        <div className="flex gap-2">
                            <p>Orders:</p>
                            <span className="font-bold text-orange-500">{orders.length}</span>
                        </div>
                    </div>
                    <span>&gt;</span>
                </div>

                <div onClick={checkInbox} className="flex justify-between items-center border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition px-2">
                    <div className="flex gap-2 items-center my-5">
                        <span><MdOutlineForwardToInbox /></span>
                        <p>Inbox</p>
                    </div>
                    <span>&gt;</span>
                </div>

                {/* Logout button */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* DARK OVERLAY FOR CONTACT SUPPORT*/}
            {Support && (
                <div onClick={() => setSupport(false)} className="fixed inset-0 bg-black/40 z-40"/>
            )}

            {/* SLIDE PANEL FOR CONTACT SUPPORT*/}
            <div
                className={`fixed top-19 right-0 h-screen w-full md:w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${Support ? "translate-x-0" : "translate-x-full"}`}>

                <div className="p-6">
                    <h3 className="text-xl font-bold mb-6">Contact Support</h3>

                    {/* EMAIL */}
                    <a
                        href="mailto:youngisarux@gmail.com"
                        className="block bg-orange-500 text-white text-center py-3 rounded-lg font-semibold mb-4 hover:bg-orange-600 transition">Email Support</a>

                    {/* WHATSAPP */}
                    <a
                        href="https://wa.me/+2348136030632"
                        target="_blank"
                        className="block bg-green-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition">WhatsApp Support</a>

                    {/* CLOSE BUTTON */}
                    <button onClick={() => setSupport(false)} className={`mt-6 w-full border border-gray-300 py-2 rounded-lg cursor-pointer ${Support ? "bg-gray-400/30" : "bg-gray-400/80"}`}>Close</button>
                </div>
            </div>

            {/* DARK OVERLAY FOR ORDERS */}
            {order && (
                <div onClick={()=> setOrder(false)} className="fixed inset-0 bg-black/40 z-40"></div>
            )}

            {/* SLIDE PANEL FOR ORDERS */}
            <div className={`fixed top-19 right-0 w-full md:w-80 h-screen bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${order ? "translate-x-0" : "translate-x-full" }`}>
                <div className="p-6">
                    <p className="font-bold text-center">See Your Order history</p>
                    <div className="flex justify-between mt-5 text-sm">
                        <p>Ongoing</p>
                        <p>Delivered</p>
                    </div>
                </div>
                {/* CLOSE BUTTON */}
                    <button onClick={() => setOrder(false)} className={`mt-6 w-full border border-gray-300 py-2 rounded-lg cursor-pointer ${order ? "bg-gray-400/30" : "bg-gray-400/80"}`}>Close</button>
            </div>

            {/* DARK OVERLAY FOR ORDERS */}
            {inbox && (
                <div onClick={()=> setInbox(false)} className="fixed inset-0 bg-black/40 z-40"></div>
            )}

            {/* SLIDE PANEL FOR ORDERS */}
            <div className={`fixed top-20 right-0 w-full md:w-80 space-y-4 overflow-y-auto h-[calc(100vh-85px)] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${inbox ? "translate-x-0" : "translate-x-full" }`}>
                <div className="">
                    <div className="p-3 bg-gray-200 ">
                        <p className="font-bold text-center">Inbox</p>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
                {/* CLOSE BUTTON */}
                    <button onClick={() => setInbox(false)} className={`mt-6 w-full border border-gray-300 py-2 rounded-lg cursor-pointer ${inbox ? "bg-gray-400/30" : "bg-gray-400/80"}`}>Close</button>
            </div>
        </main>
    );
}


    //if user not in session
    

    

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (res?.error) {
                // error messages
                setError(res.error);
            } else if (res?.ok) {
                window.location.href = "/";
            } else {
                setError("Login failed. Please try again.");
            }
        } catch (error) {
            setError("Connection error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setSignupError("");
        setSuccessMessage("");
        setSignupLoading(true);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email: signupEmail,
                    password: signupPassword,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setSignupError(data.error || "Registration failed");
                return;
            }

            // Show success message
            setSuccessMessage("Account created successfully! Logging you in...");
            
            // Auto login after successful signup
            setTimeout(async () => {
                const loginRes = await signIn("credentials", {
                    redirect: false,
                    email: signupEmail,
                    password: signupPassword,
                });

                if (loginRes?.error) {
                    setSignupError(loginRes.error);
                } else {
                    window.location.href = "/";
                }
            }, 1500);
            
        } catch (error) {
            setSignupError("Connection error. Please try again.");
        } finally {
            setSignupLoading(false);
        }
    };

    return (
        <main className="flex items-center pt-30 mx-auto py-15 justify-center bg-gray-100 min-h-screen">
            <div className="border border-orange-200 w-full mx-3 md:mx-5 lg:w-1/2 py-5 px-5 lg:py-10 rounded-2xl shadow bg-white">
                <div className="flex font-bold text-2xl justify-center">
                    <p 
                        onClick={() => {
                            setMode("Login");
                            setError("");
                            setSignupError("");
                        }} 
                        className={`cursor-pointer ${mode === "Login" ? "text-green-900 text-3xl" : "text-gray-400"}`}
                    >
                        Login
                    </p>
                    <span className="text-gray-400">/</span>
                    <p 
                        onClick={() => {
                            setMode("Sign Up");
                            setError("");
                            setSignupError("");
                        }} 
                        className={`cursor-pointer ${mode === "Sign Up" ? "text-orange-500 text-3xl" : "text-gray-400"}`}
                    >
                        Sign Up
                    </p>
                </div>

                {mode === "Login" ? (
                    // Login form
                    <form className="mt-5" onSubmit={handleLogin}>
                        <label className="font-semibold text-gray-600">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="w-full h-10 rounded-xl border border-gray-300 mt-2 mb-3 pl-3 text-gray-600 placeholder:italic placeholder:text-gray-300" 
                            placeholder="Input your email"
                            required
                        />

                        <label className="font-semibold text-gray-600">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full h-10 rounded-xl border border-gray-300 mt-2 mb-3 pl-3 text-gray-600 placeholder:italic placeholder:text-gray-300" 
                            placeholder="Input your password"
                            required
                        />

                        <p className="text-right text-sm text-gray-500 cursor-pointer hover:text-orange-500">
                            Forgot password?
                        </p>
                        
                        <div className="flex justify-center mt-3">
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-1/2 bg-orange-500 h-10 rounded-3xl cursor-pointer font-bold text-white disabled:bg-orange-300 disabled:cursor-not-allowed"
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </div>
                        
                        {error && (
                            <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded">
                                <p className="text-red-600 text-center text-sm">{error}</p>
                            </div>
                        )}
                        
                        <p className="text-center text-gray-500 mt-3">Or Login with</p>
                        <div className="flex gap-1 justify-center mt-4">
                            <button 
                                type="button" 
                                onClick={() => signIn("google", { callbackUrl: "/" })} 
                                className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                            >
                                <FcGoogle />
                            </button>
                            <button 
                                type="button" 
                                onClick={() => signIn("github", { callbackUrl: "/" })} 
                                className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                            >
                                <FaGithub />
                            </button>
                        </div>
                    </form>
                ) : (
                    // SIGN UP FORM
                    <form className="mt-5" onSubmit={handleSignUp}>
                        <label className="font-semibold text-gray-600">Username</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="w-full h-10 rounded-xl border border-gray-300 mt-2 mb-3 pl-3 text-gray-600 placeholder:italic placeholder:text-gray-300" 
                            placeholder="Choose a username"
                            required
                            minLength={3}
                        />

                        <label className="font-semibold text-gray-600">Email</label>
                        <input 
                            type="email" 
                            value={signupEmail} 
                            onChange={(e) => setSignupEmail(e.target.value)} 
                            className="w-full h-10 rounded-xl border border-gray-300 mt-2 mb-3 pl-3 text-gray-600 placeholder:italic placeholder:text-gray-300" 
                            placeholder="Enter your email"
                            required
                        />

                        <label className="font-semibold text-gray-600">Password</label>
                        <input 
                            type="password" 
                            value={signupPassword} 
                            onChange={(e) => setSignupPassword(e.target.value)} 
                            className="w-full h-10 rounded-xl border border-gray-300 mt-2 mb-3 pl-3 text-gray-600 placeholder:italic placeholder:text-gray-300" 
                            placeholder="Create a password (min. 6 characters)"
                            required
                            minLength={6}
                        />

                        <div className="flex justify-center mt-3">
                            <button 
                                type="submit" 
                                disabled={signupLoading}
                                className="w-1/2 bg-green-900 h-10 rounded-3xl cursor-pointer font-bold text-white disabled:bg-green-700/50 disabled:cursor-not-allowed"
                            >
                                {signupLoading ? "Creating Account..." : "Sign Up"}
                            </button>
                        </div>

                        {signupError && (
                            <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded">
                                <p className="text-red-600 text-center text-sm">{signupError}</p>
                            </div>
                        )}

                        {successMessage && (
                            <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded">
                                <p className="text-green-600 text-center text-sm">{successMessage}</p>
                            </div>
                        )}

                        <p className="text-center text-gray-500 mt-3">Or Sign Up with</p>
                        <div className="flex gap-1 justify-center mt-4">
                            <button 
                                type="button" 
                                onClick={() => signIn("google", { callbackUrl: "/" })} 
                                className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                            >
                                <FcGoogle />
                            </button>
                            <button 
                                type="button" 
                                onClick={() => signIn("github", { callbackUrl: "/" })} 
                                className="text-4xl cursor-pointer hover:scale-110 transition-transform"
                            >
                                <FaGithub />
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </main>
    );
}