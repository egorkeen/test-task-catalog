function Footer () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return(
    <footer className="footer">
      <a className="footer__github-link" href="#" target="_blank">GitHub Repository</a>
      <span className="footer__date">{currentYear}</span>
    </footer>
  );
};

export default Footer;