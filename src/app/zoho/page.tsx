"use client";


// interface Testimonial {
//   quote: string;
//   name: string;
//   position: string;
//   image: string;
//   region: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     quote: "You can be a startup, mid-sized company, or an enterprise—Zoho One is a boon for all.",
//     name: "Prakarsh Gagdani",
//     position: "CEO, 5paisa.com (an IIFL subsidiary)",
//     image: "/images/zh-video-poster-prakash.png",
//     region: "IN",
//   },
  
// ];



const services = [
  {
    title: "Customization Services",
    description:
      "Our team of Zoho experts will workclosely with you to understand your unique business needs and customizeZoho to meet those needs. Ourcustomization services include:",
    icon: "/images/zoho/customise_services.svg",
    points: [
      "Custom workflow automation",
      "Custom report generation",
      "Custom dashboard creation",
      "Custom integration  applications",
      "Custom module creation",
    ],
  },
  {
    title: "Integration Services",
    description: "Seamless integration with third-party services.",
    icon: "/images/zoho/Integration_services.svg",
    points: [
      "Microsoft 365",
      "Google Workspace",
      "Slack",
      "Zapier",
      "Custom APIs",
    ],
  },
  {
    title: "Implementation Services",
    description:
      "Our implementation services ensure a smooth transition to Zoho, minimizing disruption to your business. Our services include:",
    icon: "/images/zoho/Implementaion_services.svg",
    points: [
      "Data migration",
      "System configuration",
      "User training",
      "Ongoing support & maintenance",
    ],
  },
  {
    title: "Deployment Services",
    description:
      "Cloud deployment (Zoho Cloud) On-premise deployment (Zoho One) Hybrid deployment (combination of cloud and on-premise)",
    icon: "/images/zoho/deployment_services.svg",
    points: [
      "Cloud deployment (Zoho Cloud)",
      "Data backup and recovery",
      "Security and compliance",
      "Ongoing support & maintenance",
    ],
  },
];


import Image from "next/image";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const consultationRef = useRef<HTMLDivElement>(null);

  const scrollToConsultation = () => {
    if (consultationRef.current) {
      consultationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Head>
        <title>Zoho with Maiprosoft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="font-[Poppins, sans-serif] min-h-screen bg-gray-100 pt-[61px]">
        <div
          className="flex w-full flex-col items-center p-4 lg:flex-row"
          style={{
            background: "linear-gradient(to right, #e8eef8, #ffffff)",
            color: "#000000",
          }}
        >
          <div className="p-4 lg:w-1/2">
            <div className="flex w-full justify-center">
              <Image
                src="/images/zoho/ZOHO_logo_2023.svg.png"
                alt="Zoho logo with colorful squares"
                width={250}
                height={250}
                className="mb-10"
              />
            </div>
            {/* <Image
      src="/images/zoho/ZOHO_logo_2023.svg.png"
      alt="Zoho logo with colorful squares"
      width={200}
      height={200}
      className="mb-4 mx-auto"
      /> */}
            {/* <h1 className="text-4xl font-bold mb-4 font-medium" style={{ fontFamily: 'Poppins', fontWeight: 450}}>
      Unlock the full potential of Zoho with Maiprosoft
    </h1> */}

            {/* <h1 
  className="text-4xl font-bold mb-4" 
  style={{ fontFamily: 'Poppins', fontWeight: 500 }}
>
  Unlock the full potential of Zoho with Maiprosoft
</h1> */}

            {/* <h1 
  className="text-4xl font-bold mb-4" 
  style={{ fontFamily: 'Poppins', fontWeight: 700 }}
>
  Unlock the full potential of Zoho with Maiprosoft
</h1> */}

            <h1 className="font-poppins text-4xl font-normal">
              Unlock the full potential of Zoho with Maiprosoft,
            </h1>

            {/* <p className="text-lg mb-6" style={{ fontFamily: 'Quicksand', fontWeight: 200 }}>
      Your trusted partner for Zoho projects, implementation, and management.
    </p> */}
            <p
              className="mb-6 text-lg"
              style={{ fontFamily: "Quicksand", fontWeight: 400 }}
            >
              Your trusted partner for Zoho projects, implementation, and
              management.
            </p>
            <button
              className="hover:bg-blue-600 rounded bg-[#0078d4ff] px-6 py-3 text-white shadow"
              onClick={scrollToConsultation}
            >
              Book a free Consultation
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 lg:w-1/2">
            {[
              // 'nYNMV680JeyCMShIOdf28lpf2sIfsuY2WNWcxYttSgwz4r9PB',
              // 'oenvbaGmx4VACyeS6DkHsjW5V0U7qIf7TaSPTQAATLJK81ePB',
              // 'cNHpNoEbuM5eXqfU1jyRSW4z0NCVYQZjobmWmEnyheLU81ePB',
              // '88YSqw9wGEaxNtjGzH8rKsHKWRfVuHlvtHUIAYC8NKWDfafnA'

              "/images/zoho/Zoho/Images/image1.png",
              "/images/zoho/Zoho/Images/image2.png",
              "/images/zoho/Zoho/Images/image3.png",
              "/images/zoho/Zoho/Images/image4.png",
            ].map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Local project visual ${idx + 1}`}
                width={260}
                height={260}
                className="h-full w-full rounded object-cover shadow-lg"
              />
            ))}
          </div>

          {/* 
  <div className="grid grid-cols-2 gap-4 w-full">
    {[
      '/images/zoho/Zoho/Images/image1.png',
      '/images/zoho/Zoho/Images/image2.png',
      '/images/zoho/Zoho/Images/image3.png',
      '/images/zoho/Zoho/Images/image4.png',
  
    ].map((img, idx) => (
      <div
        key={idx}
        className="rounded shadow-lg flex-shrink-0"
        style={{ width: '80px', height: '80px', overflow: 'hidden' }}
      >
        <Image
          src={img}
          alt={`Local project visual ${idx + 1}`}
          width={80} // Adjust the image width
          height={80} // Adjust the image height
          className="object-cover"
        />
      </div>
    ))}
  </div> */}
        </div>

        {/* <section className="bg-white py-12 text-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="mb-6 text-center font-poppins text-4xl font-medium">
              Get Started Today!
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-center font-poppins font-normal lg:max-w-full">
              Maiprosoft is a certified Zoho partner, offering expert
              customization, implementation, and deployment services to help
              businesses like yours get the most out of Zoho&#39;s suite of
              productivity applications.
            </p>

            <div className="mb-12 text-center">
              <button
                className="hover:bg-blue-600 rounded bg-[#0078d4ff] px-6 py-3 text-white shadow"
                onClick={scrollToConsultation}
              >
                Book a free Consultation
              </button>
            </div>

            <div className="mb-12 grid place-items-center">
              <Image
                src="https://storage.googleapis.com/a1aa/image/MxDrADgxKsJhFRV4QJNsnUp9uF2chhOxcQbY0QfI1RDnA1fTA.jpg"
                alt="People working on a flow chart with sticky notes and laptops"
                width={1200}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="relative grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative rounded-lg bg-[#0078d4ff] p-6 text-white shadow-lg"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-16 w-16 rounded-full bg-[#0078d4ff] p-2"
                    />
                  </div>
                  <div className="mb-4 mt-10 text-center">
                   

                    <h2 className="mb-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-poppins font-medium">
                      {service.title}
                    </h2>
                    

                    <div className="h-38 ">
                      <p className="font-poppins text-sm font-normal  text-[#f0f0f0]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="list-inside list-disc list-none space-y-2 font-[Poppins]">
                    {service.points.map((point, i) => (
                     

                      <li
                        key={i}
                        className="text-yellow-400 flex list-inside items-center"
                      >
                        <span className="mr-2 text-2xl text-maiy">•</span>{" "}
                        {point}
                      </li>

                     
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section> */}








        {/* new section */}

        <section className="bg-[#fffff8] pt-28">
          <div className="container mx-auto flex flex-col items-center gap-3 px-6 lg:flex-row ">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <h1 className="mb-6 text-3xl font-normal leading-tight md:text-6xl text-gray-900 text-center lg:text-start">
                Your life&apos;s work,{" "}
                <span className="text-blue-600 block">
                  powered by our life&apos;s work
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-gray-600 text-center lg:text-start text-lg lg:text-xl">
                A unique and powerful software suite to transform the way you
                work. Designed for businesses of all sizes, built by a company
                that{" "}
                <a
                  className="text-blue-500 hover:text-blue-700 underline "
                  href="/privacy-commitment.html?ireft=nhome&src=home"
                >
                  values your privacy
                </a>
                .
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <a
                  href="/signup.html?all_prod_page=true"
                  className="bg-[#ee0014] hover:bg-blue-700 rounded-sm px-6 py-3 font-semibold text-white transition"
                >
                  Get Started For Free
                </a>
                {/* <a
                  href="/all-products.html"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 rounded-sm border px-6 py-3 font-semibold transition hover:text-white"
                >
                  Access your apps
                </a> */}
              </div>
              <div className="pt-28">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="https://www.zoho.com/sites/zweb/images/zoho_general_pages/zh-homev2-banner-india-3.webp"
                  />
                  <img
                    className="w-full  max-w-[70rem]"
                    fetchPriority="high"
                    alt="Zoho Cloud Software Suite for Businesses"
                    src="https://www.zoho.com/sites/zweb/images/zoho_general_pages/zh-homev2-banner-india-3.png"
                    width={1030}
                    height={299}
                  />
                </picture>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 items-center justify-center rounded-lg bg-white p-8 shadow-lg max-w-96 xl:mb-10">
              <div className=" text-xl mb-4 font-light text-black">Featured apps</div>
              <ul className="space-y-6">
                {[
                  {
                    title: "CRM",
                    desc: "Comprehensive CRM platform for customer-facing teams.",
                    href: "/crm/?ireft=nhome&src=fa",
                  },
                  {
                    title: "Mail",
                    desc: "Secure email service for teams of all sizes.",
                    href: "/mail/?ireft=nhome&src=fa",
                  },
                  {
                    title: "Projects",
                    desc: "Manage, track, and collaborate on projects with teams.",
                    href: "/projects/?ireft=nhome&src=fa",
                  },
                  {
                    title: "Books",
                    desc: "Powerful accounting platform for growing businesses.",
                    href: "/books/?ireft=nhome&src=fa",
                  },
                  {
                    title: "Creator",
                    desc: "Build custom apps to simplify business processes.",
                    href: "/creator/?ireft=nhome&src=fa",
                  },
                ].map((app) => (
                  <li key={app.title}>
                    <a href={app.href} className="group flex items-start gap-4 text-black">
                      <div className="bg-blue-100 text-blue-600 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold">
                        {app.title.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xl font-medium group-hover:underline">
                          {app.title}
                        </div>
                        <small className="text-gray-500 text-[1rem] tracking-tight leading-relaxed">{app.desc}</small>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
             
              <div className="mt-8">
                <a
                  href="/all-products.html?ireft=nhome&src=home"
                  className="text-blue-600 inline-block font-semibold hover:underline text-blue"
                >
                  Explore all products
                </a>
              </div>
            </div>
          </div>
        </section>



        {/* new section 2  */}

        <section className="relative bg-[#ffd600] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className=" flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:w-1/2 w-full md:items-start ">
          <Image
            alt="Zoho One Logo"
            className="flex-shrink-0"
            height={64}
            width={64}
            src="https://www.zosuccess.com/wp-content/uploads/2023/01/zoho-one-svg.png"
          />
          <div className="text-black flex flex-col items-center text-center md:text-left md:items-start">
            <p className="text-sm leading-5 font-normal mb-1">All-in-one suite</p>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] leading-tight font-normal font-sans mb-2">
              Zoho One
            </h1>
            <p className="text-sm leading-5 font-normal mb-4 sm:mb-6">
              The operating system for business
            </p>
            <p className="text-base sm:text-[1rem] leading-7 font-normal max-w-md mb-6 sm:mb-8">
              Run your entire business on Zoho with our unified cloud software, designed to help you break
              down silos between departments and increase organizational efficiency.
            </p>
            <button
              type="button"
              className="bg-[#e60028] text-white text-sm font-semibold uppercase px-6 py-3 rounded-sm flex items-center gap-2 hover:bg-[#b80020] transition"
            >
              Try Zoho One
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center relative pl-6 sm:pl-12 md:pl-20 border-l border-[#d9b600] max-w-lg">
          <p className="text-xl sm:text-[1.5rem] leading-8  mb-6 sm:mb-8 text-gray-950 font-light">
          &quot;You can be a startup, mid-sized company, or an enterprise—Zoho One is a boon for all.&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              alt="Prakarsh Gagdani"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
              height={64}
              width={64}
              src="https://storage.googleapis.com/a1aa/image/12d136de-5647-461a-457d-630ac5c395cc.jpg"
            />
            <div className="text-black">
              <p className="text-sm font-semibold leading-5">Prakarsh Gagdani</p>
              <p className="text-xs sm:text-[12px] font-normal leading-4">
                CEO, 5paisa.com (an IIFL subsidiary)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Cube Image */}
      <Image
        alt="Decorative Cube"
        aria-hidden="true"
        className="absolute hidden lg:block -right-24 top-52 pointer-events-none select-none"
        height={300}
        width={300}
        src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-one-bg.png"
        style={{ maxWidth: 800, maxHeight: 800 }}
      />
    </section>

    



        




        <section className="bg-gray-800 py-12 text-white">
          <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="mb-4 font-poppins text-3xl font-medium">
                Managed Services
              </h2>
              <p className="mb-6 font-poppins text-lg font-normal">
                Ongoing support and management of your Zoho setup.
                <br /> Regular updates, backups, and security checks.
                <br /> Performance optimization and troubleshooting.
              </p>
              <h2 className="mb-4 font-poppins text-3xl font-medium">
                Support Services
              </h2>
              <p className="mb-6 text-lg">
                Priority support for Zoho-related issues.
                <br /> Timely resolution of errors and bugs.
                <br /> Guidance on best practices and usage.
              </p>
              <h2 className="mb-4 text-3xl font-semibold">
                Benefits of Our Zoho Services
              </h2>
              {/* <ul className="list-disc pl-5 space-y-3">
  <li className="text-yellow-400">Improved productivity and efficiency</li>
  <li className="text-yellow-400">Enhanced collaboration and communication</li>
  <li className="text-yellow-400">Customized solutions tailored to your business</li>
  <li className="text-yellow-400">Seamless integration with existing systems</li>
  <li className="text-yellow-400">Ongoing support and maintenance</li>
</ul> */}
              <ul className="list-none space-y-3 pl-1">
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Improved productivity and efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Enhanced collaboration and communication</span>
                </li>
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Customized solutions tailored to your business</span>
                </li>
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Seamless integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="pr-2 text-maiy">•</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:w-1/2">
              <img
                src="https://storage.googleapis.com/a1aa/image/hFDTeIZSigxfkUMjIuu7owi2eZCsV7N1F2bhRAKx6fYjfN9fE.jpg"
                alt="A person working on multiple computer screens"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#fed600ff] py-16 text-black">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h1 className="mb-6 font-poppins text-3xl font-medium">
                  Zoho CRM
                </h1>
                <p className="mb-8 font-poppins">
                  Transform customer interactions with Zoho CRM. Automate sales,
                  marketing, and support processes. Enhance lead management,
                  pipeline visibility, and team collaboration. Make data-driven
                  decisions with real-time analytics. Deliver exceptional
                  customer experiences and drive business growth.
                </p>

                <h1 className=" mb-6 font-poppins text-3xl  font-medium">
                  Zoho Projects
                </h1>
                <p className="mb-8 font-poppins">
                  Simplify project execution with Zoho Projects. Plan, track,
                  and collaborate on projects with ease. Automate workflows, set
                  milestones, and allocate tasks. Enhance team productivity,
                  reduce timelines, and boost profitability. Make informed
                  decisions with real-time reports and analytics.
                </p>

                <h1 className="mb-6 font-poppins text-3xl font-medium">
                  Zoho Inventory
                </h1>
                <p className="mb-8 font-poppins">
                  Effortlessly manage your inventory with Zoho Inventory. Track
                  stock levels, automate orders, and optimize warehouse
                  operations. Streamline product management, shipping, and
                  fulfillment. Get real-time insights and make data-driven
                  decisions to reduce costs, improve efficiency, and boost
                  profitability.
                </p>

                <h1 className="mb-6 font-poppins text-3xl font-medium">
                  Zoho Books
                </h1>
                <p className="mb-8 font-poppins">
                  Streamline financial management with Zoho Books. Automate
                  invoicing, inventory, and expense tracking. Get realtime
                  insights into cash flow, profits, and expenses. Make informed
                  decisions with customizable reports and analytics. Ensure
                  compliance and scalability with secure, cloud-based accounting
                  solutions.
                </p>

                <h1 className="mb-6  font-poppins text-3xl font-medium">
                  Zoho People
                </h1>
                <p className="mb-8 font-poppins">
                  Revolutionize human resources with Zoho People. Automate
                  employee data, attendance, and leave management. Streamline
                  recruitment, performance tracking, and benefits
                  administration. Enhance employee engagement and self-service
                  capabilities. Make data-driven decisions with customizable
                  reports and analytics for a more productive workforce.
                </p>

                <h1 className="mb-6  font-poppins text-3xl font-medium">
                  Zoho Creator
                </h1>
                <p className="mb-8 font-poppins">
                  Custom application development using Zoho Creator Automate
                  workflows, streamline processes, and enhance productivity.
                </p>

                <h1 className="mb-6 font-poppins text-3xl  font-medium">
                  Zoho One
                </h1>
                <p className="mb-8 font-poppins">
                  Expert implementation and management of Zoho One, the
                  all-in-one suite Streamline your business operations with a
                  single, unified platform.
                </p>
              </div>

              {/* <div className="flex justify-center">
            <Image
              src="/images/zoho/Zoho/Images/ZohoProducts.png"
              alt="Zoho Products Image"
              width={400}
              height={400}
              className=" "
            />
          </div> */}
              <div className="flex justify-center">
                <Image
                  src="/images/zoho/Zoho/Images/ZohoProducts.png"
                  alt="Zoho Products Image"
                  width={500}
                  height={500}
                  className="lg:mt-80" // Adds top margin to push the image down
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center bg-[#71cbd1ff] py-12">
          <div className="container mx-auto flex flex-col items-center justify-between space-y-6 px-6 md:flex-row md:space-x-12 md:space-y-0">
            {/* Text Section */}
            <div className="max-w-lg text-left">
              <h2 className="mb-4 font-poppins text-3xl font-medium text-black">
                Why Choose Maiprosoft?
              </h2>
              <ul className="space-y-2 text-lg text-black ">
                <li>Proven expertise in Zoho implementation and management</li>
                <li>Customized solutions tailored to your business needs</li>
                <li>Responsive support and timely issue resolution</li>
                <li>
                  Cost-effective solutions without compromising on quality
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden bg-cover bg-center md:h-80  md:w-80">
              <img
                src="/images/zoho/Zoho/Images/speaker.png"
                alt="Why choose us image"
                className="h-full w-full object-cover"
              />
            </div>
            {/* <div className=" inset-0 bg-black opacity-50"></div> */}
            {/* <h1 className=" text-2xl md:text-3xl font-bold text-white text-center">
        WHY CHOOSE US?
      </h1> */}
          </div>
        </section>

        <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100 md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://storage.googleapis.com/a1aa/image/Us2JN7WsDLaJNNJMIpqaYHzywSI4pbgUTaZqojgtWCQvr6fJA.jpg"
              alt="Person working on a laptop"
              className="h-full w-full object-cover"
              height="400"
              width="600"
            />
          </div>

          {/* Form Section */}
          <div
            className="w-full rounded-lg bg-white p-8 shadow-lg md:w-1/2"
            ref={consultationRef}
          >
            <h1 className="mb-4 font-poppins text-3xl font-bold">
              Book a <span className="text-blue-500">free</span> Consultation
            </h1>
            <form>
              {/* Full Name */}
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="focus:ring-blue-400 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-2"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="focus:ring-blue-400 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-2"
                />
              </div>

              {/* Number */}
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block font-medium text-gray-700"
                >
                  Number
                </label>
                <input
                  id="number"
                  type="text"
                  placeholder="Enter your phone number"
                  className="focus:ring-blue-400 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-2"
                />
              </div>

              {/* Project Description */}
              <div className="mb-4">
                <label
                  htmlFor="project"
                  className="block font-medium text-gray-700"
                >
                  Describe Your Project Need
                </label>
                <textarea
                  id="project"
                  placeholder="Briefly describe your project need"
                  className="focus:ring-blue-400 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 focus:outline-none focus:ring-2"
                  rows={4}
                ></textarea>
              </div>

              {/* Privacy Policy */}
              <div className="mb-4 text-sm text-gray-600">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>
                .
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 w-full rounded-lg py-2 text-white transition duration-300 ease-in-out"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
