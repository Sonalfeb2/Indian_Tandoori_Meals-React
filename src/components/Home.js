import { Fragment } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
export default Home;
