import { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvalableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvalableMeals />
    </Fragment>
  );
};
export default Meals;
