import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectChosenItems } from "../../store/items/items-selectors";
import basket from "../../images/basket.svg";

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

      <NavLink className="navigation__basket-link" to="/cart">
        <img className="navigation__basket" src={basket} alt="Корзина"/>
        {/* динамическое количество товаров*/}
        {chosenItems.length > 0 && <span className="navigation__items-quantity">{chosenItems.length}</span>}
      </NavLink>
    </nav>
  );
};

export default Navigation;