    "use client"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";

export default function Catering() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        date: "",
        guests: "",
        eventType: "",
    });

    const handleClose = ()=> {
        setOpen(false);
        setMessage("");
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value,}));
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError(false);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    type: "contact",
                    data: formData,
                }),
            });

            if(!response.ok) throw new Error();
            setMessage("Message sent successfully!");
            setOpen(true);
            setFormData({
                name: "",
                email: "",
                message: "",
                date: "",
                guests: "",
                eventType: "",
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

    return (
        <main>
            <div className="px-8 py-10 pt-40 pb-20 flex flex-col lg:flex-row gap-20 bg-gray-100">
                <div className="lg:w-1/2">
                    <p className="font-bold text-4xl mb-4 md:text-5xl md:mb-8 leading-snug">Elevate Your Events with Authentic Cuisine</p>
                    <p className="text-gray-500 text-lg">Whether it's a wedding, corporate event, or a simple house party, we provide premium catering services that leave your guests raving.</p>
                    <div className="flex items-center gap-3 mt-8">
                        <span className="bg-green-200 text-green-800 text-xl rounded-full p-1"><BsCheck2Circle /></span>
                        <div>
                            <p className="font-bold text-lg">Custom Menus</p>
                            <p className="text-gray-500">Tailored to your guest preferences and dietary needs.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-8">
                        <span className="bg-green-200 text-green-800 text-xl rounded-full p-1 "><BsCheck2Circle /></span>
                        <div>
                            <p className="font-bold text-lg">Custom Menus</p>
                            <p className="text-gray-500">Tailored to your guest preferences and dietary needs.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-8">
                        <span className="bg-green-200 text-green-800 text-xl rounded-full p-1 "><BsCheck2Circle /></span>
                        <div>
                            <p className="font-bold text-lg">Custom Menus</p>
                            <p className="text-gray-500">Tailored to your guest preferences and dietary needs.</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Image
                        src="/egs1.jpg"
                        alt="egusi"
                        height={500}
                        width={500}
                        className="object-cover h-70 w-full rounded-3xl"
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="px-5 md:px-10 py-15 bg-white lg:w-1/2 rounded-4xl shadow-lg">
                    <p className="font-bold text-3xl">Request a Quote</p>
                    <div className="mt-6 flex flex-col md:flex-row gap-3 md:gap-6">
                        <div className="w-full">
                            <label className="text-sm text-gray-700">Full Name</label>
                            <input 
                            onChange={handleChange} 
                            value={formData.name}
                            required
                            name="name"
                            type="text" 
                            className="h-13 px-4 w-full border border-gray-200 rounded-2xl placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-orange-500" placeholder="John Doe"/>
                        </div>
                        <div className="w-full">
                            <label className="text-sm text-gray-700">Email Address</label>
                            <input
                            onChange={handleChange}
                            required
                            name="email"
                            value={formData.email}
                            type="email" className="h-13 px-4 w-full border border-gray-200 rounded-2xl placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-orange-500" placeholder="john@example.com"/>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row gap-3 md:gap-6">
                        <div className="w-full">
                            <label className="text-sm text-gray-700">Event Date</label>
                            <input
                            required
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            type="date" className="h-13 px-4 w-full border border-gray-200 rounded-2xl placeholder:text-gray-400 focus:outline-none focus:border-2 focus:border-orange-500" placeholder="John Doe"/>
                        </div>
                        <div className="w-full">
                            <label className="text-sm text-gray-700">Guest Count</label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                                className="h-13 px-4 border border-gray-200 rounded-2xl w-full focus:outline-none focus:border-2 focus:border-orange-500 appearance-none"
                            >
                                <option value="20-50">20 - 50</option>
                                <option value="50-100">50 - 100</option>
                                <option value="100-500">100 - 500</option>
                                <option value="500+">500+</option>
                            </select>
                        </div>
                        
                    </div>

                    <div className="mt-6">
                        <p className="text-sm text-gray-700">Event Type</p>
                        <div className="flex gap-4">
                            <label className="w-full h-13 border items-center flex gap-2 px-3 border-gray-200 rounded-2xl cursor-pointer">
                                <input 
                                required
                                checked={formData.eventType === "wedding"}
                                value="wedding"
                                name="eventType"
                                onChange={handleChange}
                                type="radio"/>
                                <span className="font-medium">Wedding</span>
                            </label>
                            <label className="w-full h-13 border items-center flex gap-2 px-3 border-gray-200 rounded-2xl cursor-pointer">
                                <input
                                onChange={handleChange}
                                name="eventType"
                                checked={formData.eventType === "corporate"}
                                value="corporate"
                                type="radio"/>
                                <span className="font-medium">Corporate</span>
                            </label>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <label className="w-full h-13 border items-center flex gap-2 px-3 border-gray-200 rounded-2xl cursor-pointer">
                                <input
                                onChange={handleChange}
                                name="eventType"
                                checked={formData.eventType === "birthday"}
                                value="birthday"
                                type="radio"/>
                                <span className="font-medium">Birthday</span>
                            </label>
                            <label className="w-full h-13 border items-center flex gap-2 px-3 border-gray-200 rounded-2xl cursor-pointer">
                                <input
                                name="eventType"
                                checked={formData.eventType === "other"}
                                value="other"
                                onChange={handleChange}
                                type="radio"/>
                                <span className="font-medium">Other</span>
                            </label>
                        </div>
                        <div className="w-full mt-6">
                            <p className="text-sm text-gray-700">Additional Notes</p>
                            <textarea
                            name="message"
                            value={formData.message}
                            required
                            onChange={handleChange}
                            className="h-30 border border-gray-400 rounded-2xl w-full p-3 resize-none focus:outline-none focus:border-2 focus:border-orange-500" placeholder="Tell us more about your event..."/>
                        </div>
                        <button disabled={loading} type="submit" className="text-white font-bold bg-orange-500 w-full h-15 mt-5 rounded-2xl text-lg disabled:opacity-50">{loading ? "Submitting..." : "Submit Enqury"}</button>
                    </div>
                </form>
            </div>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Status</DialogTitle>
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