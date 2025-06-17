
// src/components/ExpertiseSection.jsx
import Image from 'next/image';
import Link from 'next/link';

const expertiseData = [
  {
    title: "BMS",
    normalIcon: "/images/services/infrastructure.png",
    hoverIcon: "/images/services/infrastructure.png",
    description: "Automates and controls HVAC, lighting, energy, and safety systems for optimized building performance.",
    link: "/bms",
  },
  {
    title: "GRMS",
    normalIcon: "/images/services/GRMS.png",
    hoverIcon: "/images/services/GRMS.png",
    description: "Enhances guest experience with integrated room automation like lighting, AC, and curtains.",
    link: "/grms",
  },
  {
    title: "Smart Home",
    normalIcon: "/images/services/homeAutomation.png",
    hoverIcon: "/images/services/homeAutomation.png",
    description: "Control lighting, climate, security, and entertainment from one system to simplify modern living.",
    link: "/smarthome",
  },
  {
    title: "Lighting Systems",
    normalIcon: "/images/services/smartHome.png",
    hoverIcon: "/images/services/smartHome.png",
    description: "Automated lighting for energy savings, ambiance, and smart control in residential or commercial spaces.",
    link: "#",
  },
  {
    title: "IT Infrastructure & Network Solutions",
    normalIcon: "/images/services/itSystem.png",
    hoverIcon: "/images/services/itSystem.png",
    description: "Structured cabling, switches, firewalls, and wireless setups to support seamless digital operations.",
    link: "/it-infrastructure",
  },
  {
    title: "Fire Alarm Systems",
    normalIcon: "/images/services/fire-alarm.png",
    hoverIcon: "/images/services/fire-alarm.png",
    description: "State-of-the-art sensors and alarms to protect life and assets in emergency situations.",
    link: "/fire-alarm",
  },
  {
    title: "Access Control & CCTV",
    normalIcon: "/images/services/cctv.png",
    hoverIcon: "/images/services/cctv.png",
    description: "Monitors and restricts access to ensure physical security using advanced surveillance systems.",
    link: "/access-control-cctv",
  },
  {
    title: "Web & Mobile App Development",
    normalIcon: "/images/services/system&app.png",
    hoverIcon: "/images/services/system&app.png",
    description: "Scalable and intuitive apps tailored to user needs, built with modern tech stacks.",
    link: "/app-development",
  },
  {
    title: "CBS & UPS",
    normalIcon: "/images/services/powerControll.png",
    hoverIcon: "/images/services/powerControll.png",
    description: "Ensures uninterrupted power supply and centralized battery backup systems for critical operations.",
    link: "/cbs-ups",
  },


  {
    title: 'ERP',
    normalIcon: "/images/Maiprosoft-menu/Expertise/ERP.svg",
    hoverIcon: "/images/Expertise/ERP white.svg",
    description: ' Manage your enterprise efficiently with our ERP solutions, designed for seamless integration and scalability.',
    link: '/ai',
  },

  {
    title: 'AI & ML',
    normalIcon: '/images/Expertise/AI/AI.svg',
    hoverIcon: '/images/Expertise/AI & ML white.svg',
    description: 'Our expertise in AI and Machine Learning drives intelligent automation and advanced analytics, transforming the way your business operates.',
    link: '/ai',
  },
  {
    title: 'Data Analytics',
    normalIcon: '/images/Expertise/Data-Analytics/DataAnalytics&BI.svg',
    hoverIcon: '/images/Expertise/Data Analytics & BI white.svg',
    description: ' Unlock business potential with our Data Analytics & BI solutions, delivering powerful insights to enhance performance and strategy.',
    link: '/data',
  },
  {
    title: 'IoT Service',
    normalIcon: '/images/Expertise/Iot/Iot.svg',
    hoverIcon: '/images/Expertise/Iot white.svg',
    description: ' Empower your business with our IoT solutions, optimizing operations through seamless device connectivity and real-time insights.',
    link: '/ai',
  },

];

const ExpertiseSection = () => {

  // return (
  //   <div className="expertise-wrapper bg-white py-16">
  //     <div className="container mx-auto">
  //       <div className="text-center mb-12">
  //         <h2 className="text-3xl font-bold font-poppins mb-4">Our Areas of Expertise</h2>
  //         <p className="max-w-3xl mx-auto text-gray-600">
  //           With expertise in Digital, Engineering, and Cloud, we deliver solutions that fulfill the traditional, transformational, and future needs of clients across the globe.
  //         </p>
  //       </div>
  //       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
  //         {expertiseData.map((item, index) => (
  //           <div
  //             key={index}
  //             className="expertise-col group relative bg-white shadow-lg rounded-lg p-6 hover:bg-blue transition-all duration-300"
  //           >
  //             <div className="expertise-content text-center transform group-hover:-translate-y-2 transition-transform duration-300">
  //               <div className="expertise-icon mb-4">
  //                 <div className="expertise-icon-normal group-hover:hidden">
  //                   <Image src={item.normalIcon} alt={item.title} width={58} height={72} />
  //                 </div>
  //                 <div className="expertise-icon-hover hidden group-hover:block">
  //                   <Image src={item.hoverIcon} alt={`${item.title} Animated`} width={58} height={72} />
  //                 </div>
  //               </div>
  //               <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-white transition-colors duration-300">
  //                 {item.title}
  //               </h3>
  //               <p className="text-black group-hover:text-white transition-colors duration-300">
  //                 {item.description}
  //               </p>
  //             </div>
  //             <div className="arrow-btn mt-4 hidden group-hover:block">
  //               <Link href={item.link} className="text-primary font-poppins font-semibold hover:text-white">
  //                 Explore our {item.title} Offerings
  //                 <span className="text-primary font-poppins font-semibold">→</span>

  //               </Link>
  //             </div>
  //             <div className="arrow-btn mt-4 block group-hover:hidden">
  //               <span className="text-primary font-poppins font-semibold">→</span>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  //   <div className="expertise-wrapper bg-white py-16">
  //     <div className="container mx-auto">
  //       <div className="text-center mb-12">
  //         <h2 className="text-3xl font-bold font-poppins mb-4">Our Areas of Expertise</h2>
  //         <p className="max-w-3xl mx-auto text-gray-600">
  //           With expertise in Digital, Engineering, and Cloud, we deliver solutions that fulfill the traditional, transformational, and future needs of clients across the globe.
  //         </p>
  //       </div>
  //       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
  //         {expertiseData.map((item, index) => (
  //           <div key={index} className="expertise-col group relative bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition">
  //             <div className="expertise-content text-center">
  //               <div className="expertise-icon mb-4">
  //                 <div className="expertise-icon-normal group-hover:hidden">
  //                   <Image src={item.normalIcon} alt={item.title} width={58} height={72} />
  //                 </div>
  //                 <div className="expertise-icon-hover hidden group-hover:block">
  //                   <Image src={item.hoverIcon} alt={`${item.title} Animated`} width={58} height={72} />
  //                 </div>
  //               </div>
  //               <h3 className="text-xl font-bold font-poppins mb-2">{item.title}</h3>
  //               <p className="text-gray-500">{item.description}</p>
  //               <Link href={item.link} className="inline-block mt-4 text-primary font-poppins font-semibold hover:text-blue-500">
  //                 Explore our {item.title} Offerings
  //               </Link>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    // <div className="expertise-wrapper bg-white py-16">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl font-bold font-poppins mb-4">Our Areas of Expertise</h2>
    //       <p className="max-w-3xl mx-auto text-gray-600">
    //         With expertise in Digital, Engineering, and Cloud, we deliver solutions that fulfill the traditional, transformational, and future needs of clients across the globe.
    //       </p>
    //     </div>
    //     <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    //       {expertiseData.map((item, index) => (
    //         <div
    //           key={index}
    //           className="expertise-col group relative bg-white shadow-lg rounded-lg p-6 hover:bg-[#333333] transition-all duration-300"
    //         >
    //           <div className="expertise-content text-center transform group-hover:-translate-y-2 transition-transform duration-300">
    //             <div className="expertise-icon mb-4">
    //               <div className="expertise-icon-normal group-hover:hidden">
    //                 <Image src={item.normalIcon} alt={item.title} width={58} height={72} />
    //               </div>
    //               <div className="expertise-icon-hover hidden group-hover:block">
    //                 <Image src={item.hoverIcon} alt={`${item.title} Animated`} width={58} height={72} />
    //               </div>
    //             </div>
    //             <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-white transition-colors duration-300">
    //               {item.title}
    //             </h3>
    //             <p className="text-black group-hover:text-white transition-colors duration-300">
    //               {item.description}
    //             </p>
    //           </div>
    //           <div className="arrow-btn absolute bottom-5 left-5 hidden group-hover:block transition-opacity duration-300">
    //             <Link href={item.link} className="inline-block text-primary font-poppins font-semibold hover:text-blue-500">
    //               Explore our {item.title} Offerings
    //             </Link>
    //           </div>
    //           <div className="arrow-btn mt-4 block group-hover:hidden text-primary font-poppins font-semibold">
    //             <span className="inline-block">Explore our {item.title} Offerings</span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    //   <div className="expertise-wrapper bg-white py-16">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl font-bold font-poppins mb-4">Our Areas of Expertise</h2>
    //       <p className="max-w-3xl mx-auto text-gray-600">
    //         With expertise in Digital, Engineering, and Cloud, we deliver solutions that fulfill the traditional, transformational, and future needs of clients across the globe.
    //       </p>
    //     </div>
    //     <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    //       {expertiseData.map((item, index) => (
    //         <div
    //           key={index}
    //           className="expertise-col group relative bg-white shadow-lg rounded-lg p-6 hover:bg-[#333333] transition-all duration-300"
    //         >
    //           <div className="expertise-content text-center transform group-hover:-translate-y-2 transition-transform duration-300">
    //             <div className="expertise-icon mb-4">
    //               <div className="expertise-icon-normal group-hover:hidden">
    //                 <Image src={item.normalIcon} alt={item.title} width={58} height={72} />
    //               </div>
    //               <div className="expertise-icon-hover hidden group-hover:block">
    //                 <Image src={item.hoverIcon} alt={`${item.title} Animated`} width={58} height={72} />
    //               </div>
    //             </div>
    //             <h3 className="text-xl font-bold font-poppins mb-2 group-hover:text-white transition-colors duration-300">
    //               {item.title}
    //             </h3>
    //             <p className="text-black group-hover:text-white transition-colors duration-300 mb-4">
    //               {item.description}
    //             </p>
    //           </div>
    //           <div className="arrow-btn absolute bottom-5 left-5 hidden group-hover:block transition-opacity duration-300">
    //             <Link href={item.link} className="inline-block text-primary font-poppins font-semibold hover:text-blue-500">
    //               Explore our {item.title} Offerings
    //             </Link>
    //           </div>
    //           <div className="arrow-btn mt-4 block group-hover:hidden text-primary font-poppins font-semibold relative">
    //             <span className="inline-block">Explore our {item.title} Offerings</span>
    //             <span className="absolute left-0 top-full transform -translate-y-1/2 ml-2">&#8594;</span> {/* Arrow icon */}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>






    <div className="expertise-wrapper bg-white py-16 lg:pt-28 xl:px-36">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-center text-3xl mb-8 text-black animate__animated animate__fadeIn">Our Areas of Expertise</h2>
          <p className="max-w-[867px] mx-auto text-center font-sans font-light text-[#14142b] text-[1.25rem] leading-[1.4]">
            Unlock growth with Sedra digital solutions. From Data Analytics to Cloud, AI/ML, IoT, and ERP, we bring tech innovations to life, transforming businesses worldwide.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              data-aos-offset="80"
              data-aos="zoom-in"
              className="expertise-col group relative bg-gray-100 shadow-md rounded-lg p-8 hover:bg-mai hover:shadow-lg transition-all duration-300 min-h-[20rem] sm:h-[24rem] md:h-[24rem] lg:h-80 "
            >
              <div className="expertise-content text-center transition-transform duration-300 group-hover:-translate-y-3">
                <div className="expertise-icon mb-4">
                  <div className="expertise-icon-normal group-hover:hidden">
                    <Image src={item.normalIcon} alt={item.title} width={58} height={72} />
                  </div>
                  <div className="expertise-icon-hover hidden group-hover:block">
                    <Image src={item.hoverIcon} alt={`${item.title} Animated`} width={58} height={72} />
                  </div>
                </div>

                <h3 className="text-xl text-left font-bold font-poppins mb-4 text-gray-800 transition-colors duration-300 group-hover:text-white group-hover:-translate-y-2">
                  {item.title}
                </h3>

                <div className="h-2" /> {/* Adjust height as needed */}

                <p className="text-black transition-colors duration-300 group-hover:text-white group-hover:-translate-y-2">
                  {item.description}
                </p>
                <div className="h-4" />
              </div>


              <div className="arrow-btn absolute bottom-5 right-1 flex items-center transition-opacity duration-300 group-hover:hidden">
                <span className="inline-block text-2xl text-mai mt-2">→</span> {/* Arrow icon */}
              </div>

              <Link href={item.link} className="absolute bottom-5 left-4 hidden group-hover:flex items-center text-primary font-poppins font-semibold group-hover:text-white transition-opacity duration-300">
                Explore our {item.title} Offerings
                <span className="ml-4 mr-2 inline-block font-bold text-2xl">→</span> {/* Arrow icon */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;


{/* <style>
    {`
      .expertise-title {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        color: #14142b;
        box-sizing: border-box;
        margin: 0 0 1.25rem;
        text-align: center !important;
        text-transform: inherit !important;
        font-weight: 300;
        font-size: 2.25rem;
        line-height: 2.6875rem;
      }
    `}
  </style> */}
