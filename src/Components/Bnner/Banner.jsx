import React from "react";
import BannarImg from '../../assets/pngwing.png';

const Banner = () => {
  return (
    <div className="md:w-full mt-5 overflow-x-hidden px-15">
      <div className="bg-[#C7B5B1] min-h-[400px] flex flex-col-reverse md:flex-row-reverse items-center justify-between p-4 sm:p-6 md:p-10 lg:p-16 gap-6 md:gap-12 lg:gap-20 rounded-2xl">

        {/* Image */}
        <img
          src={BannarImg}
          className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[380px] rounded-lg shadow-2xl"
          alt="Books"
        />

        {/* Text Content */}
        <div className="text-center md:text-left px-2 md:px-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            Books to freshen up <br className="hidden sm:block" /> your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 text-white text-sm sm:text-base md:text-lg">
            View The List
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
