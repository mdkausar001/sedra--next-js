// 'use client';

// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
// import React, { useEffect, useState } from 'react';

// const clients = [
//   { alt: 'Client 1', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/12-1.png' },
//   { alt: 'Client 2', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/13-1.png' },
//   { alt: 'Client 3', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/11-1.png' },
//   { alt: 'Client 4', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/10-1.png' },
//   { alt: 'Client 5', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/9-1.png' },
//   { alt: 'Client 6', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/7-1.png' },
//   { alt: 'Client 7', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/6-1.png' },
//   { alt: 'Client 8', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/5-1.png' },
//   { alt: 'Client 9', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/8-1.png' },
//   { alt: 'Client 10', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/4-1.png' },
//   { alt: 'Client 11', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/3-1.png' },
//   { alt: 'Client 12', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/2-1.png' },
// ];

// const ClientsSection: React.FC = () => {
//   const { ref, inView } = useInView({ triggerOnce: true });
//   const [showAll, setShowAll] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // initial check
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const visibleClients = isMobile && !showAll ? clients.slice(0, 4) : clients;

//   const handleToggle = () => {
//     if (showAll) {
//       // scroll back up when collapsing
//       document.getElementById('clients-grid')?.scrollIntoView({ behavior: 'smooth' });
//     }
//     setShowAll(prev => !prev);
//   };

//   return (
//     <section className="py-20 px-4 text-center bg-gray-50 flex flex-col items-center justify-center">
//       <h4 className="text-sm uppercase text-gray-700 font-medium md:text-2xl">Our Clients</h4>
//       <h2 className="text-3xl md:text-4xl mt-2 text-gray-700 font-light font-sans">
//         Trusted by over{' '}
//         <span ref={ref} className="text-indigo-600 font-normal">
//           {inView && <CountUp end={786} duration={2.5} />}+
//         </span>{' '}
//         clients.
//       </h2>
//       <p className="mt-4 text-gray-800 max-w-2xl font-light text-lg md:text-xl text-center mx-auto">
//         Our clients are our top priority, and we are committed to providing them with the highest level of service.
//       </p>

//       <div className="w-[50%] h-[1px] bg-slate-400 my-10" />

//       <div
//         id="clients-grid"
//         className={`mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto transition-all duration-500 ease-in-out ${
//           isMobile && !showAll ? 'max-h-[500px] overflow-hidden' : 'max-h-full'
//         }`}
//       >
//         {visibleClients.map((client) => (
//           <div
//             key={client.alt}
//             className="bg-gray-300 p-6 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition"
//           >
//             <img
//               className="swiper-slide-image swiper-lazy swiper-lazy-loaded"
//               src={client.src}
//               alt={client.alt}
//             />
//           </div>
//         ))}
//       </div>

//       {isMobile && (
//         <button
//           onClick={handleToggle}
//           className="mt-6 md:hidden inline-flex items-center gap-2 text-indigo-600 hover:underline"
//         >
//           {showAll ? 'Show Less ▲' : 'Show More ▼'}
//         </button>
//       )}
//     </section>
//   );
// };

// export default ClientsSection;












'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const clients = [
  { alt: 'Client 1', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/12-1.png' },
  { alt: 'Client 2', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/13-1.png' },
  { alt: 'Client 3', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/11-1.png' },
  { alt: 'Client 4', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/10-1.png' },
  { alt: 'Client 5', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/9-1.png' },
  { alt: 'Client 6', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/7-1.png' },
  { alt: 'Client 7', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/6-1.png' },
  { alt: 'Client 8', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/5-1.png' },
  { alt: 'Client 9', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/8-1.png' },
  { alt: 'Client 10', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/4-1.png' },
  { alt: 'Client 11', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/3-1.png' },
  { alt: 'Client 12', src: 'https://sedra.net.sa/wp-content/uploads/2024/08/2-1.png' },
];

const chunkArray = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const ClientsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const clientGroups = chunkArray(clients, 4); // 4 = 2x2 grid per group

  return (
    <section className="py-20 px-4 text-center bg-gray-50 flex flex-col items-center justify-center">
      <h4 className="text-sm uppercase text-gray-700 font-medium md:text-2xl">Our Clients</h4>
      <h2 className="text-3xl md:text-4xl mt-2 text-gray-700 font-light font-sans">
        Trusted by over{' '}
        <span ref={ref} className="text-indigo-600 font-normal">
          {inView && <CountUp end={10} duration={2.5} />}+
        </span>{' '}
        clients.
      </h2>
      <p className="mt-4 text-gray-800 max-w-2xl font-light text-lg md:text-xl text-center mx-auto">
        Our clients are our top priority, and we are committed to providing them with the highest level of service.
      </p>

      <div className="w-[50%] h-[1px] bg-slate-400 my-10" />

      {/* Mobile: horizontal scroll with 2x2 blocks */}
      <div className=" flex gap-2 overflow-x-auto md:hidden px-1 scroll-smooth w-full">
        {clientGroups.map((group, idx) => (
          <div key={idx} className="min-w-[280px] grid grid-cols-2 gap-2">
            {group.map((client) => (
              <div
                key={client.alt}
                className="bg-gray-300 p-8 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img src={client.src} alt={client.alt} className="w-20 h-20 object-contain" />
              </div>
            ))}
          </div>

    
        ))}

        


      </div>
      <div className="h-4 w-full flex items-center justify-center gap-2 mt-4 md:hidden" >
        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
        <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 max-w-6xl mx-auto">
        {clients.map((client) => (
          <div
            key={client.alt}
            className="bg-gray-300 p-6 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img src={client.src} alt={client.alt} className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;


