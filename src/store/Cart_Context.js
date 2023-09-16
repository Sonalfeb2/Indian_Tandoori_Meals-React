import React, { useState } from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {}
});
export const CartContextProvider = props => {
  const [itemState, setItemState] = useState([]);
  const addItemHandler = newItem => {
    const found = itemState.find(element => element.id === newItem.id);
    if (found) {
      const prevState = [...itemState];
      found.amount = newItem.amount;
      setItemState(prevState);
    } else {
      setItemState(item => [...item, { id: newItem.id, ...newItem }]);
    }
  };
  const removeItemHandler = () => {};

  const contextValue = {
    items: itemState,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };
  console.log(itemState)
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
