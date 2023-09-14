import "./Header.css";
import CartBtn from "./HeaderCartButton";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">Indian Tandoori Meals</div>
      <div className="header-right">
        <CartBtn />
      </div>
    </div>
  );
};
export default Header;
