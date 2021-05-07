import "../styleshets/_landing.scss";
import girl from "../images/girl.png";

function Landing() {
  return (
    <div className="landing">
      <h1 className="landing__tittle">LoveFeeding</h1>
      <img
        className="landing__img"
        src={girl}
        alt="Mother breastfeding her child"
      />
      <h2 className="landing__phrase">feeding with love</h2>
      <button className="landing__btn"> Empezar</button>
    </div>
  );
}

export default Landing;
