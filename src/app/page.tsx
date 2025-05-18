
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import BusinessSection from "@/components/business";
import BrandsClient from "@/components/client";
import ClientsSection from "@/components/clintSection/ClientsSection";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Cookies from "@/components/cookie";
import FAQs from "@/components/Faqs";
import Features from "@/components/Features";
import DelayedForm from "@/components/form";
import RequestDemoForm from "@/components/form";
import Hero from "@/components/Hero";
import Homes from "@/components/home/index";
import FullScreenImage from "@/components/images-section";
import MeetClients from "@/components/meetclient/clinent";
import HRPopupModal from "@/components/model/index";
import Testimonial from "@/components/newTestimonials/Testimonial";
import PartnerSection from "@/components/partner";
import Pricing from "@/components/Pricing";
import StatsSection from "@/components/project";
import ProjectNumber from "@/components/project";
import ExpertiseSection from "@/components/secondcomp";
import Services from "@/components/services";
import NewServices from "@/components/servicess";
import TestimonialSection from "@/components/testim";
// import Testimonial from "@/components/Testimonials";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import WhyUs from "@/components/whyus";
import { Metadata } from "next";
import { FaQq } from "react-icons/fa";
import AboutPage from "./about/page";
import AboutSedra from '@/components/About/AboutSedra'
import ProjectsCarousel from "@/components/ProjectsCarousel/ProjectsCarousel";
import Experience from "@/components/MobileAppDevelopment/Experience";


export const metadata: Metadata = {
  metadataBase: new URL("https://Sedra.net.sa"),

  title: "Sedra - Expertise You Can Trust",
  description: "We are committed to transform clients businesses and driving success in the digital age",
  // other metadata
  openGraph: {
    title: "Sedra - Expertise You Can Trust",
    description:
      "We are committed to transforming clients' businesses and driving success in the digital age",
    url: "https://Sedra.net.sa",
    type: "website",
    images: [
      {

        url: "/images/meta/android-chrome-512x512.png",
        // url: "/images/logo/newmaiprosoftLogo.png", // Replace with your actual image URL
        width: 700,
        height: 630,
        alt: "We are committed to transforming clients' businesses and driving success in the digital age",

      },
    ],
  },
  icons: {
    icon: "/public/favicon.png", // Path to your favicon
  },
};

export default function Home() {

  return (
    <>
      <ScrollUp />
      <Homes />
      <ExpertiseSection />

      <ClientsSection />

      <PartnerSection />
      <Experience />
      <Testimonial />
      <ProjectsCarousel />

      {/* <AboutSedra /> */}



      {/* <MeetClients/>
      <PartnerSection/> */}
      {/* 
<FullScreenImage/> */}
      {/* <BrandsClient/> */}
      {/* <Testimonial/> */}
      {/* <Services/> */}
      <Cookies />
      {/* <NewServices/> */}
      {/* <Hero /> */}

      {/* <WhyUs/> */}
      {/* <TestimonialSection/> */}
      {/* <BusinessSection/> */}


      {/* <ProjectNumber/> */}
      {/* <StatsSection/> */}
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}


      {/* <Testimonials /> */}



      {/* <Pricing />  */}
      {/* <FAQs/> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
      {/* <RequestDemoForm/> */}
      {/* <DelayedForm/> */}

      {/* <HRPopupModal/> */}

    </>
  );
}
