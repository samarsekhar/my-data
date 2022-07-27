import { useState, useEffect } from "react";
import Home from "./Components/Home.js";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(data.top);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    fetchAnime(search);
  };
  
  const fetchAnime = async (anime_name) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${anime_name}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    setAnimeList(data.results);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-8">
                <h1 align="center">Anime Lists</h1>

      <Home
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
        animeList={animeList}
        topAnime={topAnime}
      />

      </div>
      </div>
      </div>
    </>
  );
}

export default App;