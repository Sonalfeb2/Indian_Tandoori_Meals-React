import "./MealItemForm.css";
import Button from "../UI/Button";
import { useContext, useRef } from "react";
import  CartContext  from "../../store/Cart_Context";
const MealItemForm = props => {
  const addItemRef = useRef();
  const ctx = useContext(CartContext);
  const inputHandler = () => {
    const amount = addItemRef.current.value;
    ctx.addItem({
      id: props.mealId,
      foodName: props.foodName,
      amount: Number(amount)
    });
  };
  return (
    <div className="overlay__form">
      <label htmlFor="amount">Amount </label>
      <input
        type="number"
        min={1}
        max={5}
        step={1}
        defaultValue={0}
        ref={addItemRef}
      />
      <Button showCartHandler={inputHandler}>Add to Cart</Button>
    </div>
  );
};
export default MealItemForm;
