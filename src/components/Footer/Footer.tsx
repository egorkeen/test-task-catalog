function Footer () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return(
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__github-link" href="#" target="_blank">GitHub Repository</a>
        <span className="footer__date">{currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;