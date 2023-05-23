import React from "react";
import "../Game/Game.scss";

const Game = ({ id, homeTeam, awayTeam, homeScore, awayScore }) => {
  return (
    <div data-testid={id} className="game-container">
      <h2 className="game-container__header">{`${homeTeam} vs. ${awayTeam}`}</h2>
      <p className="game-container__scores">{`${homeScore} - ${awayScore}`}</p>
    </div>
  );
};

export default Game;
