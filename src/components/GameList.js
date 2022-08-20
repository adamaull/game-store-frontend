import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const GameList = (props) => {
  return (
    <div>
      <Flippy flipOnHover={false} flipDirection="horizontal">
        <FrontSide>
          <img className="image" src={props.gameList.image_url} alt="pokemon" />
        </FrontSide>
        <BackSide>
          <div className="carousel-data">
            <div>{props.gameList.title}</div>
            <div>{props.gameList.genre}</div>
            <div>{props.gameList.price}</div>
            <div>{props.gameList.console_used}</div>
            <div>{props.gameList.rating}</div>
            <div>{props.gameList.description}</div>
          </div>
        </BackSide>
      </Flippy>
    </div>
  );
};

export default GameList;
