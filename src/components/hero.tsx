import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 text-center">
      {/* Header */}
      <h4 className="text-xl text-gray-900">What we do</h4>
      <h2 className="text-4xl font-bold text-gray-800">Innovation tailored for you</h2>

      {/* Breadcrumb Navigation */}
      <nav className="flex justify-center items-center space-x-2 text-black mt-4 text-sm">
        <Link href="/Hero" className="hover:underline">
          Home
        </Link>
        <span>&gt;</span>
        <Link href="/AboutTeam" className="text-gray-500 font-medium">
          Team
        </Link>
      </nav>
      <br />

      {/* Responsive Images Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Left Image */}
        <div className="lg:w-1/2">
          <Image
            src="/images/sandelgirl.PNG"
            alt="hero left"
            width={700}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <Image
            src="/images/4girlpic.PNG"
            alt="hero right"
            width={700}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;