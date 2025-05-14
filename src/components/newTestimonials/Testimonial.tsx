"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  name: string;
  title: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Emily Thompson",
    title: "Product Manager at TechFlow",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The platform is intuitive and has significantly improved our workflow. Support was responsive and knowledgeable. Highly recommend it to any growing team.",
  },
  {
    name: "Michael Chen",
    title: "Software Engineer at Devify",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've used several tools before, but this one stands out for its clean UI and blazing-fast performance. It's made a real difference in how I work every day.",
  },
  {
    name: "Sara Patel",
    title: "UX Designer at Creative Minds",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The user experience is top-notch. Everything feels smooth, thoughtful, and purposeful. It’s clear the team cares about design deeply.",
  },
  {
    name: "Liam Rodriguez",
    title: "CTO at NextLevel Startups",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "We adopted this for our entire engineering team, and productivity shot up. Integration was seamless, and the documentation is solid.",
  },
  {
    name: "Isabella Nguyen",
    title: "Marketing Strategist at BrightBuzz",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    text: "I was impressed by how easy it was to get started. The onboarding flow made things crystal clear and had us running in no time.",
  },
  // Add more testimonials as needed
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, image, title, text } = testimonials[current];

  return (
    <section className="py-12 lg:py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-sky-500 font-normal uppercase mb-1 font-sans">
          Our Testimonials
        </h2>
        <h3 className="text-3xl font-semibold mb-8 tracking-tight">
          What They&lsquo;re Saying?
        </h3>

        <div className="relative bg-[#121f6b] text-white px-6 py-14 lg:px-10 lg:pt-20 lg:pb-28  shadow-lg">
          <div
            key={current}
            className="flex flex-col items-start gap-6 transition-all duration-300 ease-in-out"
          >
            <div className="relative">
              <div className="bg-white px-1 py-2 rounded-md">
                <Image
                  src={image}
                  alt={name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 translate-x-2 translate-y-2 w-full h-full border-2 border-sky-500 rounded-md -z-10"></div>
            </div>

            <div>
              <h4 className="font-semibold text-lg font-sans">{name}</h4>
              <p className="text-sky-400 text-sm mb-4">{title}</p>
              <p className="leading-relaxed text-sm md:text-base">{text}</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute top-4 right-4 flex gap-1 z-10">
            <button
              onClick={prevSlide}
              className="bg-white text-black p-1 hover:bg-gray-200 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-black p-1 hover:bg-gray-200 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Optional Debug Index */}
          <p className="absolute bottom-4 right-4 text-xs text-gray-300">
            Slide {current + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
