// components/MobileAppsWeDevelop.jsx
export default function MobileAppsWeDevelop() {
    const left = [
        {
            title: "Mobile banking apps",
            desc: "Give your customers the power of effortless financial management with mobile banking apps. Provide secure transactions, easy account management, and real-time updates, all in one place.",
        },
        {
            title: "Stock exchange apps",
            desc: "Keep your customers ahead of the market with stock exchange apps. Provide real-time stock tracking, seamless trading capabilities, and up-to-the-minute financial news.",
        },
        {
            title: "Hotel booking apps",
            desc: "Transform your customers’ travel experiences with hotel booking apps. Simplify browsing, booking, and managing hotel reservations worldwide.",
        },
        {
            title: "Fitness apps",
            desc: "Inspire your customers to reach their health goals with fitness apps. Provide personalized workout plans, activity tracking, and health insights to keep them motivated and on track.",
        },
    ];

    const right = [
        {
            title: "Ewallet / Crypto wallet apps",
            desc: "Simplify digital transactions for your customers with ewallet and crypto wallet apps. Offer secure storage and easy access to their funds and cryptocurrencies.",
        },
        {
            title: "Telemedicine apps",
            desc: "Bring healthcare to your customers’ fingertips with telemedicine apps. Offer virtual consultations, easy appointment scheduling, and access to electronic medical records from anywhere.",
        },
        {
            title: "Social media apps",
            desc: "Build vibrant communities with social media apps. Enable dynamic content sharing, seamless messaging, and robust networking features for your customers.",
        },
        {
            title: "Custom app",
            desc: "Turn your concept into reality with our mobile app solutions tailored to your industry, market trends, and unique business needs. We build custom apps of any complexity that you envision for your business.",
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl text-gray-700 md:text-3xl font-bold text-center mb-10">
                    MOBILE APPS WE DEVELOP
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-b border-gray-200">
                    {/* Left Column */}
                    <div className="divide-y divide-gray-200">
                        {left.map((item, i) => (
                            <div key={i} className="py-8 px-4">
                                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    {/* Right Column */}
                    <div className="divide-y divide-gray-200 border-l border-gray-200">
                        {right.map((item, i) => (
                            <div key={i} className="py-8 px-4">
                                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
