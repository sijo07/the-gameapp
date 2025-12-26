import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

const GenreList = ({ genreId, selectedGenresName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <>
      <div className="mt- mr-10 rounded-lg">
        <h2 className="text-[30px] font-bold capitalize text-gray-400 pb-5 px-3">
          genres
        </h2>
        {genreList.map((item, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              if (genreId) genreId(item.id);
              if (selectedGenresName) selectedGenresName(item.name);
            }}
            className={`flex gap-3 items-center cursor-pointer group transition-all duration-300 rounded-xl p-3 mb-3 
            ${activeIndex == index
                ? "bg-gradient-to-r from-red-600 to-orange-600 shadow-lg scale-105"
                : "hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
          >
            <img
              src={item.image_background}
              className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 shadow-sm
              ${activeIndex == index ? "scale-105 ring-2 ring-white" : null
                }`}
            />
            <h3
              className={`text-[19px] transition-all ease-out duration-300 
              ${activeIndex == index
                  ? "text-white font-bold"
                  : "text-black dark:text-white group-hover:font-semibold"
                }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreList;
