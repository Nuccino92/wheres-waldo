import { checkIfFound } from "../../helpers/checkIfFound";
import getCharacters from "../../helpers/getCharacters";

const Dropdown = ({
  active,
  event,
  characters,
  characterPicked,
  charactersFound,
}) => {
  return (
    <div
      style={
        event === null
          ? { top: 0, left: 0 }
          : {
              top: `${event.pageY}px`,
              left: `${event.pageX}px`,
            }
      }
      className={active ? "dropdown active" : "dropdown"}
    >
      {characters.map((char, index) => {
        let image = getCharacters(char);
        return (
          <img
            onClick={() => characterPicked(char)}
            id={char}
            src={image}
            alt="characters in level"
            key={index}
            className={
              checkIfFound(char, charactersFound)
                ? "dropdown-image drop-found"
                : "dropdown-image"
            }
          ></img>
        );
      })}
    </div>
  );
};

export default Dropdown;
