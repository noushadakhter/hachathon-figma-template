const AboutFooter = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center p-0  md:space-y-0 lg:text-center md:text-center ml-11 mr-11">
        {/* Left div */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h6 className="text-red-500 text-sm md:text-base font-semibold m-0">
            Problems trying
          </h6>
          <p className="mt-2 text-gray-700 text-sm md:text-lg font-bold leading-relaxed m-0">
            Met minim Mollie non desert<br /> Alamo est sit cliquy dolor do <br /> met sent.
          </p>
        </div>
  
        {/* Right div */}
        <div className="w-full md:w-1/2 text-center md:text-right">
          <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed m-0">
            Problems trying to resolve the conflict between the two major realms of<br />
            Classical physics: Newtonian mechanics.
          </p>
        </div>
       
      </div>
    );
  };
  
  export default AboutFooter;
