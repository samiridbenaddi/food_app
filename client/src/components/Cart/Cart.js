import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../Ui/Modal";
import TheButton from "../Ui/TheButton";
import classes from "./Cart.module.css";
import CartContext from "../store/cartcontext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount;

  //Vérifier s'il y a un article dans le panier

  const hasItems = cartCtx.items.length > 0;


  //La fonction est appelée lorsque des articles sont ajoutés ou supprimés du panier

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };


  var cartItems = cartCtx.items.map((item) => (
    <CartItem
      name={item.name}
      amount={item.amount}
      price={item.price}
      key={item.id}
      src={item.src}
      onAdd={onAddHandler.bind(null, item)}
      onRemove={onRemoveHandler.bind(null, item.id)}
    />
  ));



  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.items}>
        <div className={classes.item_group}>{cartItems}</div>

        <div className={`${classes.amount} `}>
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>
        <div className={classes.buttons}>
          <TheButton
            onClick={props.onCloseCart}
            className={` ${classes.btn_style} me-2`}
          >
            Close
          </TheButton>
          {}
          {hasItems && (
            <TheButton className={classes.btn_style2} onClick={props.onOrder}>
              Order
            </TheButton>
          )}
          {}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
