import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./Cart.css";
const Cart = () => {
  return (
    <Modal>
      <div>
        <p>Sushi</p>
        <hr />
        <div className="amount">
          <p className="amount_heading">Total Amount</p>
          <p>Rs. 35.62</p>
        </div>
        <hr />
        <div className="open_close">
          <Button>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
