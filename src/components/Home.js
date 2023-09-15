import { Fragment } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Cart/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
export default Home;
