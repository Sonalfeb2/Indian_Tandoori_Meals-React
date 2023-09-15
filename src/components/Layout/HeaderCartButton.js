import CartIcon from "../Cart/CartIcon";
const cartValue = 0;
const CartBtn = (props) => {

  return (
    <button onClick={()=>props.showCartHandler()}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className="cartvalue">
        {cartValue}
      </span>
    </button>
  );
};
export default CartBtn;
