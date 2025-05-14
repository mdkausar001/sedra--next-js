'use client';

import Image from 'next/image';
import React from 'react';

const partners = [
  {
    alt: 'Schneider Electric',
    src: 'https://sedra.net.sa/wp-content/uploads/2024/08/2.png',
  },
  {
    alt: 'Cisco',
    src: 'https://sedra.net.sa/wp-content/uploads/2024/08/3.png',
  },
  {
    alt: 'EAE Elektrik',
    src: 'https://sedra.net.sa/wp-content/uploads/2024/08/4.png',
  },
  {
    alt: 'Dell Technologies',
    src: 'https://sedra.net.sa/wp-content/uploads/2024/08/5.png',
  },
];

const PartnershipSection: React.FC = () => {
  return (
    <section className="relative bg-[#0b1c33] text-white py-16 px-4 text-center overflow-hidden">
      {/* Optional decorative background */}
      <div className="absolute inset-0 bg-[url('/bg-grid.png')] bg-cover bg-center opacity-10 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold tracking-wider uppercase text-blue-200">
          Partnership With
        </h2>
        <p className="mt-6 text-sm md:text-lg leading-relaxed text-blue-100 font-light">
          We prioritize understanding their needs and challenges, striving to deliver tailored solutions
          that not only meet but exceed their expectations. By forging strong relationships, we view our
          customers as integral partners in our journey toward mutual success. Their satisfaction fuels
          our drive for continuous innovation, ensuring that we remain their trusted ally in achieving
          their goals.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="bg-white bg-opacity-90 p-4 rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Optional pagination indicators */}
        <div className="mt-6 flex justify-center gap-2">
          <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-700 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
