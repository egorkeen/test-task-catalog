import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import ItemComponent from "./ItemComponent/ItemComponent";
import Footer from "../Footer/Footer";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { selectAllItems } from "../../store/items/items-selectors";
import { fetchAllItems } from "../../store/items/items-async-actions";
import EmptyContainer from "../EmptyContainer/EmptyContainer";

function  Catalog () {
  const items = useSelector(selectAllItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);

  return (
    <>
      <Header />
      <section className="catalog">
      {
        items.length > 0 ?
          <div className="catalog__items-container">
            {
              items.map((item) =>
                (<ItemComponent
                  item={item}
                />))
            }
          </div>
          : <EmptyContainer title="Каталог пуст" />
      }
      </section>
      <Footer />
    </>
  );
};

export default Catalog;