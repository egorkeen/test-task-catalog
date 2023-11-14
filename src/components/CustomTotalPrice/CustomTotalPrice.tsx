import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/slices/items/items.selectors";

function CustomTotalPrice () {
  // достаем числи итоговой стоймости
  const totalPrice = useSelector(selectTotalPrice);
  // форматируем его
  const customTotalPrice = totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: "RUB", minimumFractionDigits: 0 });

  return (
    <span className="cart__total-price">Итого к оплате: {customTotalPrice}</span>
  );
};

export default CustomTotalPrice;