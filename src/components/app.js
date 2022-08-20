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

  // Current function to be built
  // Call the console used and have the games with correlating consoles render
  //   const consoleChoice = ({console_used}) => {
  //     if(console_used === "PC" && "Nintendo Switch" && "Playstation" && "Xbox"){
  //       allConsole === console_used;
  //     }

  //     if(allConsole === "Pc"){

  //     }
  //  }

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
      .map((game) => <div>{game.title}</div>);
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
          <div className="ps">Playstation Five</div>
          <div className="pc">Pc</div>
          <div className="xbox">Xbox</div>
          <div className="switch">Nintendo Switch</div>
        </div>
        <div className="game-wrapper">
          <div>{filterGames("Playstation")}</div>
          <div>{filterGames("PC")}</div>
          <div>{filterGames("Xbox")}</div>
          <div>{filterGames("Nintendo Switch")}</div>
        </div>
      </div>
    </div>
  );
}
