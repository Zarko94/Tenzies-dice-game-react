import React from "react";
import classes from "./Dice.module.css";

function Dice(props) {
  const styles = props.isHeld ? classes.selected : "";
  return (
    <div
      className={`${classes["dice-face"]} ${styles}`}
      onClick={() => props.onClick(props.id)}
    >
      <h3 className={classes["dice-number"]}>{props.value}</h3>
    </div>
  );
}

export default Dice;
