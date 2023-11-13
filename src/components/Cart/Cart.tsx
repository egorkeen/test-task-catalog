import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Item } from "../../types/Item";
import { selectChosenItems, selectTotalPrice } from "../../store/items/items-selectors";
import ChosenItem from "./ChosenItem/ChosenItem";
import {useEffect} from "react";
import {fetchAllItems} from "../../store/items/items-async-actions";
import {useAppDispatch} from "../../store/hooks/useAppDispatch";

function  Cart () {
  const dispatch = useAppDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const chosenItems = useSelector(selectChosenItems);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);
  return (
    <>
      <Header />
      <section className="cart">
        <div className="cart__card-container">
          {
            chosenItems.length > 0 ?
              chosenItems.map((item: Item) =>
                (<ChosenItem
                  item={item}
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