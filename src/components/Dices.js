import Dice from "./Dice";
import classes from "./Dices.module.css";

function Dices(props) {
  return (
    <div className={classes["dices-container"]}>
      {props.diceValue.map((dice) => (
        <Dice
          key={dice.id}
          id={dice.id}
          value={dice.value}
          onClick={props.holdDiceHandler}
          isHeld={dice.isHeld}
        />
      ))}
    </div>
  );
}

export default Dices;
