import heroImg from './banner.png'

const InteriorBanner = () => {
  return (
    <div className="">
      <div
        className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >

        {/* CENTERED BOX (mobile / tablet), LEFT BOX (laptop) */}
        <div
          className="
            absolute 
            top-1/2 
            left-1/2 md:left-0 lg:left-0
            -translate-x-1/2 md:translate-x-0
            -translate-y-1/2

            bg-[#398C1247] 
            text-white 
            p-5 sm:p-7 md:p-9 
            rounded 

            w-[90%] sm:w-[75%] md:w-[55%] lg:w-[45%]
            text-center
          "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug md:leading-normal">
            Open the Door to Better Kind of Interior
          </h2>
        </div>

      </div>
    </div>
  );
};

export default InteriorBanner;
