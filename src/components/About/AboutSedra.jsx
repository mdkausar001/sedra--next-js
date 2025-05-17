"use client";
// import React, { useState } from "react";

// const AboutSedra = () => {
//   const [activeTab, setActiveTab] = useState("mission");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "mission":
//         return "To deliver high-quality, customized technology services that drive efficiency, enhance user experience, and accelerate digital growth for our clients.";
//       case "advantages":
//         return "To become a leading digital transformation partner in the region, empowering businesses and institutions with intelligent, secure, and scalable IT solutions.";
//       case "guarantees":
//         return "We guarantee timely delivery, transparent communication, and unmatched post-project support. Customer satisfaction is our top priority.";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-white px-4 py-24 sm:px-6 lg:px-8">
//       <div className="gap-10 bg-white px-6 py-12 text-gray-900 md:flex md:items-start md:justify-between">
//         {/* Left Content */}
//         <div className="md:w-1/2">
//           <h2 className="mb-4 text-3xl font-light">
//             WE ARE <span className="font-bold text-blue">SEDRA</span>
//           </h2>
//           <p className="mb-6 text-gray-300">
//             We are a leading company providing creative and sustainable
//             solutions for businesses worldwide. Our focus is on innovation,
//             reliability, and excellence.
//           </p>

//           {/* Tabs */}
//           <div className="mb-4 flex flex-wrap items-center space-x-4 border-b border-gray-600 pb-2 text-sm font-semibold">
//             <button
//               onClick={() => setActiveTab("mission")}
//               className={`${
//                 activeTab === "mission"
//                   ? "text-yellow-400"
//                   : "hover:text-yellow-300 text-gray-300"
//               }`}
//             >
//               OUR MISSION
//             </button>
//             <span className="text-gray-500">|</span>
//             <button
//               onClick={() => setActiveTab("advantages")}
//               className={`${
//                 activeTab === "advantages"
//                   ? "text-yellow-400"
//                   : "hover:text-yellow-300 text-gray-300"
//               }`}
//             >
//               OUR ADVANTAGES
//             </button>
//             <span className="text-gray-500">|</span>
//             <button
//               onClick={() => setActiveTab("guarantees")}
//               className={`${
//                 activeTab === "guarantees"
//                   ? "text-yellow-400"
//                   : "hover:text-yellow-300 text-gray-300"
//               }`}
//             >
//               OUR GUARANTEES
//             </button>
//           </div>

//           {/* Tab Content */}
//           <div className="mb-6  transition-all duration-500 ease-in-out">
//             <p
//               key={activeTab}
//               className="leading-relaxed text-gray-400 opacity-100 transition-opacity duration-300"
//             >
//               {renderContent()}
//             </p>
//           </div>

//           {/* Button */}
//           <button className="bg-yellow-400 hover:bg-yellow-500 rounded-full px-6 py-2 font-bold text-black">
//             OUR PORTFOLIO
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="mt-10 md:mt-0 md:w-1/2">
//           <img
//             src="https://i.imgur.com/XM63eGk.jpg" // Replace this with your actual image path
//             alt="Team"
//             className="w-full rounded-md shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSedra;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const services = [
  {
    title: "BMS",
    front: "Building Management System",
    back: "Automates and controls HVAC, lighting, energy, and safety systems for optimized building performance.",
    icon: "/images/services/BMS.png",
  },
  {
    title: "GRMS",
    front: "Guest Room Management System",
    back: "Enhances guest experience with integrated room automation like lighting, AC, and curtains.",
    icon: "/images/services/GRMS.png",
  },
  {
    title: "Home Automation",
    front: "Smart Home Solutions",
    back: "Control lighting, climate, security, and entertainment from one system to simplify modern living.",
    icon: "/images/services/homeAutomation.png",
  },
  {
    title: "Lighting Systems",
    front: "Advanced Lighting",
    back: "Automated lighting for energy savings, ambiance, and smart control in residential or commercial spaces.",
    icon: "/images/services/smartHome.png",
  },
  {
    title: "IT Infrastructure & Network Solutions",
    front: "Robust IT Backbone",
    back: "Structured cabling, switches, firewalls, and wireless setups to support seamless digital operations.",
    icon: "/images/services/itSystem.png",
  },
  {
    title: "Fire Alarm Systems",
    front: "Early Fire Detection",
    back: "State-of-the-art sensors and alarms to protect life and assets in emergency situations.",
    icon: "/images/services/fireAlarm.png",
  },
  {
    title: "Access Control & CCTV",
    front: "Secure Access",
    back: "Monitors and restricts access to ensure physical security using advanced surveillance systems.",
    icon: "/images/services/cctv.png",
  },
  {
    title: "Web & Mobile App Development",
    front: "Custom App Solutions",
    back: "Scalable and intuitive apps tailored to user needs, built with modern tech stacks.",
    icon: "/images/services/system&app.png",
  },
  {
    title: "CBS & UPS",
    front: "Power Continuity",
    back: "Ensures uninterrupted power supply and centralized battery backup systems for critical operations.",
    icon: "/images/services/powerControll.png",
  },
];

const AboutSedra = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://sedra.net.sa/wp-content/uploads/2024/03/path-1.png')",
      }}
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-28 text-gray-700 sm:px-6 lg:px-8 dark:text-gray-200">
        {/* Title */}
        <h1 className="text-blue-700 mb-4 text-center text-4xl font-bold">
          About Sedra
        </h1>
        <p className="mx-auto mb-4 max-w-4xl text-center text-lg">
          Sedra Information Technology is a Saudi-based company committed to
          delivering cutting-edge digital solutions and IT services tailored to
          meet the evolving needs of organizations across sectors. With a team
          of experts passionate about innovation, Sedra helps clients embrace
          the future by integrating the latest technologies with strategic
          insight.
        </p>

        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start">
            {/* Text Content */}
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
              <p className="mb-6 text-gray-600">
                To become a leading digital transformation partner in the
                region, empowering businesses and institutions with intelligent,
                secure, and scalable IT solutions.
              </p>

              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver high-quality, customized technology services that
                drive efficiency, enhance user experience, and accelerate
                digital growth for our clients.
              </p>
            </div>

            {/* Image */}
            <div
              className="flex w-full justify-center lg:w-1/2"
              data-aos="fade-left"
            >
              <Image
                src="/images/about/v&m.jpg"
                alt="IT Strategy"
                width={600}
                height={500}
                className="w-full max-w-md rounded-lg object-contain"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Sedra */}
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-blue-700 mb-6 text-center text-3xl font-bold text-gray-700 lg:text-left">
            Why Choose Sedra?
          </h2>
          <ul className="list-disc space-y-4 pl-5 text-lg text-gray-700">
            <li data-aos="fade-up" data-aos-offset="50">
              <span className="font-semibold">Expertise Across Sectors -</span>{" "}
              We understand the needs of government entities, enterprises, and
              SMEs.
            </li>
            <li data-aos="fade-up" data-aos-offset="50">
              <span className="font-semibold">Agile and Efficient -</span> Fast
              response, flexible solutions, and on-time delivery.
            </li>
            <li data-aos="fade-up" data-aos-offset="50">
              <span className="font-semibold">Innovative Technologies -</span>{" "}
              We utilize the latest tools and frameworks to future-proof your
              systems.
            </li>
            <li data-aos="fade-up" data-aos-offset="50">
              <span className="font-semibold">Trusted Partner -</span> Long-term
              relationships built on transparency and results.
            </li>
          </ul>
        </div>

        {/* Services */}
        <h2 className="text-blue-700 mb-4 px-4 text-3xl font-bold">
          Our Services
        </h2>
        <div className="grid gap-4 px-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="perspective h-64 w-full"
              data-aos="zoom-in"
            >
              <div className="flip-card h-full w-full">
                {/* Front */}
                <div className="flip-card-front flex flex-col items-center justify-center border border-gray-300 bg-white p-4 text-center shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <img
                    src={service.icon ? service.icon : "/images/dummyUser.jpg"}
                    alt={service.title}
                    className="mb-6 h-auto w-3/12"
                  />
                  <h3 className="text-blue-600 mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.front}
                  </p>
                </div>

                {/* Back */}
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                  className="flip-card-back bg-blue-600 flex items-center justify-center p-4 px-6 text-center text-white shadow-md"
                >
                  <p>{service.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AboutSedra;
