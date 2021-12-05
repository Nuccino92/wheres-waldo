import Slideshow from "./Slideshow";
import Header from "../Header";

const Home = ({ handleClick }) => {
  return (
    <div className="home">
      <Header />
      <h1>Select Level</h1>
      <Slideshow handleClick={handleClick} />
    </div>
  );
};

export default Home;
