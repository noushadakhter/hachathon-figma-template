import Image from "next/image";


function AchivementAbout() {
    return (
      <section className="stats py-8 px-4 sm:py-12 sm:px-8 lg:px-16 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="stat">
            <div className="number text-4xl font-bold text-black">15K</div>
            <p className="text-gray-500 text-base">Happy Customers</p>
          </div>
          <div className="stat">
            <div className="number text-4xl font-bold text-black">150K</div>
            <p className="text-gray-500 text-base">Monthly Visitors</p>
          </div>
          <div className="stat">
            <div className="number text-4xl font-bold text-black">15</div>
            <p className="text-gray-500 text-base">Countries WorldWide</p>
          </div>
          <div className="stat">
            <div className="number text-4xl font-bold text-black">100+</div>
            <p className="text-gray-500 text-base">Top Partners</p>
          </div>
       
</div>
        {/* Image Section */}
      <div className="mt-8">
        <Image
          src="/images/video.PNG" // Replace with the actual image path
          alt="video"
          width={1200} // Set the desired width
          height={600} // Set the desired height
          className="rounded-md mx-auto"
        />
      </div>
      </section>
      
    );
  }
  
  export default AchivementAbout;
  