import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
      {/* Left Section */}
      <div className="w-full md:w-2/3 text-center md:text-left p-4">
        <h4 className="text-sm md:text-base lg:text-lg font-semibold">ABOUT COMPANY</h4>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-2">ABOUT US</h1>
        <p className="pt-6 text-sm md:text-lg lg:text-xl">
          We know how large object will act,
          <br /> but thing on a small scale
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-sm lg:text-base py-2 px-4 rounded">
          Get Quote now
        </button>
      </div>

     {/* Right Section */}
     <div className="md:order-2">
          <Image
            src={"/images/girl.png"}
            alt="About Us"
            width={600} 
            height={400} 
          />
        </div>
        </div>
  );
}

export default About;