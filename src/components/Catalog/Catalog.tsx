import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

function  Catalog () {
  return (
    <>
      <Header />
        <section className="catalog">
          <Card
            title="Браслет Xiaomi Mi Band 4"
            image="https://appevent.ru/devtasks/img/catalog_item_1.jpg"
            price={1790}
          />
          <Card
            title="Умная колонка Apple HomePod"
            image="https://appevent.ru/devtasks/img/catalog_item_2.jpg"
            price={29490}
          />
          <Card
            title="Робот-пылесос Xiaomi Mijia Sweeping Vacuum Cleaner 1C"
            image="https://appevent.ru/devtasks/img/catalog_item_3.jpg"
            price={15000}
          />
        </section>
      <Footer />
    </>
  );
};

export default Catalog;