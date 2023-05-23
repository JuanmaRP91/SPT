import React, { useState } from "react";
import MatchList from "../MatchList/MatchList";
import matches from "../Matches/Matches";
import "../Scoreboard/Scoreboard.scss";

const Scoreboard = () => {
  const [currentMatches, setCurrentMatches] = useState(matches);

  const addMatch = (homeTeam, awayTeam) => {
    const newMatch = {
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
    };

    setCurrentMatches([...currentMatches, newMatch]);
  };

  const updateScore = (index, homeScore, awayScore) => {
    setCurrentMatches((prevMatches) => {
      return prevMatches.map((match, i) =>
        i === index ? { ...match, homeScore, awayScore } : match
      );
    });
  };

  const removeMatch = (index) => {
    setCurrentMatches((prevMatches) =>
      prevMatches.filter((match, i) => i !== index)
    );
  };

  const getSummary = () => {
    const summary = [...currentMatches];
    summary.sort((a, b) => {
      const aScore = a.homeScore + a.awayScore;
      const bScore = b.homeScore + b.awayScore;
      if (aScore > bScore) {
        return -1;
      } else if (aScore < bScore) {
        return 1;
      } else {
        return currentMatches.indexOf(b) - currentMatches.indexOf(a);
      }
    });
    return summary;
  };

  const handleAddGameSubmit = (e) => {
    e.preventDefault();
    const homeTeam = e.target.homeTeam.value.trim();
    const awayTeam = e.target.awayTeam.value.trim();
    if (homeTeam && awayTeam) {
      addMatch(homeTeam, awayTeam);
      e.target.reset();
    }
  };

  const handleUpdateScoreSubmit = (e, index) => {
    e.preventDefault();
    const homeScore = parseInt(e.target.homeScore.value, 10);
    const awayScore = parseInt(e.target.awayScore.value, 10);
    if (!isNaN(homeScore) && !isNaN(awayScore)) {
      updateScore(index, homeScore, awayScore);
      e.target.reset();
    }
  };

  return (
    <div className="scoreboard-container">
      <div className="summary-container">
        <h2>Summary</h2>
        <MatchList matches={getSummary()} />
      </div>
      <div className="add-game-container">
        <h3>Add New Game</h3>
        <form onSubmit={handleAddGameSubmit}>
          <label>
            Home Team:
            <input type="text" name="homeTeam" required />
          </label>
          <label>
            Away Team:
            <input type="text" name="awayTeam" required />
          </label>
          <button className="add-game-button" type="submit">
            Add Game
          </button>
        </form>
      </div>
      {currentMatches.length > 0 && (
        <div className="update-score-container">
          <h3>Update Scores</h3>
          {currentMatches.map((match, index) => (
            <div className="match-container" key={index}>
              <p className="match-info">
                {match.homeTeam} {match.homeScore} - {match.awayScore}{" "}
                {match.awayTeam}
              </p>
              <form onSubmit={(e) => handleUpdateScoreSubmit(e, index)}>
                <label>
                  {match.homeTeam}:
                  <input type="number" name="homeScore" required />
                </label>
                <label>
                  {match.awayTeam}:
                  <input type="number" name="awayScore" required />
                </label>
                <button className="update-score-button" type="submit">
                  Update Score
                </button>
              </form>
              <button
                data-testid={match.homeTeam}
                className="remove-game-button"
                onClick={() => removeMatch(index)}
              >
                Remove Game
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Scoreboard;
