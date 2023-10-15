import React, { useContext, useState } from "react";
import classes from "./HeroThreeContent.module.css";
import HeroThreeForm from "./HeroThreeForm";
import CartContext from "../store/cartcontext";

const HeroThreeContent = (props) => {
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  //Conversion des prix à deux décimales

  const price = `€${props.price.toFixed(2)}`;


  //Ajout de valeurs de données à gérer au useContext
  const onAddToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      src: props.src,
      amount: amount,
    });
  };

  //Disposition et structure de la troisième section
  return (
    <div className={classes.dish_content}>
      <div className={classes.dish_image_div}>
        <img
          src={props.src}
          alt="Dish"
          style={{
            height: "250px",
            width: "300px",
          }}
        />
      </div>
      <div className={classes.dish_text_div}>
        <p>{props.name}</p>
      </div>
      <div className={classes.dish_text_div}>
        <p>Stock : {props.quantity}</p>
      </div>
      <div>
        <p>Description : {props.Description}</p>
      </div>
      <div className={classes.dish_price_div}>
        <p className="my-auto">{price}</p>
        <HeroThreeForm onAddToCart={onAddToCartHandler} />
        <input
          value={amount}
          onChange={(e) => {
            let val = e.target.value;
            if (val <= props.quantity && val > 0) setAmount(val);
          }}
          {...{
            id: Math.random() * 10,
            type: "number",
            min: "1",
            max: props.quantity,
            step: "1",
          }}
        />
      </div>
    </div>
  );
};

export default HeroThreeContent;
