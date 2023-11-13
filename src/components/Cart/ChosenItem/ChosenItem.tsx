import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { Item } from "../../../types";
import { removeItem } from "../../../store/items/items-slice";

interface IProps {
  item: Item,
};

function ChosenItem ({ item }: IProps) {
  const dispatch = useAppDispatch();

  const handleRemoveClick = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <article className="chosen-item">
      <img src={item.image} className="chosen-item__image" />
      <h3 className="chosen-item__name">{item.name}</h3>
      <span className="chosen-iem__price">{item.price}</span>
      <button onClick={handleRemoveClick} className="chosen-item__remove-button">Убрать</button>
    </article>
  );
};

export default ChosenItem;