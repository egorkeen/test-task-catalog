import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function  Cart () {
  return (
    <>
      <Header />
      <section className="cart">
        <div className="cart__card-container">

        </div>
        <span className="cart__total-cost">30 000</span>
      </section>
      <Footer />
    </>
  );
};

export default Cart;