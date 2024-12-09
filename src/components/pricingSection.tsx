// import { title } from "process";
import React from "react";

// Define the props type for the PricingCard component
interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 py-12 transition duration-300 hover:shadow-lg">
      {/* Card Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>

      {/* Price */}
      <p className="text-4xl font-bold mb-8 text-blue-600">${price}/Month</p>

      {/* Features List */}
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Call to Action Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
        Try for free
      </button>
    </div>
  );
};

const PricingSection = () => {
  const pricingData = [
    {
      title: "Free",
      price: 0, // Corrected to number
      features: ["Unlimited product updates", "1GB Cloud storage", "Email and community support"],
    },
    {
      title: "Pro",
      price: 29, // Corrected to number
      features: ["Advanced analytics", "Priority support", "10GB Cloud storage"],
    },
    {
      title: "Enterprise",
      price: 99, // Corrected to number
      features: ["Custom integrations", "Dedicated support", "Unlimited storage"],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 text-center">
      {/* Header */}
      <h4 className="text-xl text-gray-900">Pricing</h4>
      <h2 className="text-4xl font-bold text-gray-800">Simple Pricing</h2>

      <nav className="flex justify-center items-center space-x-2 text-gray-500 mt-4 text-sm">
        <a href="/" className="hover:underline">
          Home
        </a>
        <span>&gt;</span>
        <a href="/pricing" className="text-blue-600 font-medium">
          Pricing
        </a>
      </nav>

      {/* Description */}
      <div className="mt-10">
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

      {/* Trusted Companies */}
      <div className="mt-12">
        <h4 className="text-xl text-gray-900">Trusted by over 4000 big companies</h4>
      </div>
    </section>
  );
};

export default PricingSection;