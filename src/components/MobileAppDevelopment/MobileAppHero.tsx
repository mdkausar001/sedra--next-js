import React from "react";

const MobileAppHero = () => {
  return (
    <section className="relative mt-12 flex min-h-[700px] items-center bg-black">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/mobileAppDevelopment/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4">
        <h1 className="mb-6 mt-12 text-left text-3xl font-semibold uppercase leading-tight text-white md:text-5xl">
          MOBILE APP DEVELOPMENT COMPANY
          <br />
          TRUSTED BY FORTUNE 500 BRANDS
        </h1>
        <p className="my-10 max-w-3xl text-left text-base text-white md:text-xl">
          We build scalable, robust applications designed to evolve with your
          business. Let's craft a mobile app that your customers will love and
          that will drive your business forward.
        </p>
        <div className="mx-6 my-10 flex flex-col gap-6 sm:flex-row sm:gap-4">
          <a
            href="#consultation"
            className=" md:text-md border-2 border-[#1677ff] bg-[#1677ff] px-2 py-4 text-center text-sm font-medium text-white shadow transition-colors duration-200 hover:bg-[#125fcc] sm:max-w-full md:px-10 md:py-4 md:text-xl"
          >
            BOOK A FREE CONSULTATION
          </a>
          <a
            href="#portfolio"
            className=" border-2 border-[#1677ff] bg-transparent px-8 py-4 text-center text-base font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[#1677ff]"
          >
            VIEW PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileAppHero;
