import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import GameDetails from "./pages/GameDetails";
import GenreList from "./components/genrelist";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/themecontext";

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedGenreId, setSelectedGenreId] = useState(4);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /* Open sidebar by default on large screens */
  useEffect(() => {
    setToggle(window.innerWidth > 768);
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={`${theme} ${theme == "dark" ? "bg-[#121212]" : "bg-white"
            } min-h-[100vh]`}
        >
          <Header toggle={toggle} setToggle={setToggle} setSearchQuery={setSearchQuery} />
          <div className="grid grid-cols-4 p-8 transition-all duration-300">
            <div className={`${toggle ? 'block absolute z-50 bg-white dark:bg-[#121212] w-64 h-full p-4 left-0 top-20 shadow-xl md:static md:block md:shadow-none md:p-0' : 'hidden'}`}>
              <GenreList
                genreId={(genreId) => {
                  setSelectedGenreId(genreId);
                  // On mobile, close sidebar after selection.
                  if (window.innerWidth < 768) setToggle(false);
                }}
                selectedGenresName={(name) => setSelectedGenreName(name)}
              />
            </div>
            <div className={`col-span-4 ${toggle ? 'md:col-span-3' : 'md:col-span-4'} transition-all duration-300`}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      selectedGenreId={selectedGenreId}
                      selectedGenreName={selectedGenreName}
                      searchQuery={searchQuery}
                    />
                  }
                />
                <Route path="/game/:id" element={<GameDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
