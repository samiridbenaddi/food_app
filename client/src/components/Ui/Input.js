import React from "react";
import classes from "./Input.module.css";

//Utiliser la référence avant pour pouvoir utiliser useRef pour extraire la valeur de l'entrée dans d'autres composants
const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className={`${classes.input_amount} ${props.className}`}
      placeholder={props.placeholder}
      ref={ref}
      {...props.input}
    ></input>
  );
});
export default Input;
