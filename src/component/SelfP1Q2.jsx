// Build a simple counter - done
// that resets to 0 automatically after it reaches 10 - done

import React, { useState } from "react";

const SelfP1Q2 = () => {
  const [initial, setchangefunc] = useState(0);
  const resetbtn = () => {
    setchangefunc(initial + 1);
    if (initial === 10) {
      setchangefunc(0);
    }
  };

  return (
    <div>
      <p>{initial}</p>
      <button onClick={resetbtn}>Click Me!</button>
    </div>
  );
};

export default SelfP1Q2;
