import "../styleshets/_footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__text">
        Made with <span className="footer__heart">❤ </span> by <span></span>
        <a
          className="footer__link"
          href="https://github.com/EstLopCor"
          title="Visita mi GitHub"
          target="_blank"
        >
          EstherLopCor
        </a>
        <span></span> 2021
      </small>
    </footer>
  );
};
export default Footer;
