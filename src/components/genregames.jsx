import React, { useEffect } from "react";
import { FcRating } from "react-icons/fc";

const GamesByGenresId = ({ gameList, selectedGenresName }) => {
  useEffect(() => {});
  return (
    <>
      <div className="mt-10">
        <h2 className="h-10 font-bold text-[22px] text-gray-400 uppercase tracking-wider px-5 lg:px-0">
          {selectedGenresName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {gameList.map((item) => (
            <div
              className="hover:scale-105 transition-all duration-500 cursor-pointe bg-black/20 rounded-lg"
              onClick={() => getGameDetails(item.id)}
              key={item.id}
            >
              <div className="lg:w-72 h-44">
                <img
                  src={item.background_image}
                  className="w-full h-full rounded-t-lg object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <h2 className="font-bold uppercase text-xs">{item.name}</h2>
                <p className="w-60  font-bold block truncate text-gray-400 uppercase text-xs">
                  {item.playtime}&nbsp;hrs
                </p>
                <div className="flex items-center">
                  <p className="text-sm font-semibold my-3 lining-nums">
                    {item.released}
                  </p>
                  <div className="ml-auto flex cursor-pointer items-center">
                    <div>
                      <FcRating size={15} />
                    </div>
                    &nbsp;
                    <p className="text-sm font-semibold lining-nums">
                      {item.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesByGenresId;
