import React, { useRef } from "react";

const UseRef_InputElement = () => {
  let firstName = useRef();
  let lastName = useRef();

  const change = () => {
    let fName = firstName.current.value;
    let lName = lastName.current.value;

    alert(fName + " " + lName);
  };

  return (
    <div>
      <input ref={firstName} type="text" placeholder="First Name" />
      <br /> <br />
      <input ref={lastName} type="text" placeholder="Last Name" />
      <br /> <br />
      <button onClick={change}>Click Me</button>
    </div>
  );
};

export default UseRef_InputElement;
