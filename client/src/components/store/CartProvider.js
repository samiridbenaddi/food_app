import React, { useReducer } from "react";
import CartContext from "./cartcontext";

//Création d'un état par défaut pour le chariot à utiliser dans la fonction de réduction et l'état par défaut du crochet de réduction ;
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //Trouver le montant total précis
    console.log(state);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //Vérifier si un article existe déjà dans le panier, si oui trouver son index, si non, lui donner la valeur null
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //En attribuant la variable d'article existante à la variable existante dans le panier, s'il n'y a pas de variable existante, sa valeur sera nulle ou fausse comme indiqué ci-dessus
    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    //Vérifier si c'est vrai ou faux que l'article existe déjà dans le panier
    if (existingItem) {
      //attribue l'élément existant et ajoute le montant saisi au montant de l'élément existant à la variable updateItem
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      //Récupère tous les articles du panier et attribue la variable updateItem à l'article existant
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;  
    } else {
      //Ajouter l'article au panier s'il n'existe pas auparavant
      updatedItems = state.items.concat(action.item); 
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    //Vérifier si un article existe déjà dans le panier, si oui trouver son index, si non, lui donner la valeur null
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];

    //Trouver le montant total précis
    const updatedTotalAmount =
      state.totalAmount - existingItem?.price * existingItem.amount;
    let updatedItems;

    updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
