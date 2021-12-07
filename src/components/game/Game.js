import GameHeader from "./GameHeader";
import Dropdown from "./Dropdown";
import { Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Game = ({ level }) => {
  const map = useRef();
  const [xClicked, setxClicked] = useState();
  const [yClicked, setyClicked] = useState();
  const [dropdown, setDropdown] = useState(false);
  const [event, setEvent] = useState(null);
  const [chosenCharacter, setChosenCharacter] = useState(undefined);
  const [charactersFound, setCharactersFound] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (e) => {
    e.target.id === "map" ? setCoordinates(e) : setDropdown(false);
  };

  const dropdownCharacterPicked = (char) => {
    setChosenCharacter(char);
  };

  useEffect(() => {
    checkIfFound();
    setChosenCharacter(undefined);
  }, [chosenCharacter]);

  const setCoordinates = (e) => {
    setxClicked((e.nativeEvent.offsetX / e.target.offsetWidth) * 100);
    setyClicked((e.nativeEvent.offsetY / e.target.offsetHeight) * 100);
    setEvent(e);
    setDropdown(true);
  };

  const checkIfFound = () => {
    //if statement prevents gamebreak on page refresh from /game page
    if (chosenCharacter === undefined) return;
    let { x } = level[chosenCharacter];
    let { y } = level[chosenCharacter];

    if (
      x > xClicked + 2.5 ||
      x < xClicked - 2.5 ||
      y > yClicked + 2.5 ||
      y < yClicked - 2.5
    ) {
      return;
    } else {
      setCharactersFound((prev) => [...prev, chosenCharacter]);
    }
  };

  const foundAll = () => {
    setGameOver(true);
  };

  useEffect(() => {
    const found = charactersFound.sort().toString();
    //if statement prevents gamebreak on page refresh from /game page
    if (charactersFound.length === 0) {
      return;
    } else if (found === [...level.characters].sort().toString()) {
      foundAll();
    }
  }, [charactersFound]);

  return level === undefined ? (
    <Navigate to="/" />
  ) : (
    <div className="game" onClick={(e) => handleClick(e)}>
      <Dropdown
        characterPicked={dropdownCharacterPicked}
        characters={level.characters}
        event={event}
        active={dropdown}
        charactersFound={charactersFound}
      />
      <GameHeader
        charactersFound={charactersFound}
        level={level}
        gameOver={gameOver}
      />
      <div className="level-map-container">
        <img id={"map"} ref={map} src={level.map} alt="map of level"></img>
      </div>
    </div>
  );
};

export default Game;
