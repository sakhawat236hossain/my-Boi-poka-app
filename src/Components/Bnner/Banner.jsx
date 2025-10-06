import React from "react";
import BannarImg from'../../assets/pngwing.png'
const Banner = () => {
  return (
    <div className="w-full mt-5 ">
      <div className="bg-[#C7B5B1] min-h-[400px] flex flex-col-reverse lg:flex-row-reverse items-center justify-between p-6 sm:p-10 lg:p-16 gap-8 lg:gap-20 rounded-2xl">
        {/* Image */}
        <img
          src={BannarImg}
          className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[380px] rounded-lg shadow-2xl"
          alt="Books"
        />

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Books to freshen up <br className="hidden sm:block" /> your
            bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] mt-6 px-6 py-2 text-white text-base sm:text-lg">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
