import Slideshow from "./Slideshow";

const Home = ({ handleClick }) => {
  return (
    <div className="home">
      <h1>Select Level</h1>
      <Slideshow handleClick={handleClick} />
    </div>
  );
};

export default Home;
