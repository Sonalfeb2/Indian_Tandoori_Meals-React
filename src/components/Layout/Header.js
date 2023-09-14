import './Header.css'
const Header = () => {
    const cartValue = 0;
  return (
    <div className='header'>
      <div className="logo">Indian Tandoori Meals</div>
      <div className="header-right">
        <button>Cart {cartValue}</button>
      </div>
    </div>
  );
};
export default Header;
