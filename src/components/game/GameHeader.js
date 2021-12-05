// import { addHighscore } from "../../firebase/levelData";
import { addHighscore } from "../../firebase/config";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import getCharacters from "../../helpers/getCharacters";
import LevelCompleteModal from "./LevelCompleteModal";

const GameHeader = ({ level, gameOver }) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [completedTime, setCompletedTime] = useState("");
  // const [highscoreData, setHighscoreData] = useState();
  const minutes = useRef(null);
  const seconds = useRef(null);
  const milliseconds = useRef(null);

  useEffect(() => {
    setTimerOn(true);
  }, []);

  useEffect(() => {
    console.log(level.highscores);
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

  const handleSubmitTime = (name, time) => {
    addHighscore(level, name, time);
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
              className="header-img"
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
        <button>Return</button>
      </Link>
      <LevelCompleteModal
        time={completedTime}
        handleSubmitTime={handleSubmitTime}
      />
    </div>
  );
};

export default GameHeader;

//https://www.code-boost.com/video/how-to-build-a-react-stopwatch-timer/
