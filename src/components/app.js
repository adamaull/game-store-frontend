import React, { useState, useEffect } from "react";
import GameList from "./GameList";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaOpencart } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";

export default function App() {
  const [allGames, setAllGames] = useState([]);
  //const [allConsole, setAllConsoles] = useState([]);

  useEffect(() => {
    fetch("https://gaming-app-backend.herokuapp.com/game/get")
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

  const filterGames = (type) => {
    return allGames
      .filter((game) => game.console_used === type)
      .map((game) => <img src={game.image_url}></img>);
  };

  return (
    <div className="app">
      <div className="header-title">Game Pause</div>
      <div className="header-right">
        <div className="login">
          <BiLogIn />
        </div>
        <div className="cart">
          <FaOpencart />
        </div>
      </div>
      <Carousel
        className="carousel"
        infiniteLoop
        useKeyboardArrows
        autoPlay={false}
        showThumbs={false}
      >
        {renderAllGames()}
      </Carousel>
      <div className="console-wrapper">
        <div className="console-header">Consoles</div>
        <div className="console-name-wrapper">
          <div className="ps">Playstation {filterGames("Playstation")}</div>
          <div className="pc">Pc {filterGames("PC")}</div>
          <div className="xbox">Xbox {filterGames("Xbox")}</div>
          <div className="switch">Nintendo Switch {filterGames("Nintendo Switch")}</div>
        </div>
      </div>
    </div>
  );
}
