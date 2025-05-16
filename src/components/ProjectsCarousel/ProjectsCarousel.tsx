'use client';

import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MapPin } from 'lucide-react';

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 3000,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 0, // Makes it scroll continuously
//   cssEase: "linear", // Smooth scrolling effect
//   pauseOnHover: false,
// };

const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Makes it scroll continuously
    cssEase: "linear", // Smooth scrolling effect
    pauseOnHover: false,
    arrows: false, // Disable left and right slider icons
};

const partners = [
    "https://sedra.net.sa/wp-content/uploads/2024/08/1.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/2.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/3.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/4.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/5.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/6.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/7.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/8.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/9.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/10.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/11.png",
    "https://sedra.net.sa/wp-content/uploads/2024/08/12.png",
];

const projects = [
    {
        projectName: "Copthorne Hotel by Millennium",
        Location: "Jeddah",
        Client: "Golden Land",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
        Scope: [
            { service: "BMS" },
            { service: "GRMS" },
            { service: "VingCard" },
        ],
    },
    {
        projectName: "Masar Makkah Underpass & Data Center",
        Location: "Makkah",
        Client: "Baud Telecom Company",
        imageURL: "https://sedra.net.sa/wp-content/uploads/2024/03/Masar.jpg",
        Scope: [{ service: "BMS" }],
    },
    {
        projectName: "MISK Sport City",
        Location: "Riyadh",
        Client: "Marco",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/03/MISK1-1024x576.jpg",
        Scope: [{ service: "BMS" }],
    },
    {
        projectName: "IHG Intercontinental Hotel",
        Location: "Abha",
        Client: "BTC",
        imageURL:
            "https://images.trvl-media.com/lodging/1000000/10000/2500/2414/fd497a17.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        Scope: [{ service: "GRMS" }],
    },
    {
        projectName: "RED SEA FILM FESTIVAL FOUNDATION",
        Location: "Jeddah",
        Client: "MAC",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/Red-Sea-International-Film-Festival-8-1024x768.png",
        Scope: [{ service: "Data System" }],
    },
    {
        projectName: "Courtyard Hotel by Marriot",
        Location: "Al Madina",
        Client: "Pro Art",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/03/88114c39d3a3ec98a8fa86c3c90a2572.webp",
        Scope: [{ service: "BMS" }, { service: "GRMS" }],
    },
    {
        projectName: "Double Tree Hotel by Hilton",
        Location: "Jeddah",
        Client: "HHC",
        imageURL:
            "https://jtpartners.com/wp-content/uploads/2021/09/c4-6.jpg",
        Scope: [{ service: "BMS" }, { service: "Lighting Control" }],
    },
    {
        projectName: "Al Riyadh Hospital",
        Location: "Jeddah",
        Client: "Inma-Tech",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/RH-Hospital-B-1024x682.png",
        Scope: [
            { service: "Supply" },
            { service: "test" },
            { service: "programming for Building Management System (BMS)" },
        ],
    },
    {
        projectName: "Nahda Academy school",
        Location: "Jeddah",
        Client: "Dar Al Afnan",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/05/Nahda-Academy-school-.png",
        Scope: [{ service: "Fire Alarm & Sound System" }],
    },
    {
        projectName: "Court Of Appeal",
        Location: "Jeddah",
        Client: "Saudi protech",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/05/Fse5GdcXsA0unek.jpg",
        Scope: [{ service: "Fire Alaram" }],
    },
    {
        projectName: "Afrina HQ",
        Location: "Jeddah",
        Client: "Afrina",
        imageURL: "https://sedra.net.sa/wp-content/uploads/2024/05/Afrina.png",
        Scope: [{ service: "Smart Light Control" }],
    },
    {
        projectName: "CHKN restaurant",
        Location: "Jeddah",
        Client: "Salma international security",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/05/%D8%B4%D9%83%D9%86-771x405-1.webp",
        Scope: [{ service: "Smart Light Control" }],
    },
    {
        projectName: "Abdullah Saleh Kamel Palace",
        Location: "Jeddah",
        Client: "KUN",
        imageURL: "",
        Scope: [{ service: "KNX - BMS - Data System" }],
    },
    {
        projectName: "TBC - School",
        Location: "Jeddah",
        Client: "Kholoud trading company",
        imageURL: "https://sedra.net.sa/wp-content/uploads/2024/05/TBC.png",
        Scope: [{ service: "Data System" }],
    },
    {
        projectName: "Schnider Electric Office",
        Location: "Jeddah",
        Client: "Modern EEMAR",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/03/TA_20211230142540076_391373.jpg",
        Scope: [{ service: "Access Control System" }],
    },
    {
        projectName: "Riyadh Metro",
        Location: "Unknown",
        Client: "Kgtech",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/05/Riyadh-Metro.jpg",
        Scope: [{ service: "Data System" }],
    },
    {
        projectName: "KAIA",
        Location: "Unknown",
        Client: "Kholoud trading company",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/03/WhatsApp-Image-2022-06-25-at-3.45.05-PM.jpeg",
        Scope: [{ service: "Gate barrier - Data System - UPS" }],
    },
    {
        projectName: "Ibdaat 3 Tower",
        Location: "Riyadh",
        Client: "Roya Company",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/Ibdaat-3-Tower-933x1024.jpg",
        Scope: [{ service: "(BMS)" }],
    },
];


const ProjectsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-xl md:text-3xl font-sans font-semibold  mb-8 text-gray-600">OUR PROJECTS
                </h2>
                <p className="max-w-5xl mx-auto text-center font-sans font-normal text-gray-600 text-sm md:text-lg leading-[1.4]">
                    At Sedra Information Technology, we take pride in our successful delivery of strategic digital solutions to esteemed organizations across various sectors. Below is a selection of our key projects that highlight our capabilities and trusted partnerships.
                </p>
                <hr className='max-w-6xl block mx-auto mt-6 border border-gray-200' />
                <div className="max-w-6xl mx-auto py-12">
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <div key={index} className="md:px-4 px-2">
                                <div className="relative w-full h-52 overflow-hidden rounded-md">
                                    <img
                                        src={project.imageURL}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/100 to-transparent text-white p-2">
                                        <h3 className="text-sm font-semibold">{project.projectName}</h3>
                                        <p className="text-xs flex items-center"><MapPin size={10} />{project.Location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default ProjectsCarousel;
