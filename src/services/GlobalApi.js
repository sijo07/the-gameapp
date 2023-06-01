import axios from "axios";

const key = "b479890a02c446699e5fdf9da3995706";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
