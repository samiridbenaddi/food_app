import React, { useContext, useEffect, useState } from "react";
import classes from "./NavCartButton.module.css";
import CartContext from "../store/cartcontext";

const NavCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  //Extraire la variable items des valeurs de contexte principalement pour être utilisée comme dépendance useEffect
  const { items } = cartCtx;

  //Automatisation de la numérotation des articles sur le bouton Panier grâce à la fonction réduire
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + 1;
  }, 0);

  //Ajout de style conditionnel au bouton Panier à l'aide de useState et de l'opérateur ternaire
  const btnBump = `${classes.cart__button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // Utilisation du crochet d'effet pour contrôler l'animation du bouton Panier lors de l'ajout d'articles
  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const bumpTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimer);
    };
  }, [items]);


  return (
    <div onClick={props.onClick} className={btnBump}>
      <i className="bi bi-cart"></i>
      Cart
      <div className={classes.badge}>{numberOfCartItems}</div>
    </div>
  );
};

export default NavCartButton;
