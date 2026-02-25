import Image from "next/image";
import { BsStar } from "react-icons/bs";
import { LuCircleCheckBig } from "react-icons/lu";
import { FiGlobe } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";

export default function About() {
    return (
        <main className="bg-gray-100 py-5 min-h-screen">
            <div className="flex flex-col lg:flex-row gap-10 px-4 md:px-8 pb-30 pt-40">
                <div className="lg:w-1/2">
                    <p className="text-orange-500 font-semibold">Our Story</p>
                    <p className="font-bold text-5xl mt-5">From Grandma's Kitchen to Your Doorstep</p>
                    <p className="text-gray-500 mt-10 text-lg">NaijaBite started with a simple mission: to make authentic, high-quality Nigerian cuisine accessible to everyone, anywhere. We believe that food is a bridge between cultures and a way to share love.</p>
                    <p className="text-gray-500 mt-10 text-lg">Every dish we serve is crafted with the same love and attention to detail that our founder's grandmother used in her Lagos kitchen decades ago. We don't cut corners on ingredients or flavor.</p>
                    <div className="flex gap-7 md:gap-10 mt-5">
                        <div className="flex items-center gap-1 md:gap-2 text-green-700">
                            <span className="text-xl"><FiGlobe /></span>
                            <p className="text-sm">100% TRADITIONAL</p>
                        </div>
                        <div className="text-green-700 flex items-center gap-1 md:gap-2">
                            <span className="text-xl"><LuLeaf /></span>
                            <p className="text-sm">FARM TO TABLE</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 lg:w-1/2">
                    <div>
                        <div className="h-100 ">
                            <Image
                            src="/kitch4.jpg"
                            alt="children"
                            height={500}
                            width={500}
                            className="h-full rounded-3xl"
                            />
                        </div>
                        <div className="h-60 mt-4 bg-orange-500 rounded-3xl flex flex-col justify-center items-center">
                            <div className="flex items-center">
                                <p className="font-bold text-4xl text-white">10k</p><span className="text-3xl font-bold text-white">+</span>
                            </div>
                            <p className="text-sm text-white/60 mt-1">HAPPY CUSTOMERS</p>
                        </div>
                    </div>
                    <div>
                        <div className="h-60  mt-20">
                            <Image
                            src="/grandma1.jpg"
                            alt="children"
                            height={500}
                            width={500}
                            className="h-full rounded-3xl"
                            />
                        </div>
                        <div className="h-100 mt-4">
                            <Image
                            src="/grill.jpg"
                            alt="children"
                            height={500}
                            width={500}
                            className="h-full rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center font-bold">
                <p className="text-red-500 text-sm mb-5">OUR JOURNEY</p>
                <p className="text-4xl">Growing With Every Bite</p>
            </div>
            <div className="overflow-hidden relative my-20 mx-10 ">

                {/* Vertical Line */}
                <div className="absolute overflow-hidden left-1/2 bottom-40 md:bottom-29 lg:bottom-24 h-full w-0.5 bg-orange-200 -translate-x-1/2"></div>

                {/* ITEM 1 - LEFT */}
                <div className="relative flex justify-start pb-16">
                    
                    {/* Horizontal Line */}
                    <div className="absolute left-1/2 top-0 w-12 h-1 bg-orange-200 -translate-x-full"></div>

                    {/* Dot */}
                    <div className="absolute left-1/2 top-0 w-4 h-4 bg-orange-300 rounded-full -translate-x-1/2 z-10"></div>

                    {/* Card */}
                    <div className="w-1/2 z-10 pr-5 md:px-10">
                    <div className="bg-white p-3 md:p-6 rounded-xl shadow-md">
                        <h3 className="text-orange-500 text-xl font-bold">2015</h3>
                        <h4 className="font-semibold">The Humble Beginning</h4>
                        <p className="text-sm md:text-base">Started as a small weekend-only catering service in a home kitchen in Surulere.</p>
                    </div>
                    </div>
                </div>

                {/* ITEM 2 - RIGHT */}
                <div className="relative flex justify-end mb-16">

                    {/* Horizontal Line */}
                    <div className="absolute left-1/2 top-6 w-12 md:w-12 h-1 bg-orange-200"></div>

                    {/* Dot */}
                    <div className="absolute left-1/2 top-5 w-4 h-4 bg-orange-300 rounded-full -translate-x-1/2 z-10"></div>

                    {/* Card */}
                    <div className="w-1/2 z-10 pl-5 md:px-10">
                    <div className="bg-white p-3 md:p-6 rounded-xl shadow-md">
                        <h3 className="text-orange-500 text-xl font-bold">2017</h3>
                        <h4 className="font-semibold">First Physical Outlet</h4>
                        <p className="text-gray-500 text-sm md:text-base">Opened our first flagship restaurant in Victoria Island, Lagos.</p>
                    </div>
                    </div>
                </div>

                {/* ITEM 3 - LEFT */}
                <div className="relative flex justify-start mb-16">
                    
                    {/* Horizontal Line */}
                    <div className="absolute left-1/2 top-10 w-12 h-1 bg-orange-200 -translate-x-full"></div>

                    {/* Dot */}
                    <div className="absolute left-1/2 top-8.5 w-4 h-4 bg-orange-300 rounded-full -translate-x-1/2 z-10"></div>

                    {/* Card */}
                    <div className="w-1/2 z-10 pr-5 md:px-10">
                    <div className="bg-white p-3 md:p-6 rounded-xl shadow-md">
                        <h3 className="text-orange-500 text-xl font-bold">2020</h3>
                        <h4 className="font-semibold">NaijaBite Express</h4>
                        <p className="text-gray-500 text-sm">Launched our proprietary delivery app to serve customers during the global pandemic.</p>
                    </div>
                    </div>
                </div>

                {/* ITEM 4 - RIGHT */}
                <div className="relative flex justify-end ">

                    {/* Horizontal Line */}
                    <div className="absolute left-1/2 top-8 w-12 h-1 bg-orange-200"></div>

                    {/* Dot */}
                    <div className="absolute left-1/2 top-6 w-4 h-4 bg-orange-300 rounded-full -translate-x-1/2 z-10"></div>

                    {/* Card */}
                    <div className="w-1/2 z-10 pl-5 md:px-10">
                    <div className="bg-white p-3 md:p-6 rounded-xl shadow-md">
                        <h3 className="text-orange-500 text-xl font-bold">2023</h3>
                        <h4 className="font-semibold">Expanding Horizons</h4>
                        <p className="text-gray-500 text-sm">Now operating across 5 major cities with over 500 team members</p>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="text-center mx-5 md:mx-8 mb-20 px-7 py-20 md:px-20 md:py-30 rounded-4xl bg-green-950">
                <h3 className="font-bold text-5xl text-white text-4xl">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-15">
                    <div className="flex flex-col jusify-center items-center">
                        <span className="text-3xl text-orange-400 rounded-xl">
                            <BsStar/>
                        </span>
                        <p className="text-white font-bold text-2xl mt-4">Quality First</p>
                        <p className="text-gray-400 leading-relaxed mt-4">We never compromise on the quality of our ingredients or the authenticity of our recipes.</p>
                    </div>
                    <div className="flex flex-col jusify-center items-center">
                        <span className="text-3xl text-orange-400 rounded-xl">
                            <BsStar/>
                        </span>
                        <p className="text-white font-bold text-2xl mt-4">Customer Obsessed</p>
                        <p className="text-gray-400 leading-relaxed mt-4">Your satisfaction is our primary goal. We listen, learn, and improve every day.</p>
                    </div>
                    <div className="flex flex-col jusify-center items-center">
                        <span className="text-3xl text-orange-400 rounded-xl">
                            <BsStar/>
                        </span>
                        <p className="text-white font-bold text-2xl mt-4">Cultural Pride</p>
                        <p className="text-gray-400 leading-relaxed mt-4">We celebrate Nigerian heritage through the universal language of delicious food.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center">
                    <p className="text-red-500 text-sm mb-5 font-bold">OUR TEAM</p>
                    <p className="text-4xl font-bold">The Hearts Behind the Heat</p>
                    <p className="text-gray-500 mt-2">Meet the passionate individuals dedicated to bringing you the best dining experience.</p>
                </div>

                {/* Team members profiles */}
                <div className="py-10 md:py-20 px-5 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="rounded-4xl shadow-lg bg-white">
                            <Image
                            src="/chef1.jpg"
                            alt="image1"
                            height={200}
                            width={200}
                            className="h-85 w-full object-cover rounded-t-4xl"
                            />
                            <div className="text-center my-5">
                                <p className="font-bold text-xl">Chef Bakary</p>
                                <p className="text-orange-600 text-sm">Executive Chef</p>
                            </div>
                        </div>
                        <div className="rounded-4xl shadow-lg bg-white">
                            <Image
                            src="/byteMngr.jpg"
                            alt="image1"
                            height={200}
                            width={200}
                            className="h-85 w-full object-cover rounded-t-4xl"
                            />
                            <div className="text-center my-5">
                                <p className="font-bold text-xl">Sarah Jonas</p>
                                <p className="text-orange-600 text-sm">Operations Manager</p>
                            </div>
                        </div>
                        <div className="rounded-4xl shadow-lg bg-white">
                            <Image
                            src="/headlog1.jpg"
                            alt="image1"
                            height={200}
                            width={200}
                            className="h-85 w-full object-cover rounded-t-4xl"
                            />
                            <div className="text-center my-5">
                                <p className="font-bold text-xl">Samuel Baron</p>
                                <p className="text-orange-600 text-sm">Logistics Head</p>
                            </div>
                        </div>
                        <div className="rounded-4xl shadow-lg bg-white">
                            <Image
                            src="/customer.jpg"
                            alt="image1"
                            height={200}
                            width={200}
                            className="h-85 w-full rounded-t-4xl"
                            />
                            <div className="text-center my-5">
                                <p className="font-bold text-xl">Amina Yusuf</p>
                                <p className="text-orange-600 text-sm">Customer Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 md:px-13 py-10 md:py-20 mb-10 mx-5 md:mx-8 rounded-4xl bg-[#FFF7E9]">
                <div className="flex flex-col pb-10 lg:flex-row gap-10">
                    <div className="lg:w-1/2">
                        <p className="font-bold text-orange-600">SUSTAINABILITY</p>
                        <p className="font-bold text-4xl my-3 md:my-5">Sourcing Responsibly, Serving Authentically</p>
                        <p className="text-gray-500 mb-6">We believe in the power of local. 90% of our ingredients come directly from Nigerian farmers and markets. This not only ensures the freshest taste but also supports the local economy and reduces our carbon footprint.</p>
                        <div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-green-600 text-xl"><LuCircleCheckBig /></span>
                                <p className="font-semibold text-gray-600">Direct relationships with 20+ local farms</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-green-600 text-xl"><LuCircleCheckBig /></span>
                                <p className="font-semibold text-gray-600">Direct relationships with 20+ local farms</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-green-600 text-xl"><LuCircleCheckBig /></span>
                                <p className="font-semibold text-gray-600">Direct relationships with 20+ local farms</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-green-600 text-xl"><LuCircleCheckBig /></span>
                                <p className="font-semibold text-gray-600">Direct relationships with 20+ local farms</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <Image
                        src="/fud.jpg"
                        alt="foodstuff"
                        height={300}
                        width={300}
                        className="h-90 lg:h-full w-full object-cover rounded-3xl"
                        />
                        <div className="bg-white rounded-2xl p-5 md:w-1/2 absolute bottom-[-60] left-[-10] md:left-[-25] lg:left-[-45] shadow-lg">
                            <div className="flex gap-2 mb-2">
                                <span className="text-2xl text-green-700"><LuLeaf /></span>
                                <p className="font-bold">Eco-Friendly Award</p>
                            </div>
                            <p className="text-xs text-gray-500">2024 Sustainable Restaurant of the Year</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}