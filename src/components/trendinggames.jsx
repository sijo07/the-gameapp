import React, { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
  useEffect(() => {}, []);
  return (
    <div className="mt-5 md:block">
      <h2 className="h-10 font-bold text-[22px] dark:text-white uppercase tracking-wider">
        Trending Games
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-5 items-center">
        {gameList.map(
          (item, index) =>
            index < 3 && (
              <div className="rounded-lg text-center group lg:hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer p-1">
                <div>
                  <img
                    className="w-[550px] h-[120px] object-cover rounded-[20px]"
                    src={item.background_image}
                    alt="img"
                  />
                  <h2 className="dark:text-white text-[12px] font-bold text-start text-gray-50 uppercase pt-3 px-5">
                    {item.name}
                  </h2>
                  <h2 className="dark:text-white text-[10px] font-semibold text-start text-gray-50 pt-1 px-6">
                    {item.playtime} hrs
                  </h2>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
