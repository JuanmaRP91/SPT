import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MatchList from "../components/MatchList/MatchList";

describe("MatchList", () => {
  const matches = [
    {
      id: 0,
      homeTeam: "Spain",
      awayTeam: "Brazil",
      homeScore: 1,
      awayScore: 1,
    },
    {
      id: 1,
      homeTeam: "Argentina",
      awayTeam: "Germany",
      homeScore: 0,
      awayScore: 2,
    },
  ];

  test("renders Game components with correct props", () => {
    render(<MatchList matches={matches} />);

    const game1 = screen.getByTestId("0");
    expect(game1).toBeInTheDocument();
    expect(game1).toHaveClass("game-container");
    expect(game1).toHaveTextContent("Spain vs. Brazil");
    expect(game1).toHaveTextContent("1 - 1");

    const game2 = screen.getByTestId("1");
    expect(game2).toBeInTheDocument();
    expect(game2).toHaveClass("game-container");
    expect(game2).toHaveTextContent("Argentina vs. Germany");
    expect(game2).toHaveTextContent("0 - 2");
  });

  test("renders the 'no matches' message when there are no matches", () => {
    render(<MatchList matches={[]} />);

    const messageElement = screen.getByText("No matches in progress.");
    expect(messageElement).toBeInTheDocument();
  });
});
