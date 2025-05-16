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
            "https://sedra.net.sa/wp-content/uploads/2024/08/IMG-20240325-WA0012-895x1024.jpg",
    },
    {
        projectName: "Masar Makkah Data Center",
        Location: "Makkah",
        Client: "Baud Telecom Company",
        imageURL: "https://sedra.net.sa/wp-content/uploads/2024/03/Masar.jpg",
    },
    {
        projectName: "MISK Sport City",
        Location: "Riyadh",
        Client: "Marco",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/03/MISK1-1024x576.jpg",
    },
    {
        projectName: "IHG Intercontinental Hotel",
        Location: "Abha",
        Client: "BTC",
        imageURL:
            "https://images.trvl-media.com/lodging/1000000/10000/2500/2414/fd497a17.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    },
    {
        projectName: "RED SEA Film Festival Foundation",
        Location: "Jeddah",
        Client: "MAC",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/Red-Sea-International-Film-Festival-8-1024x768.png",
    },
    {
        projectName: "Courtyard Hotel by Marriot",
        Location: "Al Madina",
        Client: "Pro Art",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/03/88114c39d3a3ec98a8fa86c3c90a2572.webp",
    },
    {
        projectName: "Double Tree Hotel by Hilton",
        Location: "Jeddah",
        Client: "HHC",
        imageURL:
            "https://jtpartners.com/wp-content/uploads/2021/09/c4-6.jpg",
    },
    {
        projectName: "Al Riyadh Hospital",
        Location: "Jeddah",
        Client: "Inma-Tech",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/RH-Hospital-B-1024x682.png",
    },
    {
        projectName: "Nahda Academy school",
        Location: "Jeddah",
        Client: "Dar Al Afnan",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/05/Nahda-Academy-school-.png",
    },
    {
        projectName: "Court Of Appeal",
        Location: "Jeddah",
        Client: "Saudi protech",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/05/Fse5GdcXsA0unek.jpg",
    },
    {
        projectName: "Afrina HQ",
        Location: "Jeddah",
        Client: "Afrina",
        imageURL: "https://sedra.net.sa/wp-content/uploads/2024/05/Afrina.png",
    },
    {
        projectName: "CHKN restaurant",
        Location: "Jeddah",
        Client: "Salma international security",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/05/%D8%B4%D9%83%D9%86-771x405-1.webp",
    },
    {
        projectName: "Abdullah Saleh Kamel Palace",
        Location: "Jeddah",
        Client: "KUN",
        imageURL: "",
    },
    {
        projectName: "TBC - School",
        Location: "Jeddah",
        Client: "Kholoud trading company",
        imageURL: "https://sedra.net.sa/wp-content/uploads/2024/05/TBC.png",
    },
    {
        projectName: "Schnider Electric Office",
        Location: "Jeddah",
        Client: "Modern EEMAR",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/03/TA_20211230142540076_391373.jpg",
    },
    {
        projectName: "Riyadh Metro",
        Location: "Unknown",
        Client: "Kgtech",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/05/Riyadh-Metro.jpg",
    },
    {
        projectName: "KAIA",
        Location: "Unknown",
        Client: "Kholoud trading company",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/03/WhatsApp-Image-2022-06-25-at-3.45.05-PM.jpeg",
    },
    {
        projectName: "Ibdaat 3 Tower",
        Location: "Riyadh",
        Client: "Roya Company",
        imageURL:
            "https://sedra.net.sa/wp-content/uploads/2024/08/Ibdaat-3-Tower-933x1024.jpg",
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
            <div className="container mx-auto px-2">
                <h2 className="text-center text-xl md:text-3xl font-sans font-semibold mb-8 text-gray-800">
                    OUR PROJECTS
                </h2>
                <p className="max-w-5xl mx-auto text-center font-sans font-normal text-gray-800 text-sm md:text-lg leading-[1.4]">
                    At Sedra Information Technology, we take pride in our successful delivery of strategic digital solutions to esteemed organizations across various sectors. Below is a selection of our key projects that highlight our capabilities and trusted partnerships.
                </p>
                <hr className="md:max-w-6xl max-w-5xl block mx-auto my-12 border border-gray-200" />

                <div className="max-w-full md:max-w-6xl mx-auto overflow-x-hidden px-2">
                    <Slider {...settings} className="-mx-2">
                        {projects.map((item, index) => (
                            <div key={index} className="px-2">
                                <div className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-105">
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
