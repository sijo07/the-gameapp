import React, { useEffect, useState } from "react";

const Banner = ({ gameBanner }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="relative py-10">
        <div className="absolute bottom-0  bg-gradient-to-t w-full pb-8 from-indigo-950 to-transparent p-5 rounded-xl">
          <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
          <button className="bg-red-600 text-white px-2 p-1">Get Now</button>
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
