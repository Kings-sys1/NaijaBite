"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useCart } from "./context/cardcontext";
import Image from "next/image";
import { BsCartX } from "react-icons/bs";

export function Navbar() {

    const [dropDown, setDropDown] = useState(false);
    const [cart, setCart] = useState(false);

    const { cartItems, removeFromCart } = useCart();

    const pathname = usePathname();
    const toggleMenu = () => setDropDown(prev => !prev);
    const closeMenu = () => setDropDown(false);

    const toggleCart = () => setCart(prev => !prev);
    const closeCart = () => setCart(false);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    /* ---------- ACTIVE LINK DETECTOR (IMPORTANT) ---------- */
    const isActive = (path) => pathname.startsWith(path);

    const linkStyle = (path) =>
        isActive(path)
            ? "text-orange-500 font-bold"
            : "text-gray-500 hover:text-orange-500";

    return (
        <main>

            {/* NAVBAR */}
            <div className="px-4 md:px-8 py-3 h-20 w-full bg-white/95 flex justify-between items-center fixed top-0 left-0 z-50 border border-orange-100">

                <Link href="/">
                    <p className="font-bold text-2xl text-red-700 cursor-pointer">
                        Naija<span className="text-green-900">Bite</span>
                    </p>
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-8 text-sm font-semibold">
                    <Link href="/auth/account"><li className={`cursor-pointer ${linkStyle("/auth/account")}`}>Account</li></Link>
                    <Link href="/menu/all"><li className={`cursor-pointer ${linkStyle("/menu/all")}`}>Menu</li></Link>
                    <Link href="/dashboard/catering"><li className={`cursor-pointer ${linkStyle("/dashboard/catering")}`}>Catering</li></Link>
                    <Link href="/dashboard/about"><li className={`cursor-pointer ${linkStyle("/dashboard/about")}`}>About</li></Link>
                    <Link href="/dashboard/contact"><li className={`cursor-pointer ${linkStyle("/dashboard/contact")}`}>Contact</li></Link>
                </ul>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-5">

                    {/* CART ICON */}
                    <div onClick={toggleCart} className="relative cursor-pointer">
                        <IoCart  className="text-3xl text-green-900"/>

                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {totalItems}
                                </span>
                            )}
                    </div>

                    {/* HAMBURGER */}
                    <RxHamburgerMenu
                        onClick={toggleMenu}
                        className="text-3xl cursor-pointer md:hidden"
                    />
                </div>
            </div>

            {/* OVERLAY FOR MOBILE MENU */}
            {dropDown && (
                <div
                    onClick={closeMenu}
                    className="fixed inset-0 bg-black/30 z-40 md:hidden"
                />
            )}

            {/* MOBILE MENU */}
            <div className={`fixed top-20 right-0 w-64 h-[calc(100vh-80px)] bg-white shadow-xl md:hidden z-50 transform transition-transform duration-300 ease-in-out ${dropDown ? "translate-x-0" : "translate-x-full"}`}>
                <ul className="flex flex-col justify-center items-center gap-8 py-10 px-6 text-sm font-semibold">
                    <Link href="/auth/account"><li onClick={closeMenu} className={linkStyle("/auth/account")}>Account</li></Link>
                    <Link href="/menu/all"><li onClick={closeMenu} className={linkStyle("/menu/all")}>Menu</li></Link>
                    <Link href="/dashboard/catering"><li onClick={closeMenu} className={linkStyle("/dashboard/catering")}>Catering</li></Link>
                    <Link href="/dashboard/about"><li onClick={closeMenu} className={linkStyle("/dashboard/about")}>About</li></Link>
                    <Link href="/dashboard/contact"><li onClick={closeMenu} className={linkStyle("/dashboard/contact")}>Contact</li></Link>
                </ul>
            </div>

            {/* CART OVERLAY */}
            {cart && (
                <div
                    onClick={closeCart}
                    className="fixed inset-0 bg-black/50 z-[60]"
                />
            )}

            {/* CART DRAWER */}
            <div className={`fixed top-0 right-0 w-full md:w-110 h-screen bg-white shadow-xl z-[70] transform transition-transform duration-300 ease-in-out ${cart ? "translate-x-0" : "translate-x-full"}`}>

                <div className="p-7 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <span className="text-orange-500 text-2xl"><FiShoppingCart /></span>
                        <p className="font-bold text-xl">Your Order</p>
                    </div>

                    <span onClick={closeCart} className="text-2xl text-gray-400 cursor-pointer">
                        <MdClose />
                    </span>
                </div>

                <div className="pl space-y-4 overflow-y-auto h-[calc(100vh-85px)]">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col h-full justify-center items-center">
                            <span className="bg-orange-100/50 p-5 text-orange-300 rounded-full text-3xl"><BsCartX /></span>
                            <p className="text-gray-500 mt-4">Your cart is empty</p>
                            <Link href="/menu/all"><p className="font-semibold mt-3 text-orange-500 text-sm">Start odering some delicious food!</p></Link>
                        </div>
                        
                        
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 items-center border-b border-gray-100 shadow pb-4 px-5">
                                {/* IMAGE */}
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* DETAILS */}
                                <div className="flex-1">
                                    <p className="font-semibold text-sm">
                                        {item.name}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        ₦{item.price.toLocaleString()} × {item.quantity}
                                    </p>

                                    <p className="text-sm font-semibold text-green-900">
                                        ₦{(item.price * item.quantity).toLocaleString()}
                                    </p>
                                    </div>

                                    {/* REMOVE BUTTON */}
                                    <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-400 text-lg"
                                    >
                                    <MdClose />
                                    </button>
                                </div>
                            ))
                    )}
                    {cartItems.length === 0 ? (null) : (<div className=" px-5 py-8 border-t border-gray-100 mt-5 bg-gray-50">
                        <div className="flex justify-between">
                            <p className="text-gray-500">Subtotal</p>
                            <p className="font-bold text-xl text-green-900">₦{totalPrice.toLocaleString()}</p>
                        </div>
                        <div>
                            <button type="submit" className="bg-orange-500 text-white font-bold rounded-xl h-15 w-full mt-3 text-lg shadow-lg shadow-orange-200">Checkout</button>
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-4">Taxes and delivery fees calculated at checkout</p>
                    </div>)}
                </div>
            </div>

        </main>
    );
}