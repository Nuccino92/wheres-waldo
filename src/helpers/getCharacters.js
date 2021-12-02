import waldo from "../assets/characters/waldo.jpg";
import odlaw from "../assets/characters/odlaw.jpg";
import wenda from "../assets/characters/wenda.jpg";
import wizard from "../assets/characters/wizard-whitebeard.jpg";

const getCharacters = (character) => {
  switch (character) {
    case "waldo":
      return waldo;
    case "odlaw":
      return odlaw;
    case "wenda":
      return wenda;
    case "wizard":
      return wizard;
    default:
      break;
  }
};

export default getCharacters;
