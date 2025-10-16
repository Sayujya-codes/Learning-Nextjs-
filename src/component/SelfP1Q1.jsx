// Create a component that tracks the number - done
// of times a button is clicked and displays - done
// a message after every 5 clicks. - done

import React from "react";
import { useState } from "react";

const SelfP1Q1 = () => {
  const [initial, setinitialFunction] = useState(0);
  const clicked = () => {
    if (initial % 5 == 0 && initial !== 0) {
      alert("Divisible by 5!");
    }
    setinitialFunction(initial + 1);
  };

  return (
    <div>
      <p>{initial}</p>
      <button onClick={clicked}>Click Me!</button>
    </div>
  );
};

export default SelfP1Q1;
