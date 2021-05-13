import "../styleshets/_landing.scss";
import girl from "../images/girl.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <section className="landing">
        <h1 className="landing__tittle">LoveFeeding</h1>
        <img
          className="landing__img"
          src={girl}
          alt="Mother breastfeding her child"
        />
        <p className="landing__phrase">feeding with love</p>
        <Link to="/main" className="landing__btn" title="go to main page">
          Empezar
        </Link>
      </section>
    </>
  );
}

export default Landing;
