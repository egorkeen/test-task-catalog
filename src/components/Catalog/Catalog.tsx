import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Item } from '../../types/Item';
import Header from "../Header/Header";
import ItemComponent from "./ItemComponent/ItemComponent";
import Footer from "../Footer/Footer";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { selectAllItems } from "../../store/items/items-selectors";
import { fetchAllItems } from "../../store/items/items-async-actions";

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
              items.map((item) =>
                (<ItemComponent
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />))
              :
              <>
                <p></p>
                <h2 className="catalog__no-items-title">Каталог пуст</h2>
              </>

          }
        </section>
      <Footer />
    </>
  );
};

export default Catalog;