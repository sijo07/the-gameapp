import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import {
  Banner,
  GenreList,
  TrendingGames,
  GamesByGenresId
} from "../components";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };
  const getGameListByGenresId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };
  return (
    <>
      <div className="grid grid-cols-4 p-8">
        <div className="hidden md:block">
          <GenreList
            genreId={(genreId) => getGameListByGenresId(genreId)}
            selectedGenresName={(name) => setSelectedGenresName(name)}
          />
        </div>
        <div className="col-span-4 md:col-span-3">
          {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
            <div>
              <TrendingGames gameList={allGameList} />
              <Banner gameBanner={gameListByGenres[0]} />
              <GamesByGenresId
                gameList={gameListByGenres}
                selectedGenresName={selectedGenresName}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
