import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// components/MobileSolution.jsx
export default function MobileSolution() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    const solutions = [
        {
            icon: (
                // Construction icon (helmet)
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 17v-2a8 8 0 1 1 16 0v2"></path>
                    <path d="M9 21h6"></path>
                    <path d="M12 17v4"></path>
                </svg>
            ),
            title: "Construction",
            desc: "Advanced mobile app solutions that take Construction into the Digital Era.",
        },
        {
            icon: (
                // mHealth icon (heart)
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 4.01 13.44 5.61C13.97 4.01 15.64 3 17.38 3C20.46 3 22.88 5.42 22.88 8.5C22.88 13.5 15 21 15 21H12Z"></path>
                </svg>
            ),
            title: "mHealth",
            desc: "Patient-friendly mobile software that empowers healthcare industry workers.",
        },
        {
            icon: (
                // Retail icon (shopping bag)
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 2l1.5 4h9L18 2"></path>
                    <rect x="3" y="6" width="18" height="14" rx="2"></rect>
                </svg>
            ),
            title: "Retail & eCommerce",
            desc: "Engaging mobile software solutions for modern retail.",
        },
        {
            icon: (
                // FinTech icon (currency)
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8M8 12h8"></path>
                </svg>
            ),
            title: "FinTech",
            desc: "Meet the demands of modern customers in speed and security with scalable financial technology.",
        },
        {
            icon: (
                // Travel icon (plane)
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M2.5 19.5L21.5 12L2.5 4.5L4.5 12L2.5 19.5Z"></path>
                </svg>
            ),
            title: "Travel & Hospitality",
            desc: "Extend the comfort of your resort with practical mobile software solutions.",
        },
        {
            icon: (
                // Insurance icon (shield)
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 3l7 4v5c0 5-3.5 9.74-7 11c-3.5-1.26-7-6-7-11V7l7-4z"></path>
                </svg>
            ),
            title: "Insurance",
            desc: "Boost the profitability and safety of your business processes through innovative mobile app solutions.",
        },
    ];

    return (
        <section className="bg-white py-12">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
                    MOBILE APP SOLUTIONS FOR VERTICALS
                </h2>
                <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
                    From startups to enterprises, we’ve gained vast experience in delivering innovative digital solutions for a wide range of clients across multiple industries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {solutions.map((s, i) => (
                        <div
                            key={i}
                            data-aos="zoom-in"
                            className="bg-white hover:bg-[#4763ad] rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-start hover:shadow-md transition group"
                        >
                            <div className="mb-4 text-gray-700 group-hover:text-white transition">{s.icon}</div>
                            <h3 className="font-semibold text-gray-800 group-hover:text-white mb-1 transition">{s.title}</h3>
                            <p className="text-gray-500 group-hover:text-white text-sm transition">{s.desc}</p>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
