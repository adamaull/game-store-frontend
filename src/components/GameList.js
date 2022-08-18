import React from "react";

const GameList = (props) => {
    return (
        <div>
            {props.gameList.title}
            {props.gameList.genre}
            {props.gameList.price}
            {props.gameList.console_used}
            {props.gameList.rating}
            {props.gameList.description}
            {props.gameList.image_url}
        </div>
    )
}

export default GameList;