import React from "react";

const Pass_Call_function = () => {
  const passFunction = () => {
    alert("This should render immediatly after invoke!");
  };
  const callFunction = () => {
    alert("This should execute after the click!");
  };
  return (
    <div>
      <button onClick={passFunction}>Pass the function</button>
      <button
        onClick={() => {
          callFunction();
        }}
      >
        Call the function
      </button>
    </div>
  );
};

export default Pass_Call_function;
