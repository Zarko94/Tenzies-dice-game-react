import React from "react";
import Dices from "./Dices";
import classes from "./GameContainer.module.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function GameContainer(props) {
  const [diceValue, setDiceValue] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  useEffect(() => {
    let allHeld = diceValue.every((dice) => dice.isHeld);
    let firstValue = diceValue[0].value;
    let sameValues = diceValue.every((dice) => dice.value === firstValue);
    if (sameValues && allHeld) {
      setTenzies(true);
    }
    console.log(tenzies);
  }, [diceValue]);
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  const newDicesHandler = () => {
    const newDice = [];
    setDiceValue((prevState) =>
      prevState.map((dice) => {
        return dice.isHeld ? dice : generateNewDie();
      })
    );
  };
  const holdDiceHandler = (id) => {
    setDiceValue((prevState) =>
      prevState.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  };
  const restartGameHandler = () => {
    setDiceValue(allNewDice());
    setTenzies(false);
  };
  let didYouWon = !tenzies ? "Tenzis" : "You WON !!!";
  return (
    <div className={classes.gameContainer}>
      <h1 className={classes.title}>{didYouWon}</h1>
      {tenzies && <Confetti />}
      <p className={classes.infoText}>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <Dices
        allNewDice={allNewDice}
        diceValue={diceValue}
        holdDiceHandler={holdDiceHandler}
      />
      {!tenzies && (
        <button className={classes.btnRoll} onClick={newDicesHandler}>
          Roll
        </button>
      )}
      {tenzies && (
        <button className={classes.btnRoll} onClick={restartGameHandler}>
          Restart Game
        </button>
      )}
    </div>
  );
}

export default GameContainer;
