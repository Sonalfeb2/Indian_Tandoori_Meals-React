import { Fragment, useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <Fragment>
      <Header showCartHandler={showCartHandler} />
      {showCart && <Cart showCartHandler={showCartHandler} />}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
export default Home;
