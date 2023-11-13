import { Item } from "../../../types";

function ChosenItem (props: Item) {
  return (
    <article className="chosen-item">
      <img src={props.image} className="chosen-item__image" />
      <h3 className="chosen-item__name">{props.name}</h3>
      <span className="chosen-iem__price">{props.price}</span>
      <button className="chosen-item__remove-button">Убрать</button>
    </article>
  );
};

export default ChosenItem;