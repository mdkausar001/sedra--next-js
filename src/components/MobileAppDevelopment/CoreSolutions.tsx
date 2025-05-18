import React from "react";

const partners = [
  {
    name: "Weya AI",
    logo: "/images/coreSolution/weya.png", // Replace with your actual logo
    alt: "Weya AI",
  },
  {
    name: "Zoho",
    logo: "/images/coreSolution/zoho.png", // Replace with your actual logo
    alt: "Zoho",
  },
  {
    name: "Odoo",
    logo: "/images/coreSolution/odoo.png", // Replace with your actual logo
    alt: "Odoo",
  },
  {
    name: "Upy",
    logo: "/images/coreSolution/supy.png", // Replace with your actual logo
    alt: "Upy",
  },
];

const solutions = [
  {
    icon: "/images/coreSolution/zoho.png", // Replace with your actual icon
    title: "Zoho Jumpstart Implementation",
    description:
      "A quick setup service that includes needs, configuration, data migration, and training on Zoho apps.",
  },
  {
    icon: "/images/coreSolution/odoo.png", // Replace with your actual icon
    title: "Odoo Jumpstart Implementation",
    description:
      "Odoo Jump-Start Implementation quickly configures modules, migrates data, and provides training for businesses to effectively use Odoo.",
  },
  {
    icon: "/images/coreSolution/coding.png", // Replace with your actual icon
    title: "Website Development",
    description:
      "A quick and visually appealing WordPress website development service, focusing on efficient setup, customization, and design to create a professional online presence.",
  },
  {
    icon: "/images/coreSolution/erp.png", // Replace with your actual icon
    title: "ERP Technical Support",
    description:
      "ERP technical support with AMC agreements for Zoho or Odoo, offering ongoing maintenance, updates, troubleshooting, and expert assistance.",
  },
  {
    icon: "/images/coreSolution/application.png", // Replace with your actual icon
    title: "Custom Built Applications",
    description:
      "Custom-built app on Zoho Creator, tailored to your business needs, offering personalized functionality, automation, and seamless integration.",
  },
];

const CoreSolutions = () => (
  <section className=" py-12">
    <div className="mx-auto max-w-7xl px-4">
      {/* Heading */}
      <h3 className="mb-6 text-center text-lg font-semibold text-gray-700">
        Partnered with Best Tech & ERP Providers
      </h3>
      {/* Partner Logos */}
      <div className="my-10 bg-white p-10 flex flex-wrap items-center justify-around gap-8">
        {partners.map((partner) => (
          <img
            key={partner.name}
            src={partner.logo}
            alt={partner.alt}
            className="h-12 object-contain"
          />
        ))}
      </div>
      {/* Solutions Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {solutions.map((sol, idx) => (
          <div
            key={sol.title}
            className="flex flex-col gap-3 rounded-xl bg-white hover:bg-gray-200 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="mb-2 flex items-center gap-3">
              <img src={sol.icon} alt="" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold text-[#23235b]">
                {sol.title}
              </span>
            </div>
            <p className="text-sm text-gray-600">{sol.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreSolutions;
