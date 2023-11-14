import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Item } from "../../types/Item";
import { selectChosenItems } from "../../store/slices/items/items.selectors";
import ChosenItemComponent from "./ChosenItemComponent/ChosenItemComponent";
import { useEffect } from "react";
import { fetchAllItems } from "../../store/slices/items/items.actions";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import EmptyContainer from "../EmptyContainer/EmptyContainer";
import CustomTotalPrice from "../CustomTotalPrice/CustomTotalPrice";

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
                    key={item.id}
                    item={item}
                  />))
              }
              <CustomTotalPrice />
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