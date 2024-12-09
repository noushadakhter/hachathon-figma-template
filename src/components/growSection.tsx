import Image from "next/image";

const GrowSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-blue-500 text-white py-12 px-6 sm:px-12 lg:px-20">
      {/* Text Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
        <h4 className="uppercase text-sm font-medium tracking-wider">Work With Us</h4>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4">Now Lets Grow Yours</h2>
        <p className="text-white/80 mt-4">
          The gradual accumulation of information about atomic and small-scale behavior 
          during the first quarter of the 20th.
        </p>
        <button className="mt-6 px-6 py-2 border border-white rounded-md hover:bg-white hover:text-blue-500 transition">
          Button
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <Image
          src="/images/growpic.PNG" 
          alt="Grow Yours"
          width={500} 
          height={500} 
          className="hidden md:block lg:w-full "
        />
      </div>
    </section>
  );
};

export default GrowSection;