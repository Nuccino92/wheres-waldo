import React, { useState, useRef, useEffect } from "react";
import SlideLevels from "./SlideLevels";
import { levels } from "../../firebase/levelData";

const delay = 5000;

function Slideshow({ handleClick }) {
  const [levelData, setlevelData] = useState([]);

  useEffect(() => {
    levels().then((res) => setlevelData(res));
  }, []);

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === levelData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, levelData]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {levelData.map((level, index) => (
          <SlideLevels level={level} key={index} handleClick={handleClick} />
        ))}
      </div>

      <div className="slideshowDots">
        {levelData.map((unused, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
