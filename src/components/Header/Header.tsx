import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import header__logo from '../../images/header/header__logo.svg';

function  Header () {

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img src={header__logo} alt="Логотип" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;