import getCharacters from "../../helpers/getCharacters";

const Dropdown = ({ active, event, characters, characterPicked }) => {
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
            style={imageStyle}
            key={index}
          ></img>
        );
      })}
    </div>
  );
};

const imageStyle = {
  height: "40px",
  width: "40px",
  cursor: "pointer",
  border: "1px solid red",
};

export default Dropdown;
