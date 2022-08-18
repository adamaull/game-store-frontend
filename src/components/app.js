import React, { useState, useEffect } from "react";
import GameList from "./GameList";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App() {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/game/get")
      .then((res) => res.json())
      .then((res) => setAllGames(res))
      .catch((error) =>
        console.log(
          "There was a error fetching the games from MATT AND DARIUS'S BACKEND...",
          error
        )
      );
  }, []);

  const renderAllGames = () => {
    return allGames.map((gameList) => {
      return (
        <div>
          <GameList gameList={gameList} />
        </div>
      );
    });
  };

  return (
    <div className="app">
      <div className="header-wrapper">Game Pause Shopping Cart Login Icon</div>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay={false}
        showThumbs={false}
      >
        {renderAllGames()}
      </Carousel>
    </div>
  );
}
