    "use client"
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { useEffect, useState } from "react";
import Error from "next/error";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

export default function Contact() {
    const [formData, setFormData] = useState({
        names: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [newsletter, setNewsletter] = useState("");
    const [newsletterLoading, setNewsletterLoading] = useState(false);
    const [newsletterError, setNewsletterError] = useState(false);
    const [newsletterMessage, setNewsletterMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Most orders are delivered within 45-60 minutes depending on your location and order size."
    },
    {
      question: "Do you offer catering for small parties?",
      answer: "Yes! We cater for events of all sizes, from intimate gatherings of 10 to large weddings of 1000+ guests."
    },
    {
      question: "Can i customize my spice levels?",
      answer: "Absolutely. When ordering, you can add notes for the kitchen regarding your preference for spice intensity."
    },
    {
      question: "Is your meat sourced locally?",
      answer: "Yes, we partner with local farmers to ensure our meat is fresh and supports the community."
    }
  ];

    const handleClose = ()=> {
        setOpen(false);
        setMessage("");
    }
    const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData((prev) => ({...prev, [name]: value,}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError(false);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "contact",
                    data: formData,
                }),
            });
            
            if(!response.ok) throw new Error();
            setMessage("Message sent successfully!");
            setOpen(true);
            setFormData({
                names: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            setMessage("Failed, please try again!");
            setError(true);
            setOpen(true);
        } finally {
            setLoading(false);
        }
    };
//     useEffect(() => {
//     if (!message) return;

//     const timer = setTimeout(() => {
//         setMessage("");
//         setError(false);
//     }, 3000);

//     return () => clearTimeout(timer);
// }, [message]);
    
    const handleSubscribe = async (e) => {
        e.preventDefault();

        setNewsletterLoading(true);
        setNewsletterMessage("");
        setNewsletterError(false);

        try {
        const response = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: newsletter }),
        });

        if (!response.ok) throw new Error();

        setNewsletterMessage("Successfully joined!");
        setNewsletter(""); // clears input
    } catch (err) {
        setNewsletterMessage("Failed to join. Please try again.");
        setNewsletterError(true);
    } finally {
        setNewsletterLoading(false);
    }
    };
    useEffect(() => {
    if (!newsletterMessage) return;

    const timer = setTimeout(() => {
        setNewsletterMessage("");
        setNewsletterError(false);
    }, 3000);

    return () => clearTimeout(timer);
}, [newsletterMessage]);

    return (
        <main>
            <div className=" pt-40 px-4 md:px-8 pb-20 bg-gray-100">
                <div className="flex flex-col md:flex-row gap-15">
                    <div className="md:w-1/2">
                        <p className="font-bold text-5xl">Get in Touch</p>
                        <p className="text-gray-500 text-xl mt-6">Have questions about your order or our services? We're here to help!</p>
                        <div className="flex gap-3 mt-10">
                            <span className="flex items-center justify-center h-11 w-11 bg-orange-200 text-2xl rounded-xl text-orange-500"><IoLocationOutline /></span>
                            <div>
                                <p className="font-bold text-xl">Visit Us</p>
                                <p className="text-gray-400">123 Adetokunbo Ademola St, Victoria Island, Lagos</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-10">
                            <span className="flex items-center justify-center h-11 w-11 bg-orange-200 text-2xl rounded-xl text-orange-500"><MdAccessTime /></span>
                            <div>
                                <p className="font-bold text-xl">Opening Hours</p>
                                <p className="text-gray-400">Mon - Sat: 9:00 AM - 10:00 PM</p>
                                <p className="text-gray-400">Sun: 12:00 PM - 8:00 PM</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="flex gap-3">
                                <span className="flex items-center justify-center h-11 w-11 bg-green-200 text-2xl rounded-xl text-green-600"><IoChatbubblesOutline /></span>
                                <div>
                                    <p className="font-bold text-xl">Chat with Us</p>
                                    <p className="text-gray-400">WhatsApp: +234 813 603 0632</p>
                                    <div className="mt-3">
                                        <a href="https://wa.me/+2348136030632"><button className="text-white text-sm font-bold bg-emerald-600 h-9 w-full lg:w-45 rounded-xl cursor-pointer">Start WhatsApp Chat</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="flex gap-3">
                                <span className="flex items-center justify-center h-11 w-11 bg-blue-200 text-2xl rounded-xl text-blue-600"><MdConnectWithoutContact /></span>
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-xl">Connect With Us</p>
                                    <div className="mt-3 flex gap-8 text-2xl text-gray-400">
                                        <FiFacebook className="cursor-pointer"/>
                                        <FaInstagram className="cursor-pointer"/>
                                        <FaXTwitter className="cursor-pointer"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 md:p-10 rounded-3xl shadow-lg md:w-1/2">
                        <p className="font-bold text-3xl mt-4">Send a Message</p>
                        <form onSubmit={handleSubmit} className="w-full mt-8">
                            <label className="text-gray-600 text-sm font-medium">Name</label>
                            <input 
                            type="text"
                            name="names"
                            required
                            value={formData.names}
                            onChange={handleChange}
                            className="p-3 h-13 w-full border border-gray-300 rounded-2xl mb-5 focus:outline-none focus:border-2 focus:border-orange-500"/>

                            <label className="text-gray-600 text-sm font-medium">Email</label>
                            <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 h-13 w-full border border-gray-300 rounded-2xl mb-5 focus:outline-none focus:border-2 focus:border-orange-500"/>

                            <label className="text-gray-600 text-sm font-medium">Message</label>
                            <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="p-3 h-35 w-full border border-gray-300 rounded-2xl focus:outline-none focus:border-2 focus:border-orange-500 resize-none"/>
                            <button disabled={loading} className="text-white font-bold bg-orange-500 mt-4 w-full h-14 rounded-2xl cursor-pointer disabled:opacity-50">{loading ? "sending" : "Send Message"}</button>
                        </form>
                    </div>
                </div>

                
                <div className="mx-1 md:mx-50 space-y-4">
                    <div className="mt-20 text-center">
                        <p className="text-orange-600 text-sm mb-3 font-semibold">HELP CENTER</p>
                        <p className="font-bold text-4xl">Frequently Asked Questions</p>
                    </div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white pt-3 md:pt-4 px-2 rounded-2xl mt-4 shadow overflow-hidden">

                            {/* Question Section */}
                            <div
                                onClick={() =>
                                setActiveIndex(activeIndex === index ? null : index)
                                }
                                className="flex justify-between items-center p-4 cursor-pointer"
                            >
                                <h3 className="font-semibold md:text-lg">{faq.question}</h3>

                                {/* Your "?" icon */}
                                <span
                                className={`flex justify-center items-center border-2 border-gray-400 text-gray-400 font-semibold h-5 w-5 rounded-full transition-transform duration-300 ${
                                    activeIndex === index ? "rotate-180 text-orange-500 border-orange-500" : ""
                                }`}
                                >?</span>
                            </div>

                            {/* Answer Section */}
                            <div
                                className={`transition-all duration-300 overflow-hidden ${
                                activeIndex === index ? "max-h-40 p-4 border-t border-gray-400" : "max-h-0 border-gray-400"
                                }`}
                            >
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                        ))}
                </div>
  

                <div className="bg-green-950 rounded-2xl p-5 py-10 mt-15 md:p-20">
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <p className="font-bold text-white text-4xl">Join Our Community</p>
                            <p className="text-gray-400 mt-5 text-lg">Subscribe to our newsletter and be the first to know about new dishes, special discounts, and secret recipes from our kitchen.</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <form onSubmit={handleSubscribe} className="flex items-center gap-0.5">
                                <input
                                required
                                value={newsletter}
                                onChange={(e) => setNewsletter(e.target.value)}
                                type="email"
                                className="h-15 border rounded-l-xl border-gray-500 w-full px-5 placeholder:text-gray-500 focus:outline-none focus:border-2 focus:border-orange-500 bg-green-900/50 text-white" placeholder="Enter your email"/>
                            <button type="submit" disabled={newsletterLoading} className="font-bold text-white bg-orange-500 h-15 rounded-r-xl px-5 cursor-pointer disabled:opacity-50">{newsletterLoading ? "Subscribing..." : "Subscribe"}</button>
                            
                            </form>
                            {newsletterMessage && (
                                <p className={`mt-3 text-sm text-center ${newsletterError ? "text-red-400" : "text-green-400"}`}>{newsletterMessage}</p>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <Typography>{message}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </main>
    )
}