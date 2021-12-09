import React, { useState } from "react";
import { Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

const App = () => {
  const [userNumber, setUserNumber] = useState(4);

  const handleClick = (number) => {
    setUserNumber(number);
  };

  const [randomNumber, setRandomNumber] = useState();

  const alsoClick = (max) => {
    setRandomNumber(Math.floor(Math.random() * max));
  };

  const gameEngine = () => {
    if (userNumber === 0 && randomNumber === 1) return "Computer win!";
    if (userNumber === 0 && randomNumber === 2) return "You win!";
    if (userNumber === 1 && randomNumber === 0) return "You win!";
    if (userNumber === 1 && randomNumber === 2) return "Computer win!";
    if (userNumber === 2 && randomNumber === 1) return "You win!";
    if (userNumber === 2 && randomNumber === 0) return "Computer win!";
    else if (userNumber === 4) return "";
    else return "It's a tie!";
  };

  const userChoice = () => {
    if (userNumber === 0) return "Rock";
    if (userNumber === 1) return "Paper";
    if (userNumber === 2) return "Scissors";
    else return "";
  };

  const compChoice = () => {
    if (randomNumber === 0) return "Rock";
    if (randomNumber === 1) return "Paper";
    if (randomNumber === 2) return "Scissors";
    else return "";
  };

  return (
    <>
      <div>
        <Button color="teal"
          size="massive"
          data-cy="rock-button"
          onClick={() => {
            handleClick(0);
            alsoClick(3);
          }}
        >
          Rock
        </Button>
        <Button color="green"
          size="massive"
          data-cy="paper-button"
          onClick={() => {
            handleClick(1);
            alsoClick(3);
          }}
        >
          Paper
        </Button>
        <Button color="purple"
          size="massive"
          data-cy="scissors-button"
          onClick={() => {
            handleClick(2);
            alsoClick(3);
          }}
        >
          Scissors
        </Button>

        <image data-cy="rock-icon"></image>
        <image data-cy="paper-icon"></image>
        <image data-cy="scissors-icon"></image>

        <p data-cy="user-output">User: {`${userChoice()}`}</p>
        <p data-cy="computer-output">Computer: {`${compChoice()}`} </p>
        <br></br>
        <p data-cy="result-output">Result: {`${gameEngine()}`} </p>
      </div>
    </>
  );
};

export default App;
