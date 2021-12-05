import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import { useState } from "react";

function App() {
  const [chosenLevel, setChosenLevel] = useState();

  const handleClick = (level) => {
    setChosenLevel(level);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home handleClick={handleClick} />} />
          <Route path="/game" element={<Game level={chosenLevel} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
