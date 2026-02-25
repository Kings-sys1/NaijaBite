  "use client"
import Image from "next/image";
import { ImSpoonKnife } from "react-icons/im";
import { LuSoup } from "react-icons/lu";
import { PiBowlFoodFill } from "react-icons/pi";
import { MdOutdoorGrill } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { GiBoba } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdPriceCheck } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import Link from "next/link";
import { useCart } from "@/components/context/cardcontext";
import { useState } from "react";
import { PiForkKnife } from "react-icons/pi";
import { GoInbox } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { CgAwards } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";
import { PiShootingStarLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";

const categories = ["All", "RICE", "SOUPS", "SWALLOW", "GRILLS", "SNACKS", "DRINKS"];
    const menuItems = [
        {
            id: 1,
            name: "Party Jollof Rice",
            category: "RICE",
            price: 4500,
            description: "Authentic smoky party Jollof rice served with fried plantain and your choice of protein.",
            image: "/hero-1.jpg",
        },
        {
            id: 2,
            name: "White Rice and Shrimp Stew",
            category: "RICE",
            price: 5500,
            description: "White rice, and perfectly cooked highly protenous shrimp stew.",
            image: "/Shrimp&rice.webp",
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

export default function Home() {
  const {addToCart} = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFiltering, setIsFiltering] = useState(false);
  const featuredItems = menuItems.slice(0, 26);
  const previewItems = menuItems.slice(0, 3);
      const filteredMenu = (() => {
  // Landing page → only show preview
  if (!isFiltering) return previewItems;

  // If user chose a category
  if (activeCategory === "All") return menuItems;

  // Show full category foods
  return menuItems.filter(item => item.category === activeCategory);
})();
      
  return (
    <main className="min-h-screen bg-gray-50 pt-19">
      <div className="relative w-full min-h-105 md:min-h-115 bg-black">
        <div className="absolute w-full bg-[url(/hero-1.jpg)] inset-0 bg-cover bg-no-repeat bg-center opacity-55 blur-[1.5px]"></div>
        <div className=" pb-5 md:pb-0 pt-23 md:pt-20 px-8 md:px-12 lg:px-60 z-10 relative">
          <h2 className="font-bold text-white text-4xl md:text-7xl">Fresh, Delicious Meals Delivered Fast</h2>
          <p className="mt-2 md:mt-4 text-white/80 md:text-lg">Experience the true taste of home. From smoky Jollof to savory Egusi, we bring Nigeria's finest dishes straight to your doorstep.</p>
          <div className="flex gap-3 mt-5">
            <Link href="/dashboard/catering"><button className="bg-orange-500 h-12 w-35 rounded-xl font-bold text-white cursor-pointer">Request Quote</button></Link>
            <Link href="/menu/all"><button className="bg-white/20 backdrop-blur-md border border-white/30 h-12 w-35 rounded-xl font-bold text-white cursor-pointer">View Menu</button></Link>
          </div>
        </div>
        </div>

        <div className="mt-10 p-5 md:p-8">
          <div className=" ">
            <div className="flex gap-5 justify-between items-center">
              <p className="font-bold text-xl md:text-3xl mb-2 text-black">Our Popular Dishes</p>
              <Link href="/menu/all"><p className="font-bold text-xs md:text-base text-orange-600 cursor-pointer">View Full Menu<span className="ml-1"> &gt;</span></p></Link>
            </div>
            <div>
              <p className="text-gray-500">The most loved flavors by our community.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover"
                />

                <div className="p-5">
                  <div className="flex justify-between items-center font-bold">
                    <p>{item.name}</p>
                    <p className="text-green-900">₦{item.price.toLocaleString()}</p>
                  </div>

                  <p className="text-xs text-orange-600 mt-1">{item.category}</p>

                  <div className="h-14">
                    <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                      })
                    }
                    className="bg-orange-500 text-white font-semibold h-11 w-full rounded-2xl mt-4 cursor-pointer"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BROWSE BY CATEGORY */}
        <div className="mt-10 bg-[#FFF7F2] px-8 py-15">
          <p className="text-3xl font-bold text-center">Browse by Category</p>
          <div className="grid grid-cols-3 md:grid-cols-6 justify-betwee gap-5 mt-10">

            <div onClick={() => {setActiveCategory("RICE"); setIsFiltering(true);}} className="flex flex-col justify-center items-center bg-white h-43 p-3 shadow-md rounded-2xl cursor-pointer hover:scale-105 transition">
              <div className="bg-[#FFF7F2] h-15 w-15 rounded-full flex items-center justify-center">
                <ImSpoonKnife className="text-xl text-orange-600"/>
              </div>
              <p className="font-bold text-lg mt-2">Rice</p>
            </div>

            <div onClick={() => {setActiveCategory("SOUPS"); setIsFiltering(true);}} className="flex flex-col justify-center items-center bg-white h-43 p-3 shadow-md rounded-2xl cursor-pointer">
              <div className="bg-[#FFF7F2] h-15 w-15 rounded-full flex items-center justify-center">
                <LuSoup className="text-xl text-orange-600"/>
              </div>
              <p className="font-bold text-lg mt-2">Soups</p>
            </div>

            <div onClick={() => {setActiveCategory("SWALLOW"); setIsFiltering(true);}} className="flex flex-col justify-center items-center bg-white h-43 p-3 shadow-md rounded-2xl cursor-pointer">
              <div className="bg-[#FFF7F2] h-15 w-15 rounded-full flex items-center justify-center">
                <PiBowlFoodFill className="text-xl text-orange-600"/>
              </div>
              <p className="font-bold text-lg mt-2">Swallow</p>
            </div>

            <div onClick={() => {setActiveCategory("GRILLS"); setIsFiltering(true);}} className="flex flex-col justify-center items-center bg-white h-43 p-3 shadow-md rounded-2xl cursor-pointer">
              <div className="bg-[#FFF7F2] h-15 w-15 rounded-full flex items-center justify-center">
                <MdOutdoorGrill className="text-xl text-orange-600"/>
              </div>
              <p className="font-bold text-lg mt-2">Grills</p>
            </div>

            <div onClick={() => {setActiveCategory("SNACKS"); setIsFiltering(true);}} className="flex flex-col justify-center items-center bg-white h-43 p-3 shadow-md rounded-2xl cursor-pointer">
              <div className="bg-[#FFF7F2] h-15 w-15 rounded-full flex items-center justify-center">
                <IoFastFood className="text-xl text-orange-600"/>
              </div>
              <p className="font-bold text-lg mt-2">Snacks</p>
            </div>

            <div onClick={() => {setActiveCategory("DRINKS"); setIsFiltering(true);}} className="flex flex-col justify-center items-center bg-white h-43 p-3 shadow-md rounded-2xl cursor-pointer">
              <div className="bg-[#FFF7F2] h-15 w-15 rounded-full flex items-center justify-center">
                <GiBoba className="text-xl text-orange-600"/>
              </div>
              <p className="font-bold text-lg mt-2">Drinks</p>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="my-20 px-4 md:px-8">
          <div className="text-center">
            <p className="text-4xl font-bold">How It Works</p>
            <p className="text-gray-500 mt-3 text-lg">Get your favorite Nigerian meals in 3 easy steps</p>
          </div>
          <div className="flex flex-col md:flex-row gap-7 w-full">
            <div className="shadow-lg rounded-xl bg-white p-7 w-full">
              <div className="flex justify-between">
                <span className="text-4xl flex justify-center items-center px-3 bg-orange-100 text-orange-500 rounded-xl"><PiForkKnife /></span>
                <span className="text-6xl text-gray-100 font-bold">01</span>
              </div>
              <p className="font-bold text-xl mt-4">Choose Your Meal</p>
              <p className="text-gray-500 mt-3">Browse our extensive menu and select your favorite Nigerian dishes</p>
            </div>
            <div className="shadow-lg rounded-xl bg-white w-full p-4 md:p-7">
              <div className="flex justify-between">
                <span className="text-4xl flex justify-center items-center px-3 bg-green-100 text-green-500 rounded-xl"><GoInbox /></span>
                <span className="text-6xl text-gray-100 font-bold">02</span>
              </div>
              <p className="font-bold text-xl mt-4">Choose Your Meal</p>
              <p className="text-gray-500 mt-3">Browse our extensive menu and select your favorite Nigerian dishes</p>
            </div>
            <div className="shadow-lg rounded-xl bg-white w-full p-7">
              <div className="flex justify-between">
                <span className="text-4xl flex justify-center items-center px-3 bg-orange-100 text-orange-500 rounded-xl"><CiDeliveryTruck /></span>
                <span className="text-6xl text-gray-100 font-bold">03</span>
              </div>
              <p className="font-bold text-xl mt-4">Choose Your Meal</p>
              <p className="text-gray-500 mt-3">Browse our extensive menu and select your favorite Nigerian dishes</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-500 py-10 px-4 px-8 lg:p-20 my-8 overflow-hidden">
          <div className="text-center">
            <p className="font-bold text-white text-3xl md:text-4xl mb-3 md:mb-4">Trusted by Thousands</p>
            <p className="text-white/90">Numbers that speak for our quality and service</p>
          </div>
          <div className="grid grid-cols-2 md:flex md:justify-between gap-5 mt-8 md:mt-13">
            <div className="text-white flex flex-col justify-center items-center w-full">
              <span className="flex justify-center items-center p-3 rounded-xl text-xl md:text-3xl bg-white/30 "><GoPeople /></span>
              <p className="font-bold text-2xl md:text-4xl lg:text-5xl mt-4">50,000+</p>
              <p className="text-white/90 text-center mt-1">Happy Customers</p>
            </div>
            <div className="text-white flex flex-col justify-center items-center w-full">
              <span className="flex justify-center items-center p-3 rounded-xl text-xl md:text-3xl bg-white/30 "><GoInbox /></span>
              <p className="font-bold text-2xl md:text-4xl lg:text-5xl mt-4">100,000+</p>
              <p className="text-white/90 text-center mt-1">Orders Delivered</p>
            </div>
            <div className="text-white flex flex-col justify-center items-center w-full">
              <span className="flex justify-center items-center p-3 rounded-xl text-xl md:text-3xl bg-white/30 "><MdOutlineStarRate /></span>
              <p className="font-bold text-2xl md:text-4xl lg:text-5xl mt-4">4.9/5.0</p>
              <p className="text-white/90 text-center mt-1">Average Rating</p>
            </div>
            <div className="text-white flex flex-col justify-center items-center w-full">
              <span className="flex justify-center items-center p-3 rounded-xl text-xl md:text-3xl bg-white/30 "><CgAwards /></span>
              <p className="font-bold text-2xl md:text-4xl lg:text-5xl mt-4">15+</p>
              <p className="text-white/90 text-center mt-1">Awards Won</p>
            </div>
          </div>
        </div>

        {/* WHY WE ARE LOVED */}
        <div className="flex flex-col md:flex-row gap-10 py-15 px-5 md:px-8 ">
          <div className="w-full relative">
            <Image
            src="/kitch4.jpg"
            alt="kitchen"
            height={500}
            width={500}
            className="w-full min-h-95 md:min-h-100 lg:min-h-[520px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-[-118] right-[-10] md:bottom-[-115] md:right-[-115] lg:bottom-[-95] lg:right-[-95] shadow-xl rounded-xl bg-white h-35 w-75 p-8">
              <div className="flex justify-center items-center ">
                <MdHealthAndSafety className="text-3xl text-green-400 bg-green-200"/>
                <p className="text-lg font-bold">100% Hygienic Cooking</p>
              </div>
              <p className="text-gray-500 text-sm mt-6">Our kitchen follows strict international safety and hygiene protocols.</p>
            </div>
          </div>

          <div className="pt-30 md:pt-5 lg:pt-30">
            <p className="font-bold text-4xl">Why Foodies Love Us</p>
            <p className="text-gray-500 mt-5 text-[17px]">We don't just cook food; we create experiences. Every ingredient is sourced fresh, and every recipe is passed down through generations.</p>
            <div className="mt-7 grid grid-cols-2 gap-8">
              <div className="flex gap-3">
                <div className="h-10 w-10 bg-[#FFF7F2] flex justify-center items-center">
                  <GiMeat className="text-3xl text-stone-700"/>
                </div>
                <div>
                  <p className="font-bold">Fresh Ingredients</p>
                  <p className="text-gray-500 text-sm">Sourced daily from local organic farms.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 bg-[#FFF7F2] flex justify-center items-center">
                  <CiDeliveryTruck className="text-3xl text-stone-700"/>
                </div>
                <div>
                  <p className="font-bold">Fast Delivery</p>
                  <p className="text-gray-500 text-sm">Hot meals at your door in under 45 mins.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 bg-[#FFF7F2] flex justify-center items-center">
                  <MdPriceCheck className="text-3xl text-stone-700"/>
                </div>
                <div>
                  <p className="font-bold">Affordable Pricing</p>
                  <p className="text-gray-500 text-sm">Premium taste that won't break the bank.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 bg-[#FFF7F2] flex justify-center items-center">
                  <MdOutlineStarRate className="text-3xl text-stone-700"/>
                </div>
                <div>
                  <p className="font-bold">Top Rated</p>
                  <p className="text-gray-500 text-sm">Over 10,000+ satisfied customers in Lagos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="bg-[#FFF7F2] my-20 py-15 px-4 md:px-8">
          <div className="text-center pt-5">
            <p className="font-bold text-4xl">What Our Customers Say</p>
            <p className="text-gray-500 mt-4">Authentic Reviews from Real Customers</p>
          </div>
          <div className="flex flex-col md:flex-row gap-7 mt-15 justify-between">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <Image
                src="/review1.jpg"
                alt="review1"
                height={200}
                width={200}
                className="h-15 w-15 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Chioma Okafor</p>
                  <p className="text-gray-500 text-sm">Food Enthusiast</p>
                </div>
              </div>
                <div className="flex my-5 text-xl text-orange-500">
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>
                <p className="text-gray-500">"Best Jollof rice I've had in Abuja! The smoky flavor reminds me of my mother's cooking. NaijaBite never disappoints!"</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <Image
                src="/review2.jpg"
                alt="review2"
                height={200}
                width={200}
                className="h-15 w-15 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Emeka Nwosu</p>
                  <p className="text-gray-500 text-sm">Business Executive</p>
                </div>
              </div>
                <div className="flex my-5 text-xl text-orange-500">
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>
                <p className="text-gray-500">"Their delivery is incredibly fast and the food always arrives hot. Perfect for busy workdays when I need authentic Nigerian meals."</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <Image
                src="/review3.jpg"
                alt="review3"
                height={200}
                width={200}
                className="h-15 w-15 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Aisha Bello</p>
                  <p className="text-gray-500 text-sm">Corporate Client</p>
                </div>
              </div>
                <div className="flex my-5 text-xl text-orange-500">
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>
                <p className="text-gray-500">"We ordered catering for our company event and everyone was blown away! Professional service and delicious traditional dishes."</p>
            </div>
          </div>
        </div>

        {/* SPECIAL DEALS */}
        <div className="mt-15 pb-20 px-4 md:px-8">
          <div className="text-center">
            <p className="text-orange-600 bg-orange-100 px-4 font-bold py-2 text-sm rounded-3xl w-fit mx-auto">LIMITED TIME OFFERS</p>
            <p className="font-bold text-4xl mt-3">Today's Special Deals</p>
            <p className="text-gray-500 mt-3">Don't miss out on these amazing offers!</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-7 mt-15">
            <div className="bg-orange-500 rounded-3xl w-full md:w-1/2 p-10">
              <div className="flex items-center gap-2">
                <span className="text-white text-5xl"><PiShootingStarLight /></span>
                <p className="text-white font-bold text-lg">Weekend Special</p>
              </div>
              <p className="font-bold text-white text-4xl mt-3">Family Combo</p>
              <p className="mt-3 text-white/90">Get Jollof Rice + Chicken + Plantain + 2 Drinks for the whole family</p>
              <div className="flex gap-4 mt-5">
                <p className="font-bold text-5xl text-white">₦12,000</p>
                <span className="text-white/50 line-through text-bottom mt-auto text-2xl">₦18,000</span>
              </div>
              <button className="bg-white text-orange-600 rounded-xl h-13 w-33 font-bold mt-5 cursor-pointer">Order Now</button>
            </div>

            <div className="bg-emerald-700 rounded-3xl w-full md:w-1/2 p-10">
              <div className="flex items-center gap-2">
                <span className="text-white text-3xl"><FaRegHeart /></span>
                <p className="text-white font-bold text-lg">First Order</p>
              </div>
              <p className="font-bold text-white text-4xl mt-3">25% OFF</p>
              <p className="mt-3 text-white/90">New to NaijaBite? Get 25% off your first order. Use code: NAIJA25</p>
              <div className="flex flex-col mt-5">
                <button className="bg-white/25 text-white text-lg border border-white/40 rounded-xl h-13 w-30 font-bold mt-5">NAIJA25</button>
                <button className="bg-white text-emerald-700 rounded-xl h-13 w-35 font-bold mt-5 cursor-pointer">Claim Offer</button>
              </div>
            </div>
          </div>
          <div className="text-center mx-5 md:mx-40 mt-10 md:mt-30 p-5 md:p-15 rounded-4xl bg-green-950">
          <h3 className="font-bold text-2xl md:text-4xl text-white lg:text-5xl">Hungry? Let's get your meal ready in minutes</h3>
          <p className="text-gray-400 text-xl mt-7">Join thousands of happy customers who enjoy the best Nigerian cuisine everyday.</p>
          <Link href="/menu/all"><button className="text-white text-lg font-bold bg-orange-500 h-12 w-35 mt-5 md:h-15 md:w-40 md:mt-8 rounded-xl cursor-pointer">Order Now</button></Link>
        </div>
        </div>

        
    </main>
  )
};