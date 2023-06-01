import React, { useEffect } from "react";

const GamesByGenresId = ({ gameList, selectedGenresName }) => {
  useEffect(() => {});
  return (
    <>
      <div>
        <h2 className="font-bold text-[30px] dark:text-white mt-5 capitalize">
          {selectedGenresName} games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameList.map((item) => (
            <div
              className="pb-14  p-4  h-full hover:scale-110 transition-all duration-300 cursor-pointer"
              onClick={() => getGameDetails(item.id)}
              key={item.id}
            >
              <img
                src={item.background_image}
                className="w-full h-[80%] rounded-xl object-cover"
              />
              <h2 className="text-[18px] p-1 text-white font-bold">
                {item.name}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-gray-200 text-teal-900 font-medium ">
                  {item.metacritic}
                </span>
              </h2>
              <h2 className="flex items-centertext-gray-500 dark:text-gray-300">
                ⭐{item.rating}/5&nbsp; ❤️
                {item.suggestions_count}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesByGenresId;
