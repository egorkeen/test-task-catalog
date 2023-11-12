import card__add_button from '../../images/card/card__add-button.svg';

interface ICard {
  title: string,
  price: number,
  image: string
}

function Card ({ title, price, image }: ICard) {
  return (
    <article className="card">
      <img className="card__image" src={image} />
      <h3 className="card__title">{title}</h3>
      <span className="card__price">{price} ₽</span>
      <button className="card__add-button">
        <img className="card__add-icon" src={card__add_button} />
      </button>
    </article>
  );
};

export default Card;