import React, { useEffect, useState } from "react";
import TheButton from "../Ui/TheButton";
import Tooltip from "../Ui/Tooltip";
import classes from "../Ui/Tooltip.module.css";

const HeroThreeForm = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const tipShow = `${showTooltip ? classes.show : ""}`;

  useEffect(() => {
    if (showTooltip === false) {
      return;
    }

    const toolTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);

    return () => {
      clearTimeout(toolTimer);
    };
  }, [showTooltip]);
 
  return (
    <>
      <Tooltip className={tipShow} />
      <div>
        <TheButton type="submit" onClick={props.onAddToCart}>
          <i className="bi bi-plus"></i> Add
        </TheButton>
      </div>
    </>
  );
};

export default HeroThreeForm;
