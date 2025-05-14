//2
// components/Testimonials.js
"use client";
import { Image } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  name: string;
  title: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Prashant Shah',
    title: 'Marketer',
    image: 'https://i.pravatar.cc/100?img=2',
    text: 'What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs!',
  },
  {
    name: 'Prashant Shah',
    title: 'Marketer',
    image: 'https://i.pravatar.cc/100?img=2',
    text: 'What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs!',
  },
  {
    name: 'Prashant Shah',
    title: 'Marketer',
    image: 'https://i.pravatar.cc/100?img=2',
    text: 'What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs!',
  },
  {
    name: 'Prashant Shah',
    title: 'Marketer',
    image: 'https://i.pravatar.cc/100?img=2',
    text: 'What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs!',
  },
  {
    name: 'Tyler McIntyre',
    title: 'Founder at Novo Bank',
    image: 'https://i.pravatar.cc/100?img=3',
    text: 'What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs! What do I like best? The clean designs!',
  },
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let req: number;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += 0.5; // You can adjust this for scroll speed

        container.scrollLeft = scrollAmount; // Scroll the container horizontally

        // Reset scroll position when it reaches the end
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0; // Reset to the beginning
        }
      }

      req = requestAnimationFrame(scroll); // Continue scrolling
    };

    req = requestAnimationFrame(scroll); // Start scrolling

    return () => cancelAnimationFrame(req); // Cleanup on unmount
  }, [isPaused]);

  const duplicated = [...testimonials, ...testimonials]; // Loop effect

  return (
    <section className="bg-gradient-to-r from-[#fff] via-[#61b0d496] to-[#fdb5e77c] py-16 xl:py-48 pl-4 sm:px-2 lg:px-2">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Companies
        </h2>
      </div>

      <div
        ref={containerRef}
        className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-scroll scrollbar-hide scroll-smooth cursor-pointer"
        onMouseEnter={() => setIsPaused(true)} // Pause on hover
        onMouseLeave={() => setIsPaused(false)} // Resume when mouse leaves
      >
        {duplicated.map((testimonial, idx) => (
          <div
            key={idx}
            className="min-w-[300px] max-w-sm bg-white rounded-2xl shadow-lg p-6 flex-shrink-0"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;






































// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const sliderRef = useRef(null); // Reference to the slider

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//   };

//   const testimonials = [
//     {
//       quote: "HCLTech helped us do the integration of our acquired businesses, not only faster but also better and cheaper. They have been a trusted and transparent partner who has always been willing to travel fast!",
//       name: "Andy Nallappan",
//       position: "Former CTO and Head of Software Business Operations, Broadcom Software",
//       image: "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/Andy-Nallappan.webp",
//     },
//     {
//       quote: "Having a partner in a fast-changing environment who keeps their promises even though there’s major disruption is super valuable, and HCLTech always stood up to their promises and played a major role for us.",
//       name: "Dr. Victoria Ossadnik",
//       position: "COO, Digital and Member of the Board of Management of E.ON",
//       image: "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/Dr.-Victoria-Ossadnik.webp",
//     },
//     {
//       quote: "HCLTech has been a great partner in our digital work. Our teams have worked collaboratively and innovatively to accelerate the delivery of our amazing digital mortgage buying experience.",
//       name: "Wendy Redshaw",
//       position: "Chief Digital Information Officer, Retail Banking, NatWest Group",
//       image: "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/Wendy-Redshaw.webp",
//     },
//     {
//       quote: "HCLTech has been paramount in building digital at scale through technology and innovation. Our evolving partnership has not only been a convergence of experience and technology but has also supercharged our ecosystem to create memorable customer experiences.",
//       name: "Koos van der Veen",
//       position: "IT Director, Aegon Netherlands",
//       image: "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/Partner-Avatar-Koos-van-der-Veen.webp",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 relative py-12">
//       <div className="absolute inset-0">
//         <img
//           src="https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/light-gradient.webp"
//           alt="Testimonials Background"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="relative container mx-auto px-4">
//         <h2 className="text-center text-4xl font-light mb-8">Testimonials</h2>
//         <div className="max-w-4xl mx-auto">
//           <Slider ref={sliderRef} {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="px-4">
//                 {/* <div className="bg-white rounded-lg shadow-md p-16"> */}
//                 <div className="bg-white rounded-lg shadow-md p-16 relative"> {/* Changed padding */}

//                   <p className="text-lg italic mb-4">“{testimonial.quote}”</p>
//                   <div className="flex items-center mt-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-16 h-16 rounded-full object-cover"
//                     />
//                     <div className="ml-4">
//                       <h3 className="font-semibold">{testimonial.name}</h3>
//                       <p className="text-sm text-gray-600">{testimonial.position}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-4 left-4 flex space-x-4">
//           <button
//             className="slick-prev slick-arrow bg-blue-500 text-white rounded px-4 py-2"
//             aria-label="Previous"
//             onClick={() => sliderRef.current.slickPrev()}
//           >
//             Previous
//           </button>
//           <button
//             className="slick-next slick-arrow bg-blue-500 text-white rounded px-4 py-2"
//             aria-label="Next"
//             onClick={() => sliderRef.current.slickNext()}
//           >
//             Next
//           </button>
//         </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Navigation Buttons */}

//       </div>
//     </div>
//   );
// };

// export default Testimonials;









// components/Testimonials.js
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const sliderRef = useRef(null); // Reference to the slider

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//   };

//   const testimonials = [
//     {
//       quote:
//         "Sedra helped us streamline our operations with efficiency and precision. Their team brought incredible value, allowing us to accelerate our timelines while staying within budget. Their expertise made all the difference for us!",
//       name: "Mahmoud Abbas",
//       position: "General Manager, Alomair",
//       image: "/images/testimonials/men.jpg",
//     },
//     {
//       quote:
//         "With Sedra's support, we achieved seamless integration and improved productivity across departments. They have been an invaluable partner, and their solutions consistently exceed our expectations.",
//       name: "Mohammed Shabaan",
//       position: "Chief Financial Officer, Electro Power Systems",
//       image: "/images/testimonials/men.jpg",
//     },
//     {
//       quote:
//         "The expertise and dedication from Sedra's team have allowed us to integrate our new processes faster and more efficiently. They have been an exceptional partner, going above and beyond to meet our needs.",
//       name: "Mr. Indika",
//       position: "Chief Financial Officer, Saudi Projects & Suppliers",
//       image: "/images/testimonials/men.jpg",
//     },
//   ];

//   return (
//     <div className="from- to-yellow-300 relative bg-[#ffcc00b0] bg-gradient-to-r py-12">
//       <div className="absolute inset-0">
//         {/* <img
//           src="https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/light-gradient.webp"
//           alt="Testimonials Background"
//           className="w-full h-full object-cover"
//         /> */}
//       </div>
//       <div className="container relative mx-auto px-4">
//         <h2 className="mb-8 text-center  text-3xl text-black ">
//           {" "}
//           Voices That Inspire
//         </h2>
//         <div className="mx-auto max-w-4xl">
//           <Slider ref={sliderRef} {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="px-4">
//                 {/* <div className="bg-white shadow-lg shadow-maib rounded-lg p-16 relative"> */}
//                 <div className="relative rounded-lg bg-white p-16 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] shadow-lg shadow-black">
//                   {/* <div className="bg-white shadow-white-lg rounded-lg p-16 relative"> Changed padding */}
//                   <p className="mb-4 text-lg italic text-black">
//                     “{testimonial.quote}”
//                   </p>
//                   <div className="mt-4 flex items-center">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="h-16 w-16 rounded-full object-cover"
//                     />
//                     <div className="ml-4">
//                       <h3 className="font-semibold text-mai">
//                         {testimonial.name}
//                       </h3>
//                       <p className="text-sm text-black">
//                         {testimonial.position}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Navigation Buttons */}
//                   {/* <div className="absolute bottom-4 left-4 flex space-x-2">
//                     <button
//                       className="slick-prev slick-arrow bg-blue-500 text-white rounded px-4 py-2"
//                       aria-label="Previous"
//                       onClick={() => sliderRef.current.slickPrev()}
//                     >
//                       Previous
//                     </button>
//                     <button
//                       className="slick-next slick-arrow bg-blue-500 text-white rounded px-4 py-2"
//                       aria-label="Next"
//                       onClick={() => sliderRef.current.slickNext()}
//                     >
//                       Next
//                     </button>
//                   </div> */}
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



// const testimonialData = [
//   {
//     quote:
//       "Sedra has been an incredible technology partner, offering reliable and forward-thinking solutions for our digital growth. Their team demonstrated an outstanding understanding of our challenges and delivered tailored solutions that boosted our performance. Their commitment to innovation and quality ensured everything ran smoothly.",
//     name: "Faisal Al Qahtani",
//     role: "IT Manager at Sedra",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "Their team delivered beyond expectations — fast, reliable, and innovative! They understood our unique challenges and delivered tailored solutions. Communication was clear and proactive throughout the project. Sedra's professionalism and delivery speed truly impressed us. Highly recommended for digital growth initiatives.",
//     name: "Sara Khan",
//     role: "CTO at DigiCore",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "I’ve worked with several tech firms, but this one truly stands out for its dedication and knowledge. Sedra brings not just skills, but vision and commitment. They were responsive, professional, and very easy to collaborate with. The team handled everything with precision and care. Looking forward to many more projects together.",
//     name: "Aisha Al Malki",
//     role: "Director at CloudUnity",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "They supported us through every phase of our tech upgrade — highly recommend! From planning to execution, everything was smooth. Their solutions have brought agility and automation to our operations. We appreciated their transparency and guidance. Sedra delivered exactly what we needed — on time and beyond expectation.",
//     name: "James Holden",
//     role: "Product Manager at LogicBridge",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "Our operations became 3x faster with their IT automation solutions. Game changer. The Sedra team took the time to understand our workflow. Their process improvements saved us significant time and cost. They empowered our staff with training and support. Partnering with Sedra has transformed our internal systems.",
//     name: "Pooja Mehta",
//     role: "Head of Ops at Infinitix",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
// ];



// 19.04.2025  fresh code 

// import React, { useEffect, useRef, useState } from 'react';


// type Testimonial = {
//   name: string;
//   title: string;
//   message: string;
//   image: string;
// };


// interface Testimonial {
//   name: string;
//   title: string;
//   text: string;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: 'Jason Pittock',
//     title: 'Senior Sales Consultant at Ergeon',
//     image: 'https://i.pravatar.cc/100?img=1',
//     text: `What do I like best? The clean designs! From top to bottom they are flawless. When you communicate internally or externally to an audience, the initial impression and impact is created in the first couple of seconds. Design is paramount. Using Postcards has allowed me to send amazing emails to my customers and create that wow impact every time you open them. Cutting edge design, and user friendly are just a few attributes of this stunning email builder. Well done Designmodo!`,
//   },
//   {
//     name: 'Prashant Shah',
//     title: 'Have quite a knack for Marketing',
//     image: 'https://i.pravatar.cc/100?img=2',
//     text: `I have been using Postcards to create email templates for over a year, and it's among my favourite tools that I've recommended to several marketers since I discovered it.`,
//   },
//   {
//     name: 'Tyler McIntyre',
//     title: 'Founder at Novo Bank',
//     image: 'https://i.pravatar.cc/100?img=3',
//     text: `Postcards email builder is awesome. It allows us to design emails in minutes and know they work on all devices. It used to take our designers weeks to get them responsive with back and forth from our different teams.`,
//   },
//   {
//     name: 'Giovanni Di Rossi',
//     title: 'Designer, Marketing and Advertising',
//     image: 'https://i.pravatar.cc/100?img=4',
//     text: `Postcards offers a wide range of options for customizing email templates, and their customer support team is readily available to assist with any issues that may arise. This level of support is uncommon in today’s digital landscape, making Postcards a crucial tool for anyone who is serious about their email marketing strategy.`,
//   },
//   {
//     name: 'Francesco Cutolo',
//     title: 'Design Systems Manager at Klarna',
//     image: 'https://i.pravatar.cc/100?img=5',
//     text: `We currently use Postcard in our growth team and planning to spread it across all the organization. Templates never fail a check test on Litmus, really a great tool!`,
//   },
//   {
//     name: 'Lily Young',
//     title: 'Marketing Director at Amigos de las Americas',
//     image: 'https://i.pravatar.cc/100?img=6',
//     text: `We started using Postcards about a year ago, and since then, we've created some pretty dynamic email templates and print layouts! The interface is super easy to use and our emails got a much-needed refresh.`,
//   },
//   {
//     name: 'Michael Tchong',
//     title: 'Founder of Ubercool Innovation',
//     image: 'https://i.pravatar.cc/100?img=7',
//     text: `Postcards works the way all digital tools should work, easily and intuitively. Creating well-designed emails with Postcards is a breeze, which is quite a feat in a world of email clients.`,
//   },
//   {
//     name: 'Simon Brint',
//     title: 'Marketing Manager at VoxSmart',
//     image: 'https://i.pravatar.cc/100?img=8',
//     text: `Quite literally has revolutionised the way I do email. Saves me so much time not having to fiddle around with html for ages!`,
//   },
// ];


// const testimonials: Testimonial[] = [
//   {
//     name: 'Faisal Al Qahtani',
//     title: 'IT Manager at Sedra',
//     message:
//       'Sedra has been an incredible technology partner, offering reliable and forward-thinking solutions for our digital growth. Their team demonstrated an outstanding understanding of our challenges and delivered tailored solutions that boosted our performance. Their commitment to innovation and quality ensured everything ran smoothly.',
//     image: '/images/bms_testmonial_logo/sedra2.jpeg',
//   },
//   {
//     name: 'Sara Khan',
//     title: 'CTO at DigiCore',
//     message:
//       "Their team delivered beyond expectations — fast, reliable, and innovative! They understood our unique challenges and delivered tailored solutions. Communication was clear and proactive throughout the project. Sedra's professionalism and delivery speed truly impressed us. Highly recommended for digital growth initiatives.",
//     image: '/images/bms_testmonial_logo/sedra2.jpeg',
//   },
//   {
//     name: "Aisha Al Malki",
//     title: "Director at CloudUnity",
//     message:
//       "I've worked with several tech firms, but this one truly stands out for its dedication and knowledge. Sedra brings not just skills, but vision and commitment. They were responsive, professional, and very easy to collaborate with. The team handled everything with precision and care. Looking forward to many more projects together.",
//     image: '/images/bms_testmonial_logo/sedra2.jpeg',
//   },
//   {
//     name: "James Holden",
//     title: "Product Manager at LogicBridge",
//     message:
//       "They supported us through every phase of our tech upgrade — highly recommend! From planning to execution, everything was smooth. Their solutions have brought agility and automation to our operations. We appreciated their transparency and guidance. Sedra delivered exactly what we needed — on time and beyond expectation.",
//     image: '/images/bms_testmonial_logo/sedra2.jpeg',
//   },
// ];

// const Testimonials: React.FC = () => {



//   const marqueeRef = useRef<HTMLDivElement>(null);

//   const pauseMarquee = () => {
//     marqueeRef.current?.classList.add('paused');
//   };

//   const resumeMarquee = () => {
//     marqueeRef.current?.classList.remove('paused');
//   };










  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  // };

  // const next = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     next();
  //   }, 2000);

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  // return (
    // <section className="py-16 bg-gray-900 flex items-center justify-center overflow-hidden 2xl:py-28">
    //   <div className="max-w-3xl w-full relative text-center">
    //     <div className="flex justify-between items-center mb-8">
    //       <button
    //         aria-label="Previous"
    //         onClick={prev}
    //         className="text-gray-500 hover:text-white text-2xl z-10"
    //       >
    //         <i className="fas fa-chevron-left"></i>
    //       </button>
    //       <button
    //         aria-label="Next"
    //         onClick={next}
    //         className="text-white hover:text-gray-300 text-2xl z-30 "
    //       >
    //         <i className="fas fa-chevron-right"></i>
    //       </button>
    //     </div>

    //     {/* Slide Container */}
    //     <div className="overflow-hidden h-[320px]">
    //       <div
    //         className="flex transition-transform duration-700 ease-in-out"
    //         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    //       >
    //         {testimonials.map((testimonial, index) => (
    //           <div
    //             key={index}
    //             className="min-w-full px-4"
    //           >
    //             <h1 className="text-2xl xl:text-3xl xl:font-medium text-[#ffffff] tracking-widest mb-6">
    //               {testimonial.title}
    //             </h1>
    //             <p className="text-white text-sm md:text-lg leading-relaxed max-w-xl mx-auto text-center">
    //               {testimonial.message}
    //             </p>
    //             <div className="mt-6">
    //               <p className="font-bold text-sm text-center">{testimonial.name}</p>
    //               <p className="text-gray-400 text-xs mt-1 text-center">{testimonial.title}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Thumbnails */}
    //     <div className="flex justify-center space-x-3 mt-6">
    //       {testimonials.map((t, i) => (
    //         <img
    //           key={i}
    //           alt={`Portrait of ${t.name}`}
    //           className={`rounded cursor-pointer w-10 h-10 ${
    //             i === currentIndex ? 'opacity-100' : 'opacity-50'
    //           }`}
    //           src={t.image}
    //           onClick={() => setCurrentIndex(i)}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </section>

//     <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16 overflow-hidden">
//     <div className="text-center mb-8">
//       <h2 className="text-4xl font-bold text-gray-900">companies use <span className="text-black">Postcards</span></h2>
//       <div className="mt-4 flex justify-center gap-4 text-sm text-gray-600 flex-wrap">
//         <span className="bg-white px-3 py-1 rounded-full shadow text-red-500 font-semibold">
//           #1 Product of the week / 1,438 upvotes
//         </span>
//         <span className="bg-white px-3 py-1 rounded-full shadow text-red-600">
//           4.7 out of 5 stars / 79 reviews
//         </span>
//       </div>
//     </div>

//     <div
//       ref={marqueeRef}
//       onMouseEnter={pauseMarquee}
//       onMouseLeave={resumeMarquee}
//       className="relative w-full whitespace-nowrap overflow-x-auto scrollbar-hide animate-marquee flex gap-6"
//     >
//       {[...testimonials, ...testimonials].map((testimonial, index) => (
//         <div
//           key={index}
//           className="min-w-[300px] max-w-sm bg-white rounded-2xl shadow-md p-6 flex-shrink-0"
//         >
//           <div className="flex items-center gap-4 mb-3">
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
//               <p className="text-sm text-gray-500">{testimonial.title}</p>
//             </div>
//           </div>
//           <p className="text-sm text-gray-700">{testimonial.text}</p>
//         </div>
//       ))}
//     </div>
//   </section>


 
//   );
// };

// export default Testimonials;














// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const testimonialData = [
//   {
//     quote:
//       "Sedra has been an incredible technology partner, offering reliable and forward-thinking solutions for our digital growth. Their team demonstrated an outstanding understanding of our challenges and delivered tailored solutions that boosted our performance. Their commitment to innovation and quality ensured everything ran smoothly.",
//     name: "Faisal Al Qahtani",
//     role: "IT Manager at Sedra",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "Their team delivered beyond expectations — fast, reliable, and innovative! They understood our unique challenges and delivered tailored solutions. Communication was clear and proactive throughout the project. Sedra's professionalism and delivery speed truly impressed us. Highly recommended for digital growth initiatives.",
//     name: "Sara Khan",
//     role: "CTO at DigiCore",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "I’ve worked with several tech firms, but this one truly stands out for its dedication and knowledge. Sedra brings not just skills, but vision and commitment. They were responsive, professional, and very easy to collaborate with. The team handled everything with precision and care. Looking forward to many more projects together.",
//     name: "Aisha Al Malki",
//     role: "Director at CloudUnity",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "They supported us through every phase of our tech upgrade — highly recommend! From planning to execution, everything was smooth. Their solutions have brought agility and automation to our operations. We appreciated their transparency and guidance. Sedra delivered exactly what we needed — on time and beyond expectation.",
//     name: "James Holden",
//     role: "Product Manager at LogicBridge",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "Our operations became 3x faster with their IT automation solutions. Game changer. The Sedra team took the time to understand our workflow. Their process improvements saved us significant time and cost. They empowered our staff with training and support. Partnering with Sedra has transformed our internal systems.",
//     name: "Pooja Mehta",
//     role: "Head of Ops at Infinitix",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <div className="mx-auto mb-20 mt-20 w-full max-w-6xl px-4">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 7000 }}
//         pagination={{ clickable: true }}
//         loop={true}
//         slidesPerView={1}
//         className="w-full"
//       >
//         {testimonialData.map((t, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-black text-white md:flex-row"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.95) 45%, rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1581092334648-4b8b4d9fa0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="p-10 md:w-2/3">
//                 <p className="text-lg font-light leading-relaxed text-white md:text-2xl">
//                   <span className="text-blue-400 text-3xl">"</span>
//                   {t.quote}
//                   <span className="text-blue-400 text-3xl">"</span>
//                 </p>
//                 <p className="mt-6 font-semibold text-white">
//                   {t.name},{" "}
//                   <span className="text-sm font-normal text-gray-300">
//                     {t.role}
//                   </span>
//                 </p>
//               </div>
//               <div className="flex items-center justify-center p-10 md:w-1/3">
//                 <img
//                   src={t.logo}
//                   alt={t.name}
//                   className="max-h-16 w-auto object-contain"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;
