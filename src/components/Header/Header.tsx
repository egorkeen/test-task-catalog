import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";

function  Header () {

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <img src={logo} alt="Логотип" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;