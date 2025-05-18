"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MapPin } from "lucide-react";

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


const OurProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-gray-100 px-4 py-24 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
        }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-12 mt-10 text-center flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold leading-snug text-gray-700 sm:text-3xl md:text-4xl">
              OUR PROJECTS
            </h1>
            <p className="mt-4 text-base text-pretty text-gray-600 sm:text-lg md:text-xl max-w-5xl text-center">
              At Sedra Information Technology, we take pride in our successful delivery of
              strategic digital solutions to esteemed organizations across various sectors.
              Below is a selection of our key projects that highlight our capabilities and
              trusted partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
            {projects.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="shine-effect group rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:shadow-xl hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
              >
                <a href="#">
                  <div className="h-60 overflow-hidden rounded-t">
                    <img
                      src={item.imageURL ? item.imageURL : './images/dummyImage.jpg'}
                      alt={item.projectName}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </a>
                <div className="px-4 py-6">
                  <a href="#">
                    <h1 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
                      {item.projectName}
                    </h1>
                  </a>
                  <div className="flex flex-col md:flex-row justify-between">
                    <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                      Client : {item.Client}
                    </p>
                    <p className="mb-2 text-md  font-normal text-gray-600 dark:text-gray-400 flex"><MapPin className="w-4 mr-1" />{item.Location}</p>
                  </div>
                  <ul className="mt-2 list-inside font-normal list-disc space-y-1 ps-4 text-gray-600 dark:text-gray-300">
                    {item.Scope.map((service, idx) => (
                      <li key={idx}>{service.service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjects;
