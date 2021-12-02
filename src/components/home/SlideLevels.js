import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getCharacters from "../../helpers/getCharacters";

const SlideLevels = ({ level, handleClick }) => {
  const [charactersIncluded, setCharactersIncluded] = useState([]);

  useEffect(() => {
    let arr = [];
    level.characters.map((char) => {
      return arr.push(getCharacters(char));
    });
    setCharactersIncluded(arr);
  }, [level.characters]);

  return (
    <Link to="/game" onClick={() => handleClick(level)}>
      <div className="slide">
        <div className="slide-image-container">
          <img src={level.map} alt="map"></img>{" "}
        </div>
        <div className="slide-level-info-container">
          <div>LEVEL {level.level} </div>
          <div className="slide-character-image-container">
            {charactersIncluded.map((char, index) => {
              return (
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                  src={`${char}`}
                  alt="characters in level"
                  key={index}
                ></img>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SlideLevels;
