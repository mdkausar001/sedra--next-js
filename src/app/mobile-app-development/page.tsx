'use client'
import CoreSolutions from '@/components/MobileAppDevelopment/CoreSolutions'
import Customers from '@/components/MobileAppDevelopment/Customers'
import MobileSection from '@/components/MobileAppDevelopment/MobileSection'

const features = [
    {
        title: "10+ Custom Mobile App Solutions",
        desc: "",
    },
    {
        title: "Enterprise Mobile App Development & Integrations",
        desc: "From ERP to workflow management",
    },
    {
        title: "Native and Cross-Platform Development",
        desc: "Mobile apps that work on any device",
    },
    {
        title: "20+ Top IT Experts",
        desc: "",
    },
    {
        title: "15+ Years of Experience",
        desc: "Leading in mobile development since iOS and Android launched",
    },
    {
        title: "Full Cycle Development and Support",
        desc: "",
    },
    {
        title: "Strategic Long-Term Partnerships",
        desc: "",
    },
    {
        title: "35 Fortune 1000 Clients",
        desc: "",
    },
    {
        title: "9 Offices in 7 Countries",
        desc: "",
    },
];


const page = () => {
    return (
        <><section className="relative mt-12 flex min-h-[700px] items-center bg-black">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/mobileAppDevelopment/banner.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60" />
            </div>
            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4">
                <h1 className="mb-6 mt-12 text-left text-3xl font-semibold uppercase leading-tight text-white md:text-5xl">
                    MOBILE APP DEVELOPMENT COMPANY
                    <br />
                    TRUSTED BY FORTUNE 500 BRANDS
                </h1>
                <p className="my-10 max-w-3xl text-left text-base text-white md:text-xl">
                    We build scalable, robust applications designed to evolve with your
                    business. Let's craft a mobile app that your customers will love and
                    that will drive your business forward.
                </p>
                <div className="mx-6 my-10 flex flex-col gap-6 sm:flex-row sm:gap-4">
                    <a
                        href="#consultation"
                        className=" md:text-md border-2 border-[#1677ff] bg-[#1677ff] px-2 py-4 text-center text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-[#125fcc] sm:max-w-full md:px-10 md:py-4 md:text-xl"
                    >
                        BOOK A FREE CONSULTATION
                    </a>
                    <a
                        href="#portfolio"
                        className=" border-2 border-[#1677ff] bg-transparent px-8 py-4 text-center text-base font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[#1677ff]"
                    >
                        VIEW PORTFOLIO
                    </a>
                </div>
            </div>
        </section>
            <section className="bg-white py-12">
                <div className="mx-auto max-w-4xl items-center p-10">
                    <h2 className="mb-4 text-center text-xl font-semibold text-gray-700 md:text-center md:text-3xl">
                        Why choose Intellectsoft for your mobile app development project?
                    </h2>
                    <p className="mb-8 text-center text-gray-700 md:text-center">
                        We offer a full cycle of application design, integration and management
                        services. Whether it is a consumer oriented app or a transformative
                        enterprise-class solution, the company leads the entire mobile app
                        development process from ideation and concept to delivery, and to
                        ongoing support.
                    </p>
                </div>
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-start">
                    {/* Left: Text and Features */}
                    <div className="max-w-xl flex-1">
                        <ul className="space-y-5">
                            {features.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    {/* Check Icon */}
                                    <span className="mt-1 flex-shrink-0">
                                        <svg
                                            className="h-6 w-6 rounded-full text-sky-500"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="12" cy="12" r="12" fill="#e6f2ff" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M7 13l3 3 7-7"
                                            />
                                        </svg>
                                    </span>
                                    {/* Text */}
                                    <div>
                                        <div className="font-medium text-gray-800">{item.title}</div>
                                        {item.desc && (
                                            <div className="text-sm text-gray-500">{item.desc}</div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-end">
                        <img
                            src="/images/coreSolution/mobileImage.jpg"
                            alt="Mobile App 1"
                            className="w-60 max-w-full rounded-xl border border-gray-200 bg-white shadow-xl"
                            style={{ objectFit: "cover" }}
                        />
                        <img
                            src="/images/coreSolution/mobileImage2.jpg"
                            alt="Mobile App 2"
                            className="w-60 max-w-full rounded-xl border border-gray-200 bg-white shadow-xl"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </section>
            <div
                style={{
                    backgroundImage:
                        "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
                }}
                className="flex flex-col items-center justify-center bg-white px-4 py-24 sm:px-6 sm:py-24 lg:px-8"
            >
                <div className="grid max-w-6xl items-center">
                    <CoreSolutions />
                </div>
            </div>
            <Customers />
        </>
    )
}

export default page
