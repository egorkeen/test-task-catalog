import { NavLink } from "react-router-dom";

function Navigation () {
  return (
    <nav className="navigation">
      <NavLink
        // Прописываем условие для корректного отображения состояния ссылки
        className={({ isActive }) => isActive ? "navigation__link_active" : "navigation__link"}
        to="/"
      >
        Каталог
      </NavLink>

      <NavLink
        className={({ isActive }) => isActive ? "navigation__link_active" : "navigation__link"}
        to="/cart"
      >
        Корзина
      </NavLink>
    </nav>
  );
};

export default Navigation;