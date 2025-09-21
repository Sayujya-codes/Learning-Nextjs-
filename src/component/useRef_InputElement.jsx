import React, { useRef } from "react";

const UseRef_InputElement = () => {
  let firstName,
    lastName = useRef();

  const change = () => {
    let fName = firstName.value;
    let lName = lastName.value;

    alert(fName + " " + lName);
  };

  return (
    <div>
      <input
        ref={(a) => (firstName = a)}
        type="text"
        placeholder="First Name"
      />
      <br /> <br />
      <input ref={(a) => (lastName = a)} type="text" placeholder="Last Name" />
      <br /> <br />
      <button onClick={change}>Click Me</button>
    </div>
  );
};

export default UseRef_InputElement;
