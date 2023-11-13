import { Item } from '../../../types/Item';
import { toggleItem } from "../../../store/items/items-slice";
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";

function ItemComponent (props: Item) {
  const dispatch = useAppDispatch();

  const handleToggleClick = () => {
    dispatch(toggleItem(props.id));
  };

  return (
    <article className="item">
      <img className="item__image" src={props.image} />
      <h3 className="item__title">{props.name}</h3>
      <span className="item__price">{props.price} ₽</span>
      <button onClick={handleToggleClick} className="item__add-button">Click</button>
    </article>
  );
};

export default ItemComponent;