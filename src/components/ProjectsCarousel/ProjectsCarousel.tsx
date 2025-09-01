'use client';

import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MapPin } from 'lucide-react';

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024, // tablets
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 640, // mobile
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};


// const settings = {
//     dots: false,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0, // Makes it scroll continuously
//     cssEase: "linear", // Smooth scrolling effect
//     pauseOnHover: false,
//     arrows: false, // Disable left and right slider icons
// };


const projects = [
    {
        projectName: "Copthorne Hotel by Millennium",
        Location: "Jeddah",
        Client: "Golden Land",
        imageURL:
            "images/partner/partners/IMG-20240325-WA0012.jpg",
        Scope: [
            { service: "BMS" },
            { service: "GRMS" },
            // { service: "VingCard"},
        ],
    },
    {
        projectName: "Masar Makkah Underpass & Data Center",
        Location: "Makkah",
        Client: "Baud Telecom Company",
        imageURL: "images/partner/partners/Masar.jpg",
        Scope: [{ service: "BMS" }],
    },
    {
        projectName: "MISK Sport City",
        Location: "Riyadh",
        Client: "Marco",
        imageURL:
            "images/partner/partners/MISK1.jpg",
        Scope: [{ service: "BMS" }],
    },
    {
        projectName: "IHG Intercontinental Hotel",
        Location: "Abha",
        Client: "BTC",
        imageURL:
            "images/partner/partners/TBC.png",
        Scope: [{ service: "GRMS" }],
    },
    {
        projectName: "RED SEA FILM FESTIVAL FOUNDATION",
        Location: "Jeddah",
        Client: "MAC",
        imageURL:
            "images/partner/partners/Red-Sea-International-Film-Festival-8.png",
        Scope: [{ service: "Data System" }],
    },
    {
        projectName: "Courtyard Hotel by Marriot",
        Location: "Al Madina",
        Client: "Pro Art",
        imageURL:
            "images/partner/partners/CourtyardHotelbyMarriot.webp",
        Scope: [{ service: "BMS" }, { service: "GRMS" }],
    },
    {
        projectName: "Double Tree Hotel by Hilton",
        Location: "Jeddah",
        Client: "HHC",
        imageURL:
            "images/partner/partners/DoubleTreeHotelbyHilton.jpg",
        Scope: [{ service: "BMS" }, { service: "Lighting Control" }],
    },
    {
        projectName: "Al Riyadh Hospital",
        Location: "Riyadh",
        Client: "Inma-Tech",
        imageURL:
            "images/partner/partners/RH-Hospital.png",
        Scope: [
            // { service: "Supply" },
            // { service: "Test" },
            { service: "BMS" },
        ],
    },
    {
        projectName: "Nahda Academy school",
        Location: "Jeddah",
        Client: "Dar Al Afnan",
        imageURL:
            "images/partner/partners/Nahda-Academy-school-.png",
        Scope: [{ service: "Fire Alarm & Sound System" }],
    },
    {
        projectName: "Court Of Appeal",
        Location: "Jeddah",
        Client: "Saudi protech",
        imageURL:
            "images/partner/partners/CourtOfAppeal.jpg",
        Scope: [{ service: "Fire Alaram" }],
    },
    {
        projectName: "Afrina HQ",
        Location: "Jeddah",
        Client: "Afrina",
        imageURL: "images/partner/partners/Afrina.png",
        Scope: [{ service: "Smart Light Control" }],
    },
    {
        projectName: "CHKN restaurant",
        Location: "Jeddah",
        Client: "Salma international security",
        imageURL:
            "images/partner/partners/CHKN.webp",
        Scope: [{ service: "Smart Light Control" }],
    },
    // {
    //   projectName: "Abdullah Saleh Kamel Palace",
    //   Location: "Jeddah",
    //   Client: "KUN",
    //   imageURL: "",
    //   Scope: [{ service: "KNX - BMS - Data System" }],
    // },
    {
        projectName: "TBC - School",
        Location: "Jeddah",
        Client: "Kholoud trading company",
        imageURL: "images/partner/partners/TBC.png",
        Scope: [{ service: "Data System" }],
    },
    {
        projectName: "Schnider Electric Office",
        Location: "Jeddah",
        Client: "Modern EEMAR",
        imageURL:
            "images/partner/partners/TA_20211230142540076_391373.jpg",
        Scope: [{ service: "Access Control System" }],
    },
    {
        projectName: "Riyadh Metro",
        Location: "Riyadh Metro",
        Client: "Kgtech",
        imageURL:
            "images/partner/partners/Riyadh-Metro.jpg",
        Scope: [{ service: "Data System" }],
    },
    {
        projectName: "KAIA",
        Location: "Jeddah",
        Client: "Kholoud trading company",
        imageURL:
            "images/partner/partners/KAIA.jpg",
        Scope: [{ service: "Gate barrier - Data System - UPS" }],
    },
    {
        projectName: "Ibdaat 3 Tower",
        Location: "Riyadh",
        Client: "Roya Company",
        imageURL:
            "images/partner/partners/Ibdaat-3-Tower.jpg",
        Scope: [{ service: "BMS" }],
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
        <div className="bg-white py-12">
            <div className="container mx-auto px-2">
                <h2 className="text-center text-xl font-sans mb-8 uppercase text-gray-700 font-medium md:text-3xl">
                    OUR PROJECTS
                </h2>
                <p className="max-w-5xl mx-auto text-center font-sans font-normal text-gray-700 text-sm md:text-lg leading-[1.4]">
                    At Sedra Information Technology, we take pride in our successful delivery of strategic digital solutions to esteemed organizations across various sectors. Below is a selection of our key projects that highlight our capabilities and trusted partnerships.
                </p>
                <hr className="md:max-w-6xl max-w-5xl block mx-auto my-12 border border-gray-200" />

                <div className="max-w-full md:max-w-6xl mx-auto overflow-x-hidden px-2">
                    <Slider {...settings} className="-mx-2">
                        {projects.map((item, index) => (
                            <div key={index} className="px-2 py-4">
                                <div className="group rounded-lg border border-gray-200 bg-gray-50 transition-transform duration-300 hover:scale-105">
                                    <a href="#">
                                        <div className="h-48 md:h-60 overflow-hidden rounded-t">
                                            <img
                                                src={item.imageURL || './images/dummyImage.jpg'}
                                                alt={item.projectName}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    </a>
                                    <div className="px-3 py-4">
                                        <a href="#">
                                            <h1 className="mb-1 text-sm font-semibold text-gray-800">
                                                {item.projectName}
                                            </h1>
                                        </a>
                                        <p className="text-sm text-gray-600 py-2">{item.Client}</p>
                                        <p className="flex items-center text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 mr-1" /> {item.Location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


        </div >
    );
};

export default ProjectsCarousel;
