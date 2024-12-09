'use client'

import React from "react";

const PricingFAQs = () => {
  const faqs = [
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-4">Pricing FAQs</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics
      </p>

      {/* FAQ Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-blue-600 flex items-center">
              <span className="mr-2">&gt;</span> {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-gray-500">
          Have not got your answer?{" "}
          <a href="/support" className="text-blue-600 hover:underline">
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default PricingFAQs;