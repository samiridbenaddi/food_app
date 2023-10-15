import React, { useState } from "react";
import TheNav from "./components/Header/TheNav";
import Sections from "./components/Sections/Sections";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import CheckoutModal from "./components/Cart/CheckoutModal";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
  };
 


  const onOrderHandler = () => {
    setCartIsShown(false);

    // afficher un modal contenant un formulaire pour saisir les détails des clients

    openModal();
  };

  return (
    <CartProvider>
      <CheckoutModal {...{ openModal, closeModal, modalIsOpen }} />
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav onShowCart={onShowCartHandler} />
      <Sections />
    </CartProvider>
  );
};

export default App;
