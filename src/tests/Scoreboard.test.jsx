import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Scoreboard from "../components/Scoreboard/Scoreboard";
import MatchList from "../components/MatchList/MatchList";

describe("Scoreboard component", () => {
  test("renders summary and add game containers", () => {
    render(<Scoreboard />);
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(screen.getByText("Add New Game")).toBeInTheDocument();
    expect(screen.getByLabelText("Home Team:")).toBeInTheDocument();
    expect(screen.getByLabelText("Away Team:")).toBeInTheDocument();
    expect(screen.getByText("Add Game")).toBeInTheDocument();
  });

  test("checks the available matches on scoreboard", () => {
    const matches = [
      { homeTeam: "Brazil", awayTeam: "Argentina", homeScore: 0, awayScore: 5 },
    ];
    render(
      <>
        <Scoreboard />
        <MatchList matches={matches} />
      </>
    );
    expect(screen.getByText("Brazil vs. Argentina")).toBeInTheDocument();
  });

  test("removes a match", () => {
    render(<Scoreboard />);
    const mexicoCanadaMatch = screen.getByText(/Mexico vs. Canada/i);
    expect(mexicoCanadaMatch).toBeInTheDocument();
    const removeButton = screen.getByTestId("Mexico-remove-button");
    fireEvent.click(removeButton);
    expect(screen.queryByText(/Mexico vs. Canada/i)).not.toBeInTheDocument();
  });

  test("adds a new game and updates the score", () => {
    render(<Scoreboard />);
    const homeTeamInput = screen.getByLabelText("Home Team:");
    const awayTeamInput = screen.getByLabelText("Away Team:");
    const addGameButton = screen.getByText("Add Game");

    // Add a new game
    fireEvent.change(homeTeamInput, { target: { value: "Germany" } });
    fireEvent.change(awayTeamInput, { target: { value: "France" } });
    fireEvent.click(addGameButton);

    // Check if the new game is added
    expect(screen.getByText("Germany vs. France")).toBeInTheDocument();

    // Check if the score is updated
    expect(screen.getByText(/Germany 2 - 1 France/i)).toBeInTheDocument();
  });
});
