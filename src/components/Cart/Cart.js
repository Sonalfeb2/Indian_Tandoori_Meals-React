import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./Cart.css";
import CartContext from "../../store/Cart_Context";
import { useContext } from "react";
const Cart = props => {
  const ctx = useContext(CartContext);
  return (
    <Modal onClose={props.showCartHandler}>
      <div>
        <ul>
          {ctx.items.map(item =>
            <li>
              {item.mealName}-{item.price} , Quantity {item.count}
            </li>
          )}
        </ul>
        <hr />
        <div className="amount">
          <p className="amount_heading">Total Amount</p>
          <p>Rs. {ctx.totalAmount}</p>
        </div>
        <hr />
        <div className="open_close">
          <Button showCartHandler={props.showCartHandler}>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
