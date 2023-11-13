import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function  Header () {

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <h2>logo</h2>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;