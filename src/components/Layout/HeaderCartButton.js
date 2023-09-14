import CartIcon from "../Cart/CartIcon";
const cartValue = 0;
const CartBtn = () => {
  return (
    <button>
      <span><CartIcon /></span>
      <span>Cart </span>
      <span>{cartValue}</span>
    </button>
  );
};
export default CartBtn;
