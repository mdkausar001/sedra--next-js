"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
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
    title: "Massar PDU & Data center BMS",
    heading: "Baud Telecom Company (BTC)",
    imageURL: "https://sedra.net.sa/wp-content/uploads/2024/03/Masar.jpg",
    services: [{ service: "BMS" }],
  },
  {
    title: "MISK – LWSP Pavilion",
    heading: "Marco",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/03/MISK1-1024x576.jpg",
    services: [{ service: "BMS" }],
  },
  {
    title: "RED SEA FILM FESTIVAL FOUNDATION",
    heading: "MAC",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/08/Red-Sea-International-Film-Festival-8-1024x768.png",
    services: [{ service: "Data System" }],
  },
  {
    title: "Marriott (Courtyard) Hotel",
    heading: "Al-Rihily",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/03/88114c39d3a3ec98a8fa86c3c90a2572.webp",
    services: [{ service: "BMS - GRMS" }],
  },
  {
    title: "Al Riyadh Hospital",
    heading: "Inma-Tech",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/08/RH-Hospital-B-1024x682.png",
    services: [
      { service: "Supply" },
      { service: "test" },
      { service: "programming for Building Management System (BMS)" },
    ],
  },
  {
    title: "Nahda Academy school",
    heading: "Dar Al Afnan",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/05/Nahda-Academy-school-.png",
    services: [{ service: "Fire Alarm & Sound System" }],
  },
  {
    title: "Court Of Appeal",
    heading: "Saudi protech",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/05/Fse5GdcXsA0unek.jpg",
    services: [{ service: "Fire Alaram" }],
  },
  {
    title: "Afrina HQ",
    heading: "Afrina",
    imageURL: "https://sedra.net.sa/wp-content/uploads/2024/05/Afrina.png",
    services: [{ service: "Smart Light Control" }],
  },
  {
    title: "CHKN restaurant",
    heading: "Salma international security",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/05/%D8%B4%D9%83%D9%86-771x405-1.webp",
    services: [{ service: "Smart Light Control" }],
  },
  {
    title: "Abdullah Saleh Kamel Palace",
    heading: "KUN",
    imageURL: "",
    services: [{ service: "KNX - BMS - Data System" }],
  },
  {
    title: "TBC - School",
    heading: "Kholoud trading company",
    imageURL: "https://sedra.net.sa/wp-content/uploads/2024/05/TBC.png",
    services: [{ service: "Data System" }],
  },
  {
    title: "Schnider Electric Office",
    heading: "Modern EEMAR",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/03/TA_20211230142540076_391373.jpg",
    services: [{ service: "Access Control System" }],
  },
  {
    title: "Riyadh Metro",
    heading: "Kgtech",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/05/Riyadh-Metro.jpg",
    services: [{ service: "Data System" }],
  },
  {
    title: "KAIA",
    heading: "Kholoud trading company",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/03/WhatsApp-Image-2022-06-25-at-3.45.05-PM.jpeg",
    services: [{ service: "Gate barrier - Data System - UPS" }],
  },
  {
    title: "Ibdaat 3 Tower",
    heading: "Roya Company",
    imageURL:
      "https://sedra.net.sa/wp-content/uploads/2024/08/Ibdaat-3-Tower-933x1024.jpg",
    services: [{ service: "(BMS)" }],
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
        className=" flex flex-col items-center justify-center bg-white px-4 py-24 sm:px-6 sm:py-24 lg:px-8 "
        style={{
          backgroundImage:
            "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
        }}
      >
        <div className="container ">
          <div className="mx-auto my-8 w-full max-w-4xl text-center ">
            <h1 className="text-2xl font-bold leading-snug text-gray-700 sm:text-2xl md:text-4xl">
              OUR PROJECTS
            </h1>
            <p className="mt-4 text-center text-base text-gray-600 sm:text-lg md:text-xl">
              SEDRA stands out for its pioneering and exceptional projects in
              the field of low-current systems. Explore our inspiring portfolio
              of projects and learn how we have contributed to achieving our
              client's goals in the best possible ways.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="shine-effect group mx-6 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm transition-transform  duration-300 hover:shadow-xl group-hover:scale-110 sm:w-full dark:border-gray-700 dark:bg-gray-800"
              >
                <a href="#">
                  <div className=" h-60 overflow-hidden rounded-t">
                    <img
                      src={item.imageURL}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                    {item.heading}
                  </p>
                  <ul className="mt-2 list-inside list-decimal space-y-1 ps-5 text-gray-700 dark:text-gray-300">
                    {item.services.map((service, idx) => (
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
