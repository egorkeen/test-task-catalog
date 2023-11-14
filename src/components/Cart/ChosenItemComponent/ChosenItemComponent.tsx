import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { Item } from "../../../types";
import { removeItem } from "../../../store/items/items-slice";

interface IProps {
  item: Item,
};

function ChosenItemComponent ({ item }: IProps) {
  const dispatch = useAppDispatch();

  const handleRemoveClick = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <article className="chosen-item">
      <img src={item.image} className="chosen-item__image" />
      <div className="chosen-item__data-container">
        <h3 className="chosen-item__name">{item.name}</h3>
        <span className="chosen-item__price">{item.price} ₽</span>
      </div>
      <button onClick={handleRemoveClick} className="chosen-item__remove-button"></button>
    </article>
  );
};

export default ChosenItemComponent;