import { useEffect, useState } from "react";
import { Card } from '../../types/index';
import Header from "../Header/Header";
import CardItem from "../CardItem/CardItem";
import Footer from "../Footer/Footer";

function  Catalog () {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetch('https://appevent.ru/dev/task1/catalog')
      .then((res) => res.json())
      .then((data) => {
        const newCards: Card[] = data.items;
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
        <section className="catalog">
          {
            cards.length > 0 ?
              cards.map((card) => (<CardItem id={card.id} name={card.name} price={card.price} image={card.image} />))
              : <h2 className="catalog__no-cards-title">Empty</h2>
          }
        </section>
      <Footer />
    </>
  );
};

export default Catalog;