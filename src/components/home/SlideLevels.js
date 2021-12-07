import React from "react";
import { Link } from "react-router-dom";
import getCharacters from "../../helpers/getCharacters";

const SlideLevels = ({ level, handleClick }) => {
  return (
    <Link to="/game" onClick={() => handleClick(level)}>
      <div className="slide">
        <div className="slide-image-container">
          <img src={level.map} alt="map"></img>{" "}
        </div>
        <div className="slide-level-info-container">
          <div>LEVEL {level.level} </div>
          <div className="slide-character-image-container">
            {level.characters.map((char, index) => {
              let image = getCharacters(char);
              return (
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                  src={image}
                  alt="characters in level"
                  key={index}
                ></img>
              );
            })}
          </div>
          <Link className="slideshow-leaderboard-btn" to="/leaderboards">
            <div>Leaderboard</div>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default SlideLevels;
