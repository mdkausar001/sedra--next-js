import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
    return (
        <div className="min-h-screen px-4 py-32 bg-gradient-to-br from-[#001f3f] to-[#011936] text-white font-sans">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Left: Contact Info */}
                <div className="gap gap-y-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 tracking-widest">
                        INFORMATION
                    </h2>
                    <div className="flex items-start gap-6 mb-4">
                        <MapPin className="text-cyan-400 w-6 h-6" />
                        <p className="mb-4 leading-relaxed text-gray-200">
                            Kingdom of Saudi Arabia<br />
                            AL Madinah Al Monwarah street, Al Bawadi Dis, Al Madina Plaza Building,<br />
                            Floor 5, Office 505
                        </p></div>

                    <div className="flex items-start gap-6 mb-4">
                        <Phone className="text-cyan-400 w-6 h-6" />
                        <p>
                            Tel: 00 966 114 229 922<br />
                            Fax: 00 966 11 211 411
                        </p>
                    </div>

                    <div className="flex items-start gap-6 mb-4">
                        <Mail className="text-cyan-400 w-6 h-6" />
                        <p>info@sedra.net.sa</p>
                    </div>

                    <div className="flex items-start gap-6 mb-4">
                        <MapPin className="text-cyan-400 w-6 h-6" />
                        <p>www.sedra.net.sa</p>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 tracking-widest">
                        GET IN TOUCH
                    </h2>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full border border-cyan-400 bg-transparent px-4 py-2 rounded outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                            />

                        </div>
                        <div className="flex flex-col md:flex-row gap-4">

                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full border border-cyan-400 bg-transparent px-4 py-2 rounded outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-cyan-400 bg-transparent px-4 py-2 rounded outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                            />

                        </div>
                        <div className="flex flex-col md:flex-row gap-4">

                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="w-full border border-cyan-400 bg-transparent px-4 py-2 rounded outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <textarea
                            rows={5}
                            placeholder="Message"
                            className="w-full border border-cyan-400 bg-transparent px-4 py-2 rounded outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="mt-4 px-6 py-2 bg-cyan-400 text-blue-900 font-semibold rounded shadow hover:bg-cyan-300 transition"
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
