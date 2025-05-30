'use client'
import Customers from '@/components/MobileAppDevelopment/Customers'
import DevelopmentProcess from '@/components/MobileAppDevelopment/DevelopmentProcess';
import FAQ from '@/components/MobileAppDevelopment/FAQ';
import MobileAppHero from '@/components/MobileAppDevelopment/MobileAppHero';
import MobileAppsWeDevelop from '@/components/MobileAppDevelopment/MobileAppsWeDevelop';
import MobileSection from '@/components/MobileAppDevelopment/MobileSection'
import MobileService from '@/components/MobileAppDevelopment/MobileService';
import MobileSolution from '@/components/MobileAppDevelopment/MobileSolution';
import Partner from '@/components/MobileAppDevelopment/Partner';

const features = [
    {
        title: "10+ Custom Mobile App Solutions",
        desc: "",
    },
    {
        title: "Enterprise Mobile App Development & Integrations",
        desc: "From ERP to workflow management",
    },
    {
        title: "Native and Cross-Platform Development",
        desc: "Mobile apps that work on any device",
    },
    {
        title: "20+ Top IT Experts",
        desc: "",
    },
    {
        title: "15+ Years of Experience",
        desc: "Leading in mobile development since iOS and Android launched",
    },
    {
        title: "Full Cycle Development and Support",
        desc: "",
    },
    {
        title: "Strategic Long-Term Partnerships",
        desc: "",
    },
    {
        title: "35 Fortune 1000 Clients",
        desc: "",
    },
    {
        title: "9 Offices in 7 Countries",
        desc: "",
    },
];


const page = () => {
    return (
        <>
            <MobileAppHero />
            <MobileSection />
            <Partner />
            <Customers />
            <MobileService />
            <MobileSolution />
            <MobileAppsWeDevelop />
            <DevelopmentProcess />
            <FAQ />
        </>
    )
}

export default page
