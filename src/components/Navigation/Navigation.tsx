import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectChosenItems } from "../../store/items/items-selectors";

function Navigation () {
  // здесь добавленные товары нужны для подсчёта количества товаров
  const chosenItems = useSelector(selectChosenItems);
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
        Корзина [{chosenItems.length}]
      </NavLink>
    </nav>
  );
};

export default Navigation;