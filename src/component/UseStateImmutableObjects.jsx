import React, { useState } from "react";

const UseStateImmutableObjects = () => {
  // here the below four are used to like initialize the myObj object(state variable),
  // the setMyobj is the function that is used to update the state variable.
  const [myObj, setMyObj] = useState({
    key1: "Sayujya 1",
    key2: "Sayujya 2",
    key3: "Sayujya 3",
    key4: "Sayujya 4",
  });

  const change = () => {
    setMyObj({
      key1: "Changed Sayujya 1",
      key2: "Changed Sayujya 2",
      key3: "Changed Sayujya 3",
      key4: "Changed Sayujya 4",
    });
  };

  return (
    <div>
      <h5>{myObj.key1}</h5>
      <button onClick={change}>Click Me</button>
    </div>
  );
};

export default UseStateImmutableObjects;
