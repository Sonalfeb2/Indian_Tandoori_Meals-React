import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./Cart.css";
import CartContext from "../../store/Cart_Context";
import { useContext } from "react";
const Cart = props => {
  const ctx = useContext(CartContext);
  const removeItem = (id) =>{
    ctx.removeItem(id);
  }
  return (
    <Modal onClose={props.showCartHandler}>
      <div>
        <ul>
          {ctx.items.map(item =>
            <li key={item.id}>
              {item.mealName}-{item.price} , Quantity {item.count}
              <Button CartHandler={()=>removeItem(item.id)}>Remove</Button>
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
          <Button CartHandler={props.showCartHandler}>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
