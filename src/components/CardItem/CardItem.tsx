import { Card } from '../../types/index';
import card__add_button from '../../images/card/card__add-button.svg';


interface ICard extends Card {};

function CardItem ({ name, price, image }: ICard) {
  return (
    <article className="card">
      <img className="card__image" src={image} />
      <h3 className="card__title">{name}</h3>
      <span className="card__price">{price} ₽</span>
      <button className="card__add-button">
        <img className="card__add-icon" src={card__add_button} />
      </button>
    </article>
  );
};

export default CardItem;