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
      <div className="mt- mr-10 bg-black/10">
        <h2 className="text-[30px] font-bold capitalize text-gray-400 pb-5 px-3">
          genres
        </h2>
        {genreList.map((item, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              genreId(item.id);
              selectedGenresName(item.name);
            }}
            className={`flex gap-2 items-center cursor-pointer group  transition-all duration-300 rounded-lg p-3 ${
              activeIndex == index ? "dark:bg-red-700 " : null
            }`}
          >
            <img
              src={item.image_background}
              className={`w-[40px] h-[40px] 
              object-cover rounded-lg group-hover:scale-110  
              transition-all duration-300 ${
                activeIndex == index ? "scale-110" : null
              } `}
            />
            <h3
              className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
                activeIndex == index ? "font-bold" : null
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
