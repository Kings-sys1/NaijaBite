    "use client"
import { useCart } from "@/components/context/cardcontext";
import Image from "next/image";
import { useState } from "react";


const categories = ["All", "RICE", "SOUPS", "SWALLOW", "GRILLS", "SNACKS", "DRINKS"];
    const menuItems = [
        {
            id: 1,
            name: "Party Jollof Rice",
            category: "RICE",
            price: 4500,
            description: "Authentic smoky party Jollof rice served with fried plantain and your choice of protein.",
            image: "/food1.jfif",
        },
        {
            id: 2,
            name: "White Rice and Shrimp Stew",
            category: "RICE",
            price: 5500,
            description: "White rice, and perfectly cooked highly protenous shrimp stew.",
            image: "/shrimp&rice.webp",
        },
        {
            id: 3,
            name: "Egusi Soup & Pounded Yam",
            category: "SOUPS",
            price: 5000,
            description: "Rich melon seed soup with spinach, stockfish, and assorted meats. Served with smooth pounded yam.",
            image: "/egs1.jpg",
        },
        {
            id: 4,
            name: "Mixed Grill Platter",
            category: "GRILLS",
            price: 3500,
            description: "Thinly sliced beef marinated in spicy kuli-kuli (peanut) spice, grilled to perfection.",
            image: "/grillplatter.webp",
        },
        {
            id: 5,
            name: "Afang Soup",
            category: "SOUPS",
            price: 4400,
            description: "Traditional afang soup rich in vegetables and meat.",
            image: "/afang.webp",
        },
        {
            id: 6,
            name: "Special Fried Rice",
            category: "RICE",
            price: 4700,
            description: "Nigerian style fried rice with vegetables, liver bits, and prawns.",
            image: "/spfried.webp",
        },
        {
            id: 7,
            name: "Gourmet Puff Puff",
            category: "SNACKS",
            price: 1500,
            description: "Golden-brown, fluffy fried dough balls. A perfect sweet snack for anytime.",
            image: "/puff.jpg",
        },
        {
            id: 8,
            name: "Amala & Ewedu Special",
            category: "SOUPS",
            price: 4200,
            description: "Soft Amala served with Ewedu, Gbegiri, and spicy stew with tripe and meat.",
            image: "/amala.jpg",
        },
        {
            id: 10,
            name: "Chilled Zobo Drink",
            category: "DRINKS",
            price: 1100,
            description: "Traditional hibiscus flower infusion with ginger, cloves, and a hint of pineapple.",
            image: "/zobo.jpg",
        },
        {
            id: 11,
            name: "Signature Chapman",
            category: "DRINKS",
            price: 1800,
            description: "The ultimate Nigerian mocktail. A refreshing blend of fruity flavors, bitters, and citrus.",
            image: "/chapman.png",
        },
        {
            id: 12,
            name: "Fresh Palm Wine",
            category: "DRINKS",
            price: 2000,
            description: "Freshly tapped, chilled palm wine. Sweet, cloudy, and traditionally satisfying.",
            image: "/palm.jpg",
        },
        {
            id: 13,
            name: "Pounded Yam",
            category: "SWALLOW",
            price: 600,
            description: "Swooth punded yam, goes well for any of your desired soup.",
            image: "/pounded.jpg",
        },
        {
            id: 14,
            name: "Ginger & Lemon Fizz",
            category: "DRINKS",
            price: 1500,
            description: "A zesty and energizing blend of fresh ginger root and squeezed lemons.",
            image: "/lemon.webp",
        },
        {
            id: 15,
            name: "Meat Pie",
            category: "SNACKS",
            price: 800,
            description: "Freshly baked Nigerian meat pie.",
            image: "/meatpie.webp",
        },
        {
            id: 16,
            name: "Grilled Fish",
            category: "GRILLS",
            price: 4500,
            description: "Well seasoned grilled fishserved with pepper sauce.",
            image: "/grilledfish1.png",
        },
        {
            id: 17,
            name: "Chicken Shawarma",
            category: "SNACKS",
            price: 2400,
            description: "Creamy chicken shawarma.",
            image: "/shawarma.webp",
        },
        {
            id: 18,
            name: "Suya",
            category: "GRILLS",
            price: 2500,
            description: "Well seasoned grilled suya with pepper and vegetables.",
            image: "/suya.webp",
        },
        {
            id: 19,
            name: "Native Rice",
            category: "RICE",
            price: 4000,
            description: "Authentic smoky native rice cooked with varieties of protien.",
            image: "/native rice.webp",
        },
        {
            id: 20,
            name: "Banga Soup & Starch",
            category: "SOUPS",
            price: 3700,
            description: "Traditional banga soup, served with starch.",
            image: "/banga.webp",
        },
        {
            id: 21,
            name: "Semovita",
            category: "SWALLOW",
            price: 500,
            description: "Perfectly made smooth Semovita, perfect combo for your desired soups from our menu.",
            image: "/semo.webp",
        },
        {
            id: 22,
            name: "Ofada Rice",
            category: "RICE",
            price: 4200,
            description: "white ofada rice, with sauce and fried plantain, served with your desired protein.",
            image: "/ofada.jpg",
        },
        {
            id: 23,
            name: "Vegetable Soup",
            category: "SOUPS",
            price: 3800,
            description: "Rich vegetable soup with, stockfish, and assorted meats.",
            image: "/vegetable.jpg",
        },
        {
            id: 24,
            name: "Seafood 0kro Soup",
            category: "SOUPS",
            price: 3500,
            description: "Rich vegetable soup with, stockfish, and assorted meats.",
            image: "/seafood.webp",
        },
        {
            id: 25,
            name: "Garri Swallow",
            category: "SWALLOW",
            price: 500,
            description: "Swooth garri swallow(eba), goes well for any of your desired soup.",
            image: "/eba.jpg",
        },
        {
            id: 26,
            name: "Dirty Rice",
            category: "RICE",
            price: 4200,
            description: "Tasty and spicy dirty rice, with sausage and plantain.",
            image: "/dirtrice.jpg",
        },
    ];

export default function Allmenu() {
    const {addToCart} = useCart();
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredMenu = activeCategory === "All"
    ? menuItems : menuItems.filter(item => item.category === activeCategory);

    return (
        <main className="min-h-screen bg-gray-100">
            <div className="text-center pt-40">
                <h3 className="font-bold text-4xl">Explore Our Menu</h3>
                <p className="text-gray-500 mt-3">Discover a world of authentic flavors.</p>
            </div>

            <section className="px-4 md:px-8 py-14">
                {/*filtering menu*/}
                <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center items-center mb-12">
                    <div className="flex-grow mr-2">
                    <input type="search" className="text-gray-500 h-15 w-full px-3 border border-gray-300 rounded-xl" placeholder="&#x1f50D; Search for your favourite dish..."/>
                </div>
                    {categories.map(category => (
                        <button key={category} onClick={() => setActiveCategory(category)} className={`flex-grow md:flex-grow-0 px-4 h-15 rounded-xl text-gray-700 font-semibold border border-gray-300 transition ${activeCategory === category
                            ? "bg-orange-500 text-white" : "bg-white hover:bg-orange-200"}
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
                    {filteredMenu.map(item => (
                        <div key={item.id} className="rounded-xl bg-white shadow-lg">
                            <div className="relative h-80 w-full">
                                <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <span className="text-green-900 mt-2 rounded-full font-semibold">₦{item.price.toLocaleString()}</span>
                                </div>
                                <p className="text-orange-600 text-sm mb-2">{item.category}</p>
                                <p className="h-15 text-gray-500 text-sm">{item.description}</p>
                                <button onClick={()=> addToCart({
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                    image:item.image,
                                })} className="text-white font-semibold rounded-xl bg-orange-500 h-10 w-full">+ Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}