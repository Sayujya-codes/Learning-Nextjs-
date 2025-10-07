import React, { useState } from "react";

const UnderstandingState = () => {
  const [currentValue, functionToChange] = useState(0);

  return (
    <div>
      <p>{currentValue}</p>
      <button onClick={() => functionToChange(currentValue + 1)}>
        Click
      </button>{" "}
      <br /> <br />
      <button onClick={() => functionToChange(0)}>Click 0</button>
    </div>
  );
};

export default UnderstandingState;
