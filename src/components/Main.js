import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../styleshets/_main.scss";
import Footer from "./Footer";
import Header from "./Header";

function Main() {
  return (
    <>
      <Header />
      <section className="main">
        <Link to="/register" className="main__btn" title="go to main page">
          Registro
        </Link>

        <Link to="/children" className="main__btn" title="go to main page">
          Niñ@s
        </Link>

        <Link to="/start" className="main__btn" title="go to main page">
          Empezar
        </Link>
      </section>
      <Footer />
    </>
  );
}
export default Main;
