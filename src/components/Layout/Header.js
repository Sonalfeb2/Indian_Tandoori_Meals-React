import { Fragment } from "react";
import "./Header.css";
import CartBtn from "./HeaderCartButton";
import MealImg from "../../assets/headerMeal.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <div className="logo">Indian Tandoori Meals</div>
        <div className="header-right">
          <CartBtn showCartHandler ={props.showCartHandler}/>
        </div>
      </header>
      <div className="main-image">
        <img src={MealImg} alt="A table full of delecious food" />
      </div>
    </Fragment>
  );
};
export default Header;
