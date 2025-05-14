'use client'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const projects = [
    {
        title: "Copthorne Hotel by Millennium",
        heading: "Golden Land",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "BMS" },
            { service: "GRMS" },
            { service: "VingCard" },
        ],
    },
    {
        title: "Hilton Riyadh",
        heading: "Luxury Hospitality",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "Fire Alarm System" },
            { service: "Access Control" },
        ],
    },
    {
        title: "Ritz-Carlton Jeddah",
        heading: "Premium Comfort",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "HVAC" },
            { service: "CCTV Surveillance" },
        ],
    },
    {
        title: "Four Seasons Mecca",
        heading: "Modern Facilities",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "Networking" },
            { service: "Room Automation" },
        ],
    },
    {
        title: "Novotel Dammam",
        heading: "Elegant Living",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "GRMS" },
            { service: "Door Access" },
            { service: "Elevator Control" },
        ],
    },
    {
        title: "Novotel Dammam",
        heading: "Elegant Living",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "GRMS" },
            { service: "Door Access" },
            { service: "Elevator Control" },
        ],
    },
    {
        title: "Novotel Dammam",
        heading: "Elegant Living",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "GRMS" },
            { service: "Door Access" },
            { service: "Elevator Control" },
        ],
    },
    {
        title: "Novotel Dammam",
        heading: "Elegant Living",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "GRMS" },
            { service: "Door Access" },
            { service: "Elevator Control" },
        ],
    },
    {
        title: "Novotel Dammam",
        heading: "Elegant Living",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "GRMS" },
            { service: "Door Access" },
            { service: "Elevator Control" },
        ],
    },
    {
        title: "Novotel Dammam",
        heading: "Elegant Living",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        services: [
            { service: "GRMS" },
            { service: "Door Access" },
            { service: "Elevator Control" },
        ],
    },
];

const OurProjects = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <>
            <section className="relative z-10 overflow-hidden pb-16 pt-30 md:pb-20 lg:pb-28 lg:pt-[180px]">
                <div className="container">

                    <div className="-mx-4 flex flex-wrap gap-6 justify-center">
                        {projects.map((item, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg"
                            >
                                <a href="#">
                                    <img
                                        className="rounded-t-lg w-full h-60 object-cover"
                                        src={item.imageURL}
                                        alt={item.title}
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {item.title}
                                        </h5>
                                    </a>
                                    <p className="mb-3 text-gray-700 dark:text-gray-400 font-semibold">
                                        {item.heading}
                                    </p>
                                    <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside text-gray-700 dark:text-gray-300">
                                        {item.services.map((service, idx) => (
                                            <li key={idx}>{service.service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurProjects;
