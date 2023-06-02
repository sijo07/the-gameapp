import React, { useEffect, useState } from "react";

const Banner = ({ gameBanner }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="relative py-10">
        <div className="absolute bottom-10  bg-gradient-to-t w-full pb-8 from-black/100 to-trasparent p-5 rounded-xl">
          <h2 className="text-[24px] text-white font-bold">
            {gameBanner.name}
          </h2>
          <button className="bg-red-600 hover:bg-red-700 p-2 px-3 text-white font-bold text-sm rounded-full capitalize">
            get now
          </button>
        </div>
        <img
          src={gameBanner.background_image}
          className=" h-[170px] md:h-[320px] w-full object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default Banner;
