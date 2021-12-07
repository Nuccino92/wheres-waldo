import { addHighscore } from "../../firebase/highscores";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import getCharacters from "../../helpers/getCharacters";
import LevelCompleteModal from "./LevelCompleteModal";
import { checkIfFound } from "../../helpers/checkIfFound";

const GameHeader = ({ level, gameOver, charactersFound }) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [completedTime, setCompletedTime] = useState("");
  //run time is used for sorting times on leaderboard
  const [runTime, setRunTime] = useState(0);
  const minutes = useRef(null);
  const seconds = useRef(null);
  const milliseconds = useRef(null);

  useEffect(() => {
    setTimerOn(true);
  }, []);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleStop = () => {
    let thetimer =
      minutes.current.innerText +
      seconds.current.innerText +
      milliseconds.current.innerText;

    setCompletedTime(thetimer);
    setTimerOn(false);
    setCompletedTime(thetimer);
  };

  useEffect(() => {
    setRunTime(Number(completedTime.replace(/\W+/g, "")));
  }, [completedTime]);

  const handleSubmitTime = (name, time, runTime) => {
    addHighscore(level, name, time, runTime);
  };

  useEffect(() => {
    if (gameOver) {
      handleStop();
    }
  }, [gameOver]);

  return (
    <div className="game-header">
      <div>
        {level.characters.map((char, index) => {
          let image = getCharacters(char);

          return (
            <img
              src={image}
              alt="characters in level"
              className={
                checkIfFound(char, charactersFound)
                  ? "header-img found"
                  : "header-img"
              }
              key={index}
            ></img>
          );
        })}
      </div>
      <h1>Level {level.level}</h1>
      <div className="timer">
        <span ref={minutes}>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span ref={seconds}>
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span ref={milliseconds}>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <Link to="/">
        <button className="game-header-btn">Return</button>
      </Link>
      <Link to="/leaderboards">
        <button className="game-header-btn">Leaderboard</button>
      </Link>
      <LevelCompleteModal
        runTime={runTime}
        time={completedTime}
        handleSubmitTime={handleSubmitTime}
        gameOver={gameOver}
      />
    </div>
  );
};

export default GameHeader;

//https://www.code-boost.com/video/how-to-build-a-react-stopwatch-timer/
