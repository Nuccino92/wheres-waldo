import { useEffect, useState } from "react";
import { highscores } from "../firebase/highscores";
import { sortHighscores } from "../helpers/sortHighscores";
import { Link } from "react-router-dom";
import Header from "./Header";

const Leaderboards = ({ level }) => {
  const [highscoreList, setHighscoreList] = useState([]);
  const [sortedList, setSortedList] = useState([]);

  // sets the level to 1 upon refreshes
  let leaderboardLevel;
  level === undefined
    ? (leaderboardLevel = 1)
    : (leaderboardLevel = level.level);

  useEffect(() => {
    highscores().then((response) => {
      response.map((res) => {
        if (res.level === leaderboardLevel) {
          setHighscoreList((prev) => [...prev, res]);
        }
      });
    });
  }, [leaderboardLevel]);

  useEffect(() => {
    setSortedList(sortHighscores(highscoreList));
  }, [highscoreList]);

  return (
    <div className="leaderboards">
      <div className="background-img"></div>
      <Header />
      <div className="leaderboards-title-container">
        <h2>Level {leaderboardLevel}</h2> <h1>Leaderboards</h1>
        <Link className="leaderboards-title-btn" to="/">
          <button>Return</button>
        </Link>
      </div>

      <div className="span-container">
        <span>rank</span>
        <span>name</span>
        <span>time</span>
      </div>
      {sortedList.map((scores, index) => {
        return (
          <div key={index} className="leaderboards-list">
            <div className="leaderboards-info-container">
              <div>{index + 1}.</div>
              <div>{scores.name}</div>
              <div
                style={index < 3 ? { color: "#2ADD21" } : { color: "black" }}
              >
                {scores.time}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboards;
