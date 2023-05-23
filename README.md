I created 4 components

1. Matches : the data.

------------

2. Game : React Component for Displaying Game Details

Description:
Game.jsx is a React component that renders the details of a game, such as the home team and away team names, as well as their respective scores. This component is designed to be used within a larger application or UI where game information needs to be displayed.

Functions:

Rendering Game Details:

The component receives the following props: id, homeTeam, awayTeam, homeScore, and awayScore.
It utilizes these props to dynamically generate and display the game details.
The id prop is used to set a data-testid attribute on the main container element for testing purposes.
Container Structure:

The component is wrapped within a div element with the class name "game-container".
This div acts as a container for the game information.
Game Header:

Inside the main container, there is an h2 element with the class name "game-container__header".
It displays the names of the home team and away team, separated by "vs.".
The names are retrieved from the homeTeam and awayTeam props.
Scores:

Following the game header, there is a p element with the class name "game-container__scores".
It displays the scores of the home team and away team, separated by a hyphen ("-").
The scores are retrieved from the homeScore and awayScore props.

------------

3.  Matchlist : React component named "MatchList" that renders a list of football matches. It receives a prop called "matches," which is an array containing information about each match.

The component renders a container div with a title for the live football World Cup score board. Inside the container, it checks if there are any matches in progress by evaluating the length of the "matches" array.

If there are matches in progress, the component maps over the "matches" array and renders a child component called "Game" for each match. Each "Game" component receives specific match details such as ID, home team, away team, home score, and away score as props.

If there are no matches in progress, a message stating "No matches in progress" is rendered instead.

Overall, the code represents a reusable React component responsible for displaying a list of live football World Cup matches, or a message if no matches are available.

------------

4. Scoreboard : React functional component named "Scoreboard" that represents a scoreboard for tracking and managing match scores. It provides the following functionalities:

State Management:

Utilizes the React useState hook to manage the state of currentMatches, an array containing match objects.
Adding a Match:

The addMatch function is responsible for adding a new match to the currentMatches array.
It takes the home team and away team names as parameters and creates a new match object with initial scores set to 0.
The new match is appended to the currentMatches array using the setCurrentMatches function.
Updating Match Scores:

The updateScore function is used to update the scores of a specific match.
It takes the index of the match in the currentMatches array, along with the updated home and away scores.
The function maps over the currentMatches array and updates the scores for the specified match.
The updated array is then set as the new value for currentMatches using setCurrentMatches.
Removing a Match:

The removeMatch function is responsible for removing a match from the currentMatches array.
It takes the index of the match to be removed and uses the filter method to create a new array excluding the specified match.
The new array is then set as the new value for currentMatches using setCurrentMatches.
Generating Summary:

The getSummary function generates a summary of the matches based on the total scores.
It creates a copy of the currentMatches array and sorts it based on the sum of homeScore and awayScore for each match.
The sorting is done in descending order, so matches with higher scores appear first.
If two matches have the same score, their original order in the currentMatches array is maintained.
The sorted summary array is returned.
Event Handlers:

The handleAddGameSubmit function handles the submission of the form for adding a new game.
It prevents the default form submission, extracts the home and away team names from the form input fields, and calls the addMatch function.
The handleUpdateScoreSubmit function handles the submission of the form for updating match scores.
It prevents the default form submission, extracts the updated home and away scores from the form input fields, and calls the updateScore function with the corresponding match index.
JSX Rendering:

The return statement contains the JSX code that defines the structure and layout of the scoreboard component.
It consists of three main sections: summary-container, add-game-container, and update-score-container.
The summary-container displays the summary section with the list of matches rendered using the MatchList component.
The add-game-container displays a form for adding a new game, including input fields for the home and away team names.
The update-score-container is rendered only if there are existing matches, and it displays a list of matches with their current scores.
Each match in the list includes a form for updating scores and a button for removing the match.
Overall, the Scoreboard component provides a user interface for managing matches, adding new games, updating scores, and displaying a summary of matches based on their scores.