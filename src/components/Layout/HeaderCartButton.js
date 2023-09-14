import CartIcon from "../Cart/CartIcon";
const cartValue = 0;
const CartBtn = () => {
  return (
    <button>
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
