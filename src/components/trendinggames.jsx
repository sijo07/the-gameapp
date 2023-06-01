import React, { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
  useEffect(() => {}, []);
  return (
      <div className="mt-5 hidden md:block">
        <h2 className="h-10 font-bold text-[30px] dark:text-white uppercase tracking-wider">
          Trending Games
        </h2>
        <div className="md:grid md:grid-cols-2 gap-5 lg:grid-cols-4 mt-5">
          {gameList.map(
            (item, index) =>
              index < 4 && (
                <div className="rounded-lg text-center group lg:hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="">
                    <img
                      className="h-[160px] object-cover rounded-t-lg"
                      src={item.background_image}
                      alt="img"
                    />
                  </div>
                  <h2 className="dark:text-white text-[15px] font-bold text-gray-50 uppercase bg-black/40 py-5 rounded-b-xl">
                    {item.name}
                  </h2>
                </div>
              )
          )}
        </div>
      </div>
  );
};

export default TrendingGames;
