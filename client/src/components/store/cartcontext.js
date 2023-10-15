import React from "react";

//Création Stockage des valeurs de contexte
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;
