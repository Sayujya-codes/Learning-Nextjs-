import React, { useRef } from "react";

const UseRef_css = () => {
  let firstName = useRef();
  let myHeadline = useRef();
  const change = () => {
    // myHeadline.current.classList.remove("text-success");
    myHeadline.current.classList.add("text-danger");
  };
  return (
    <div>
      <h1 ref={myHeadline} className="text-success">
        Test
      </h1>
      <input ref={firstName} type="text" placeholder="First Name" /> <br />
      <br />
      <button onClick={change}>Click me</button>
    </div>
  );
};

export default UseRef_css;
