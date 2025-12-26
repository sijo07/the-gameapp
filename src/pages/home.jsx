import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import {
  Banner,
  TrendingGames,
  GamesByGenresId,
} from "../components";

const Home = ({ selectedGenreId, selectedGenreName, searchQuery }) => {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);

  useEffect(() => {
    getAllGamesList();
    if (searchQuery && searchQuery.length > 0) {
      getGameListBySearch(searchQuery);
    } else if (selectedGenreId) {
      getGameListByGenresId(selectedGenreId);
    }
  }, [selectedGenreId, searchQuery]);

  const getGameListBySearch = (query) => {
    GlobalApi.getGameListBySearch(query).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };

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
      {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
        <div>
          <Banner gameBanner={gameListByGenres[0]} />
          <TrendingGames gameList={allGameList} />
          <GamesByGenresId
            gameList={gameListByGenres}
            selectedGenresName={selectedGenreName}
          />
        </div>
      ) : null}
    </>
  );
};

export default Home;
