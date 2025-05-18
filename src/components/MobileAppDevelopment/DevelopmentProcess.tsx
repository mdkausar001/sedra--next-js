// components/DevelopmentProcess.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
    {
        title: "Planning",
        icon: (
            // Example: funnel icon
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 4h18l-7 8v6l-4 2v-8l-7-8z" />
            </svg>
        ),
        desc: "We collaborate closely with you to gather all the necessary information to create a custom mobile app that perfectly aligns with your expectations.",
    },
    {
        title: "Designing",
        icon: (
            // Example: pencil icon
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 1 1 2.828 2.828L11.828 15.828A2 2 0 0 1 9 13z" />
            </svg>
        ),
        desc: "Our designers craft intuitive and visually appealing interfaces, ensuring seamless user experiences across all devices.",
    },
    {
        title: "Defining",
        icon: (
            // Example: document icon
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 2v4M16 2v4" />
            </svg>
        ),
        desc: "We define technical requirements, features, and architecture to ensure your app’s structure aligns with your business objectives.",
    },
    {
        title: "Building",
        icon: (
            // Example: cog icon
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1c.17-.36.11-.78-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51c.36.17.78.11 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
        desc: "Our developers bring your app to life using best practices and the latest technologies for robust, scalable solutions.",
    },
    {
        title: "Testing",
        icon: (
            // Example: checklist icon
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
        ),
        desc: "Rigorous testing ensures your app is bug-free, secure, and performs optimally across all devices and platforms.",
    },
    {
        title: "Deployment",
        icon: (
            // Example: upload icon
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                <polyline points="7 9 12 4 17 9" />
                <line x1="12" y1="4" x2="12" y2="16" />
            </svg>
        ),
        desc: "We launch your app on the App Store and Google Play, ensuring a smooth go-live process and user adoption.",
    },
    {
        title: "Maintenance",
        icon: (
            // Example: wrench icon
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22.7 19.3a1 1 0 0 1-1.4 0l-2.1-2.1a7 7 0 0 1-8.5-8.5l-2.1-2.1a1 1 0 0 1 1.4-1.4l2.1 2.1a7 7 0 0 1 8.5 8.5l2.1 2.1a1 1 0 0 1 0 1.4z" />
            </svg>
        ),
        desc: "We provide ongoing support, updates, and enhancements to keep your app running smoothly and securely.",
    },
];

export default function DevelopmentProcess() {
    const [open, setOpen] = useState(0);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 10,
        });
    }, []);

    return (
        <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl text-gray-700 md:text-3xl font-bold text-center mb-3">
                    KEY STEPS IN OUR MOBILE APP DEVELOPMENT PROCESS
                </h2>
                <p className="text-center text-gray-500 mb-10 max-w-3xl mx-auto">
                    Tailored to your needs and budget, we use top practices to build mobile app solutions quickly and efficiently. Enjoy a smooth mobile app development process with clear communication with our professional team.
                </p>
                <div className="flex flex-col md:flex-row md:items-start gap-10">
                    {/* Accordion */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-white rounded-lg p-6">
                            {steps.map((step, i) => (
                                <div key={step.title} className="border-b last:border-b-0 text-gray-700 border-gray-200">
                                    <button
                                        className={`flex items-center w-full py-4 focus:outline-none transition-colors ${open === i ? "text-blue-600" : "text-gray-800"}`}
                                        onClick={() => setOpen(open === i ? -1 : i)}
                                    >
                                        <span className="mr-3">{step.icon}</span>
                                        <span className="font-semibold flex-1 text-left">{step.title}</span>
                                        <svg
                                            className={`w-5 h-5 ml-2 transform transition-transform ${open === i ? "rotate-180 text-blue-600" : "text-gray-400"}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {open === i && (
                                        <div className="pl-11 pb-4 text-gray-600 text-sm" data-aos="fade-up" data-aos-offset="100">
                                            {step.desc}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* SDLC Diagram */}
                    <div className="w-full mx-auto mt-10 md:w-1/3 flex justify-center items-center">
                        {/* Replace this SVG with your own SDLC diagram if available */}
                        <img
                            src="/images/mobile-service/development-lifecycle.gif"
                            alt="SDLC Process Diagram"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
