import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/items/items-selectors";

function TotalPrice () {
  // достаем числи итоговой стоймости
  const totalPrice = useSelector(selectTotalPrice);
  // форматируем его
  const formatedTotalPrice = totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: "RUB" });

  return (
    <span className="cart__total-price">Итого к оплате: {formatedTotalPrice}</span>
  );
};

export default TotalPrice;