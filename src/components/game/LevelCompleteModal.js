import { Link } from "react-router-dom";
import { useRef } from "react";

const LevelCompleteModal = ({ time, handleSubmitTime, runTime, gameOver }) => {
  const inputName = useRef();

  const handleClick = () => {
    const { current } = inputName;
    const { value } = inputName.current;
    if (value === "") {
      return (current.className = "unfinished");
    } else current.className = "submitted";
    handleSubmitTime(time, value, runTime);
  };

  return (
    <div
      className={
        gameOver ? "level-complete-modal active" : "level-complete-modal"
      }
    >
      <div className="modal-content">
        <div>You Finished In</div>
        <h2>{time}</h2>
        <label htmlFor="name">Enter name </label>
        <input
          name="name"
          ref={inputName}
          type="text"
          id="name"
          maxLength="20"
        ></input>
        <div className="modal-button-container">
          <Link to="/">
            <button className="modal-btn">Back</button>
          </Link>
          <button className="modal-btn" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default LevelCompleteModal;
