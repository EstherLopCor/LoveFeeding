import "../styleshets/_header.scss";
import logo from "../images/logo.jpg";

function Header() {
  return (
    <div className="header">
      <img className="header__img" src={logo} alt="Love feeding" />
    </div>
  );
}
export default Header;
