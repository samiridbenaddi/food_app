import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  //Conversion des prix à deux décimales

  const price = `€${props.price.toFixed(2)}`;


  //Disposition et structure des éléments
  return (
    <>
      <div className={classes.item}>
        <div className={classes.item_content}>
          <div className={classes.item_img_div}>
            <img
              className={classes.item_image}
              src={props.src}
              alt="food"
            ></img>
          </div>
          <div className={classes.item_value}>
            <div className={classes.item_name_div}>
              <p>{props.name}</p>
            </div>
            <div className={classes.item_info_div}>
              <p>Unit price : {price}</p>
            </div>
            <div className={classes.item_info_div}>
              <p>Quantity : {props.amount}</p>
            </div>
          </div>
        </div>
        <div className={classes.item_buttons}>
          <div onClick={props.onRemove}>
            <i className="bi bi-dash"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
