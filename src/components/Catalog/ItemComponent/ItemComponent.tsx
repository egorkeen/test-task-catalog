import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

import { Item } from '../../../types/Item';
import { addItem } from "../../../store/items/items-slice";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { selectChosenItems } from "../../../store/items/items-selectors";

// создаем интерфейс для пропсов
interface IProps {
  item: Item
}

function ItemComponent ({ item }: IProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const chosenItems = useSelector(selectChosenItems);
  // если хоть один товар, добавленный в корзину, имеет такой же id, как и у нашего компонента
  // то isChosen === true
  const isChosen = chosenItems.some((chosenItem) => chosenItem.id === item.id);

  // добавить товар в корзину
  const handleAddClick = () => {
    dispatch(addItem(item.id));
  };

  // нажатие на кнопку "оформить заказ"
  const handleOrderClick = () => {
    navigate('/cart');
  };

  return (
    <article className="item">
      <img className="item__image" src={item.image} />
      <h3 className="item__title">{item.name}</h3>
      <span className="item__price">{item.price} ₽</span>
      <div className="item__button-container">
        {/*Если карточка была добавлена в корзину, то отрендерится кнопка оформить заказ*/}
        {isChosen ?
          <button onClick={handleOrderClick} className="item__add-button">Оформить заказ</button>
          :
          <button onClick={handleAddClick} className="item__add-button">Добавить в корзину</button>
        }
      </div>
    </article>
  );
};

export default ItemComponent;