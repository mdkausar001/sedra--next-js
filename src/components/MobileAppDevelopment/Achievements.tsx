import React from "react";

const ACHIEVEMENTS = [
  {
    type: "image",
    src: "https://sedra.net.sa/wp-content/uploads/2024/08/1.png", // Replace with your left achievement image
    alt: "Emerging Partner Award",
  },
  {
    type: "badge",
    src: "https://sedra.net.sa/wp-content/uploads/2024/08/2.png", // Replace with your badge image
    alt: "Zoho Creator Certified Expert",
  },
  {
    type: "image",
    src: "https://sedra.net.sa/wp-content/uploads/2024/08/3.png", // Replace with your right achievement image
    alt: "Key Business Contributor Award",
  },
];

const Achievements = () => (
  <section className="bg-[#faf9fd] py-12">
    <div className="max-w-5xl mx-auto px-4">
      {/* Subtitle */}
      <div className="text-center mb-2">
        <span className="text-base font-semibold text-[#23235b] tracking-wide">
          OUR{" "}
          <span className="bg-[#23235b] text-white px-2 py-1 rounded">
            ACHIEVEMENTS
          </span>
        </span>
      </div>
      {/* Main Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#23235b] mb-10">
        Partnered with Best Tech & ERP Providers
      </h2>
      {/* Achievements Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Achievement Image */}
        <img
          src={ACHIEVEMENTS[0].src}
          alt={ACHIEVEMENTS[0].alt}
          className="w-[340px] h-[220px] object-cover rounded-lg shadow-md"
        />
        {/* Center Badge */}
        <img
          src={ACHIEVEMENTS[1].src}
          alt={ACHIEVEMENTS[1].alt}
          className="w-[220px] h-[220px] object-contain"
        />
        {/* Right Achievement Image */}
        <img
          src={ACHIEVEMENTS[2].src}
          alt={ACHIEVEMENTS[2].alt}
          className="w-[340px] h-[220px] object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
);

export default Achievements;
