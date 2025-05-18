'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
    {
        icon: '/images/mobile-service/mobile-ios.png',
        title: "iOS App Development",
        description:
            "Ready to turn your ideas into fully-fledged, stable, and scalable iOS mobile apps? We ensure smooth integration with the Apple ecosystem, providing your users with a flawless experience. Using the latest technologies and tailored features, we create iOS apps that not only meet your business goals but also exceed user expectations.",
    },
    {
        icon: '/images/mobile-service/mobile-andriod.png',
        title: "Android App Development",
        description:
            "Our team builds Android software that puts your business front and center on any modern Android device. Create strong, user-friendly apps tailored specifically to your needs. From the initial concept to final deployment, our Android app development services ensure your app stands out in a competitive market and makes the experience of your users joyful.",
    },
    {
        icon: '/images/mobile-service/smart-watch.png',
        title: "Wearables and Embedded Software",
        description:
            "In a fast-paced world, creating companion apps is a must-have for the present. Depending on your needs, we build a wide range of wearable devices that seamlessly integrate with smart gadgets or proprietary peripherals. From fitness trackers to smartwatches and other connected devices, supercharge functionality and elevate the user experience, making your users even more loyal to your brand.",
    },
    {
        icon: '/images/mobile-service/native.png',
        title: "Native Mobile Apps",
        description:
            "For someone looking for versatility, our team develops robust native apps for both iOS and Android platforms. We focus on aligning app development services with your business and security requirements. By leveraging platform-specific features, we create secure, scalable and intuitive mobile experiences that grow your business and captivate your end-users.",
    },
    {
        icon: '/images/mobile-service/cross-app.png',
        title: "Cross-Platform Apps",
        description:
            "Cross-platform apps are cost-effective and easy to maintain, making them a fantastic addition to your business. They work seamlessly across different environments, combining the best of native and web app technologies. With this approach, we create mobile apps that deliver flawless performance and a unified user experience on every device. You all be able to reach a larger audience while still providing high quality and functionality.",
    },
    {
        icon: '/images/mobile-service/web-apps.png',
        title: "Progressive Web Apps",
        description:
            "Our Progressive Web App (PWA) development services bring you the best of both worlds-native-like features and easy installability. PWAs are fast, reliable, and engaging, blending the perks of web and mobile apps. With our expertise, you can deliver an amazing digital experience to your audience, no matter what device they are using.",
    },
];

const MobileService = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <section className="bg-[#4763ad] text-white py-16">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h2 className="text-3xl max-w-3xl  mx-auto font-bold mb-4">
                    MOBILE APPLICATION DEVELOPMENT SERVICES FOR VARIOUS PLATFORMS
                </h2>
                <p className="max-w-2xl mx-auto text-center text-lg mb-10">
                    Our mobile app developers have over a decade-long expertise in building solutions that meet market needs, empower companies’ brand identity, and encourage business growth and expansion.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            className="bg-white/10 rounded-xl p-10 w-full max-w-sm text-left"
                        >
                            <div className="mb-4">
                                <img className="h-14" src={service.icon} alt={service.title} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-white/90">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MobileService;
