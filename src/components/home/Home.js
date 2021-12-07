import Slideshow from "./Slideshow";
import Header from "../Header";

const Home = ({ handleClick }) => {
  return (
    <div className="home">
      <div className="background-img"></div>
      <Header />
      <h1>Select Level</h1>
      <Slideshow handleClick={handleClick} />
    </div>
  );
};

export default Home;
