import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart_Context";
import { useContext } from "react";
const CartBtn = (props) => {
const ctx = useContext(CartContext);
const ctxAmount = ctx.items.reduce((curr,item)=>{
  return curr = curr + item.amount
},0)
  return (
    <button onClick={()=>props.showCartHandler()}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className="cartvalue">
        {ctxAmount}
      </span>
    </button>
  );
};
export default CartBtn;
