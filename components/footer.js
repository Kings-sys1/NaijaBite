  "use client"
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export function Footer() {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
  if (!message) return;

  const timer = setTimeout(() => {
    setMessage("");
    setError(false);
  }, 3000);

  return () => clearTimeout(timer);
}, [message]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage("");
      setError(false);
      
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify({
            type: "newsletter",
            data: {email},
          }),
        });
        if (!response.ok) throw new Error();
        setMessage("succesfully joined!")
        setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("Failed to join. please try again");
      setError(true);
    } finally {
      setLoading(false);
    }

      };
    
    return (
        <footer className="px-4 md:px-5 lg:px-8 py-10 bg-green-950">
          <div className="overflow-hidden grid grid-cols-2 gap-2 md:flex md:justify-between lg:gap-10">
            <div>
              <p className="font-bold text-xl md:text-2xl text-white">Naija<span className="text-orange-500">Bite</span></p>
              <ul>
                <li className="mt-3 md:mt-5 text-gray-400 text-xs md:text-sm max-w-[150px] md:max-w-[240px]">Authentic Nigerian flavors delivered straight to your doorstep. From spicy Jollof to savory Egusi, we bring the heart of Nigeria to your table.</li>
              </ul>
              <div className="flex gap-3 text-white text-2xl mb-5 md:mb-0 mt-3">
                <FiFacebook className="cursor-pointer"/>
                <FaXTwitter className="cursor-pointer"/>
                <FaInstagram className="cursor-pointer"/>
              </div>
            </div>
            <div>
              <p className="font-bold text-lg md:text-xl text-white">Quick Links</p>
              <ul className="text-gray-400 leading-[25px] md:leading-[30px] lg:leading-[40px] mt-3 md:mt-5 text-sm">
                <li className="cursor-pointer">Our Menu</li>
                <li className="cursor-pointer">Order Tracking</li>
                <li className="cursor-pointer">Catering Services</li>
                <li className="cursor-pointer">Offers & Discounts</li>
              </ul>
            </div>
            <div className="">
              <p className="font-bold text-xl text-white">Contact Us</p>
              <ul className="text-gray-400 leading-[40px] mt-5 text-sm">
                <li className="flex gap-1 items-center"><span className="text-orange-500"><IoCallOutline /></span>+234 800 123 4567</li>
                <li className="md:w-65 leading-relaxed">123 Adetokunbo Ademola St, Victoria Island, Lagos</li>
                <li>orders@naijabite.com</li>
              </ul>
            </div>
            <div className=" ">
              <p className="font-bold text-xl text-white">Join the Tribe</p>
              <ul className="text-gray-400 leading-[40px] mt-5 text-sm">
                <li className=" leading-relaxed">Subscribe to get updates on new dishes and special offers.</li>
              </ul>
              <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4">
                <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="h-10 w-full flex-grow bg-green-900 text-gray-400 p-3 rounded-l-xl focus:outline-none focus:border-2 focus:border-orange-500" placeholder="Email address"/>
                <button className="font-semibold text-white bg-orange-500 h-10 px-2 rounded-r-xl flex justify-center items-center cursor-pointer flex-grow" type="submit">
                  {loading ? "joining" : "join"}
                </button>
              </form>
              {message && (
                <p className={`text-sm ${error ? "text-red-500" : "text-green-600"}`}>
                  {message}
                </p>
              )}
            </div>
          </div>
          <div className="h-[0.5px] bg-gray-500 my-7 w-full"></div>
          <div className="flex text-gray-400 text-xs justify-center gap-2">
            <p>&copy; {year} NaijaBite.</p>
            <p>All rights reserved.</p>
            <p>Designed with love for Nigerian Cuisine.</p>
          </div>
        </footer>
    )
}