import React, { useEffect, useState } from "react";
import PlayAgain from "./PlayAgain";
import PlayNumber from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";
import utils from "../math-utils";

const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumber, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNumber.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNumbers(newCandidateNums);
    } else {
      const newAvailableNums = availableNumber.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNumbers(newAvailableNums);
      setCandidateNumbers([]);
    }
  };
  return {
    stars,
    availableNumber,
    candidateNumbers,
    secondsLeft,
    setGameState,
  };
};

const Game = (props) => {
  const {
    stars,
    availableNumber,
    candidateNumbers,
    secondsLeft,
    setGameState,
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;

  const gameStatus =
    availableNumber.length === 0
      ? "won"
      : secondsLeft === 0
      ? "lost"
      : "active";

  const numberStatus = (number) => {
    if (!availableNumber.includes(number)) {
      return "used";
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }
    const newCandidateNums =
      currentStatus === "available"
        ? candidateNumbers.concat(number)
        : candidateNumbers.filter((cn) => cn !== number);

    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              key={number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
