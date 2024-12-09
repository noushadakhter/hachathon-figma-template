"use client";
import React from "react";
import Image from "next/image";

function ContactPage() {
  return (
    <div className="container mx-auto py-16 flex flex-col-reverse md:flex-row">
      {/* Contact form on the left */}
      <div className="md:w-1/2 md:mr-8">
        <div className="h-auto flex flex-col justify-evenly p-4">
          {/* Heading and Contact Info */}
          <div className="pl-3">
            <h4 className="font-bold text-black mb-8">CONTACT US</h4>
            <h1 className="font-bold text-black text-4xl">
              Get in touch <br /> today!
            </h1>
            <p>
              We know how large objects will act, <br />
              but things on a small scale
            </p>
            <h3 className="font-bold text-black text-lg">Phone: +451215215</h3>
            <h3 className="font-bold text-black text-lg">Fax: +451215215</h3>
          </div>
        </div>
      </div>

      {/* Image on the right */}
      <div className="md:w-1/2">
        <Image
          src="/images/family.PNG"
          alt="Contact Image"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default ContactPage;