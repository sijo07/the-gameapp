import axios from "axios";

const key = "b479890a02c446699e5fdf9da3995706";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key + "&dates=2024-01-01,2030-12-31&ordering=-added");
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);
const getGameById = (id) => axiosCreate.get("/games/" + id + "?key=" + key);
const getGameListBySearch = (gameName) => axiosCreate.get("/games?key=" + key + "&search=" + gameName);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
  getGameById,
  getGameListBySearch
};
