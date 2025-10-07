import React, { useState } from "react";

const StateasLecture = () => {
  const [number, setNumber] = useState(1);
  const changeNumber = () => {
    setNumber(number + 1);
  };
  const resetNum = () => {
    setNumber(0);
  };
  return (
    <div>
      <p>{number}</p>
      <button onClick={changeNumber}>Click me to increase</button>
      <br />
      <br />
      <button onClick={resetNum}>Click me to reset</button>
    </div>
  );
};

export default StateasLecture;
