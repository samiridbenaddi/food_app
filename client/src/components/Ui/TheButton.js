import React from "react";
import classes from "./TheButton.module.css";

const TheButton = (props) => {
  //Disposition et structure du composant TheButton
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TheButton;
