'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactModal from '../ContactModal/ContactModal';


type Slide = {
  image: string;
  title: string;
  heading: string;
  description: string;
  buttonText: string;
};

const slides: Slide[] = [
  {
    image: '/images/slider-image/slider1.png',
    title: 'GETTING YOU ON THE ROAD',
    heading: 'Expert Project Management for IoT & Low Current Systems',
    description: 'Our project management services include detailed planning, emergency preparedness, excellent coordination, and on-site problem-solving. Our field engineers and agents bring diverse backgrounds and specialized experience across various areas of IoT and low current systems.',
    buttonText: 'Book a Consultation',
  },
  {
    image: '/images/slider-image/slider2.png',
    title: 'OUR CORE VALUES',
    heading: 'Totally Dependable Partner in a Fast-Changing World',
    description: 'At SEDRA Corporation, we understand the challenges brought by rapid technological advancements and evolving consumer demands. We continually seek innovative ways to elevate our services and empower our workforce amidst these changes. One of our fundamental values is being a Totally Dependable Partner you can always count on.',
    buttonText: 'Book a Consultation',
  },
  {
    image: '/images/slider-image/slider3.png',
    title: 'EXPLORE THE POSSIBILITIES WITH US!',
    heading: 'Unlock New Opportunities & Enhance Your Advertising Power',
    description: 'Unlock new opportunities to advertise your products and services with us. Benefit from our robust partnerships with global brands and vendors. Leverage our in-depth knowledge of Telecom Operators internal workings. We provide a comprehensive portfolio of services across all sectors, including government, infrastructure, and telecommunications, empowering you with enhanced negotiating power.',
    buttonText: 'Book a Consultation',
  },
  {
    image: '/images/slider-image/slider4.png',
    title: 'Digitize, Automate & Scale with Zoho',
    heading: 'Smart solutions to simplify your business and accelerate growth.',
    description: 'Transform your business with Zoho all-in-one platform. From managing customers to automating daily tasks, we help you streamline operations, improve efficiency, and focus on what matters most—growing your business. Get expert onboarding, tailored solutions, and ongoing support to make Zoho work for you.',
    buttonText: 'Book a Consultation',
  },
  {
    image: '/images/slider-image/slider5.jpg',
    title: 'Powering Reliable Networks & Hardware',
    heading: 'Seamless IT solutions for smooth, uninterrupted business operations.',
    description: 'From robust networking to high-quality hardware solutions, we ensure your business stays connected and productive. Our expert team provides reliable infrastructure, fast support, and proactive maintenance to minimize downtime and maximize performance. Trust us to keep your systems running at their best.',
    buttonText: 'Book a Consultation',
  },
];

export default function CarouselBanner() {
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState<number>(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40rem] sm:h-96 md:h-[40rem] lg:h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover opacity-40"
            sizes="(max-width: 768px) 100vw, 1500px"
            priority={index === current}
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-40 max-w-6xl">
            <div className="md:text-start text-start  text-white max-w-2xl">
              <h1 className="text-2xl sm:text-2xl md:text-3xl xl:text-5xl font-semibold mb-4 md:pt-8">{slide.title}</h1>
              <h2 className="text-[1rem] sm:text-xl md:text-2xl font-semibold mb-2">{slide.heading}</h2>
              <p className="text-sm sm:text-base md:text-lg text-start md:text-start leading-relaxed font-sans font-light">{slide.description}</p>
              <button onClick={() => setShowModal(true)} className="md:px-4 md:py-3 px-2 py-2 text-sm md:text-md lg:text-lg font-sans font-light bg-[#4763ad] mt-6 sm:mt-10 text-white ">
                {slide.buttonText}
              </button>

              {/* <ContactModal showModal={showModal} closeModal={() => setShowModal(false)} /> */}
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-1 sm:p-2 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:size-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-1 sm:p-2 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:size-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === current ? 'bg-white' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
