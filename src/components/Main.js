import "../styleshets/_main.scss";
import logo from "../images/logo.jpg";

function Main() {
  return (
    <div className="main">
      <img className="main__img" src={logo} alt="Love feeding" />
    </div>
  );
}
export default Main;
