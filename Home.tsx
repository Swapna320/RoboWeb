import robotImage from "../assets/robott.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Build the Future <br />
          with Modern Web Apps
        </h1>

        <p>
          We create fast, scalable, and intelligent web applications using
          React and TypeScript.
        </p>

        <button className="hero-btn">Get Started</button>
      </div>

      <div className="hero-image">
        <img src={robotImage} alt="AI Robot" />
      </div>
    </section>
  );
};

export default Home;
