import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Item } from "../../types/Item";
import { selectChosenItems } from "../../store/items/items-selectors";
import ChosenItemComponent from "./ChosenItemComponent/ChosenItemComponent";
import { useEffect } from "react";
import { fetchAllItems } from "../../store/items/items-async-actions";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import EmptyContainer from "../EmptyContainer/EmptyContainer";
import TotalPrice from "../TotalPrice/TotalPrice";

function  Cart () {
  const dispatch = useAppDispatch();
  const chosenItems = useSelector(selectChosenItems);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);
  return (
    <>
      <Header />
      <section className="cart">
        {
          chosenItems.length > 0 ?
            <>
              <div className="cart__items-container">
              {
                chosenItems.map((item: Item) =>
                  (<ChosenItemComponent
                    item={item}
                  />))
              }
              <TotalPrice />
            </div>
            </>
            : <EmptyContainer title="Корзина Пуста" />
        }
      </section>
      <Footer />
    </>
  );
};

export default Cart;