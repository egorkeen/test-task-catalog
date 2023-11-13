import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { Item } from "../../types/Item";
import { selectChosenItems } from "../../store/items/items-selectors";
import ChosenItem from "./ChosenItem/ChosenItem";

function  Cart () {
  const chosenItems = useSelector(selectChosenItems);
  // Подсчитываем общую стоймость добавленных в корзину товаров
  const totalPrice: number = chosenItems.reduce((sum: number, item: Item) => sum + item.price, 0);

  return (
    <>
      <Header />
      <section className="cart">
        <div className="cart__card-container">
          {
            chosenItems.length > 0 ?
              chosenItems.map((item: Item) =>
                (<ChosenItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />))
              : <h2 className="cart__no-items-title">Корзина пуста</h2>
          }
        </div>
        {chosenItems.length > 0 && <span className="cart__total-cost">Итого к оплате: {totalPrice} ₽</span>}
      </section>
      <Footer />
    </>
  );
};

export default Cart;