import React from "react";

function Box(props) {
  const style = {
    backgroundColor: props.isOn ? "black" : "transparent",
  };

  return (
    <div
      style={style}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}

export default Box;
