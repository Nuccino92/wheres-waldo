import { Navigate } from "react-router-dom";

const Game = (props) => {
  return props.level === undefined ? (
    <Navigate to="/" />
  ) : (
    <div>this is the game</div>
  );
};

export default Game;
