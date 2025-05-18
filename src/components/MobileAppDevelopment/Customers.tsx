import React from "react";

const customers = [
  {
    name: "Golden Chicken Gold",
    logo: "https://sedra.net.sa/wp-content/uploads/2024/08/1.png", // Replace with actual logo
    alt: "Golden Chicken Gold",
  },
  {
    name: "Golden Chicken Red",
    logo: "https://sedra.net.sa/wp-content/uploads/2024/08/2.png", // Replace with actual logo
    alt: "Golden Chicken Red",
  },
  {
    name: "Butt Systems",
    logo: "https://sedra.net.sa/wp-content/uploads/2024/08/3.png", // Replace with actual logo
    alt: "Butt Systems",
  },
  {
    name: "Hubrum",
    logo: "https://sedra.net.sa/wp-content/uploads/2024/08/4.png", // Replace with actual logo
    alt: "Hubrum",
  },
  {
    name: "Hoshan Group",
    logo: "https://sedra.net.sa/wp-content/uploads/2024/08/5.png", // Replace with actual logo
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
      <h3 className="mb-8 text-center text-xl font-semibold text-gray-700 md:text-2xl">
        Trusted by 150+ Happy Clients: Sedra Technologies Delivers Excellence
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
