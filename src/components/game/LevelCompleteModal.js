import { Link } from "react-router-dom";
import { useRef } from "react";

const LevelCompleteModal = ({ time, handleSubmitTime }) => {
  const inputName = useRef();

  const handleClick = () => {
    const { current } = inputName;
    const { value } = inputName.current;
    if (value === "") {
      return (current.className = "unfinished");
    } else current.className = "submitted";
    handleSubmitTime(time, value);
  };

  return (
    <div className="level-complete-modal">
      <div className="modal-content">
        <div>You Finished In</div>
        <h2>{time}</h2>
        <label htmlFor="name">Name</label>
        <input
          //   style={inputName.current.value === "" ? unfinished : style}
          name="name"
          ref={inputName}
          type="text"
          id="name"
        ></input>
        <Link to="/">
          <button>Back</button>
        </Link>
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};
export default LevelCompleteModal;
