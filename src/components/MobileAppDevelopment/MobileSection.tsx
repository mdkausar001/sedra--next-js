import React from "react";

const features = [
  {
    title: "10+ Custom Mobile App Solutions",
    desc: "",
  },
  {
    title: "Enterprise Mobile App Development & Integrations",
    desc: "From ERP to workflow management",
  },
  {
    title: "Native and Cross-Platform Development",
    desc: "Mobile apps that work on any device",
  },
  {
    title: "20+ Top IT Experts",
    desc: "",
  },
  {
    title: "15+ Years of Experience",
    desc: "Leading in mobile development since iOS and Android launched",
  },
  {
    title: "Full Cycle Development and Support",
    desc: "",
  },
  {
    title: "Strategic Long-Term Partnerships",
    desc: "",
  },
  {
    title: "35 Fortune 1000 Clients",
    desc: "",
  },
  {
    title: "9 Offices in 7 Countries",
    desc: "",
  },
];

const MobileSection = () => (
  <section className="bg-white py-12">
    <div className="mx-auto max-w-4xl items-center p-10">
      <h2 className="mb-4 text-center text-xl font-semibold text-gray-700 md:text-center md:text-3xl">
        Why choose Intellectsoft for your mobile app development project?
      </h2>
      <p className="mb-8 text-center text-gray-700 md:text-center">
        We offer a full cycle of application design, integration and management
        services. Whether it is a consumer oriented app or a transformative
        enterprise-class solution, the company leads the entire mobile app
        development process from ideation and concept to delivery, and to
        ongoing support.
      </p>
    </div>
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-start">
      {/* Left: Text and Features */}
      <div className="max-w-xl flex-1">
        <ul className="space-y-5">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              {/* Check Icon */}
              <span className="mt-1 flex-shrink-0">
                <svg
                  className="h-6 w-6 rounded-full text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="12" fill="#e6f2ff" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 13l3 3 7-7"
                  />
                </svg>
              </span>
              {/* Text */}
              <div>
                <div className="font-medium text-gray-800">{item.title}</div>
                {item.desc && (
                  <div className="text-sm text-gray-500">{item.desc}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-end">
        <img
          src="/images/coreSolution/mobileImage.jpg"
          alt="Mobile App 1"
          className="w-60 max-w-full rounded-xl border border-gray-200 bg-white shadow-xl"
          style={{ objectFit: "cover" }}
        />
        <img
          src="/images/coreSolution/mobileImage2.jpg"
          alt="Mobile App 2"
          className="w-60 max-w-full rounded-xl border border-gray-200 bg-white shadow-xl"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  </section>
);

export default MobileSection;
