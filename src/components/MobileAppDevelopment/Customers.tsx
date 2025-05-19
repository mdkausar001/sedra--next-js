import React from "react";

const customers = [
  {
    name: "Afrina",
    logo: "/images/customers/afrina.jpg", // Replace with actual logo
    alt: "Golden Chicken Gold",
  },
  {
    name: "Millennium",
    logo: "/images/customers/Millennium.jpg", // Replace with actual logo
    alt: "Golden Chicken Red",
  },
  {
    name: "Apolia",
    logo: "/images/customers/opolia.jpeg", // Replace with actual logo
    alt: "Butt Systems",
  },
  {
    name: "Procterandgamble",
    logo: "/images/customers/pg.jpg", // Replace with actual logo
    alt: "Procterandgamble",
  },
  {
    name: "ProArt",
    logo: "/images/customers/proart.png", // Replace with actual logo
    alt: "Hoshan Group",
  },
  {
    name: "Red Art",
    logo: "/images/customers/redsea.png", // Replace with actual logo
    alt: "Hoshan Group",
  },
  {
    name: "Tatweer",
    logo: "/images/customers/tatweer.jpeg", // Replace with actual logo
    alt: "Hoshan Group",
  },
];

const Customers = () => (
  <section className="bg-white py-12">
    <div className="mx-auto max-w-7xl px-4">
      {/* Subtitle */}
      <div className="mb-2 text-center text-sm font-semibold tracking-widest text-cyan-500">
        OUR CUSTOMERS
      </div>
      {/* Main Heading */}
      <h3 className="my-8 text-center text-xl font-semibold text-gray-700 md:text-2xl">
        Trusted by 10+ Happy Clients: Sedra Technologies Delivers Excellence
      </h3>
      {/* Logos Row */}
      <div className="flex flex-wrap items-center justify-around gap-12">
        {customers.map((customer) => (
          <img
            key={customer.name}
            src={customer.logo}
            alt={customer.alt}
            className="h-20 object-contain"
            style={{ maxWidth: 180 }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Customers;
