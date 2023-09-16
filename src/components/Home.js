import { useState } from "react";
import { CartContextProvider } from "../store/Cart_Context";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <CartContextProvider>
      <Header showCartHandler={showCartHandler} />
      {showCart && <Cart showCartHandler={showCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
};
export default Home;
