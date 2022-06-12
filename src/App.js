import "./App.css";
import Box from "./Box";
import { boxes } from "./boxes";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(boxes);

  const toggle = (id) => {
    setSquares((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, isOn: !square.isOn } : square;
      });
    });
  };
  const kutije = squares.map((kutija) => {
    return (
      <Box key={kutija.id} id={kutija.id} toggle={toggle} isOn={kutija.isOn} />
    );
  });
  return <div className="box--container">{kutije}</div>;
}

export default App;
