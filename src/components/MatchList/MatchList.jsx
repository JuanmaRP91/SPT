import React from "react";
import Game from "../Game/Game";
import "../MatchList/MatchList.scss";

const MatchList = ({ matches }) => {
  return (
    <div className="match-list-container">
      <h1 className="match-list-title">Live Football World Cup Score Board</h1>
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <Game
            key={index}
            id={match.id}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            homeScore={match.homeScore}
            awayScore={match.awayScore}
          />
        ))
      ) : (
        <p className="no-match-message">No matches in progress.</p>
      )}
    </div>
  );
};

export default MatchList;
