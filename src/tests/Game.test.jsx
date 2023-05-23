import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "../components/Game/Game";

const matches = [
  { homeTeam: "Mexico", awayTeam: "Canada", homeScore: 0, awayScore: 5 },
  { homeTeam: "Spain", awayTeam: "Brazil", homeScore: 10, awayScore: 2 },
  { homeTeam: "Germany", awayTeam: "France", homeScore: 2, awayScore: 2 },
];

describe("Game Component", () => {
  it("renders the game component correctly", () => {
    render(
      <Game
        id={1}
        homeTeam={matches[0].homeTeam}
        awayTeam={matches[0].awayTeam}
        homeScore={matches[0].homeScore}
        awayScore={matches[0].awayScore}
      />
    );

    const gameContainer = screen.getByTestId(1);
    expect(gameContainer).toBeInTheDocument();
    expect(gameContainer).toHaveClass("game-container");
  });
});
