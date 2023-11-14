function Footer () {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return(
    <footer className="footer">
      <div className="footer__container">
        <a className="footer__github-link" href="https://github.com/egorkeen/test-task-catalog" target="_blank">GitHub Repository</a>
        <span className="footer__date">{currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;