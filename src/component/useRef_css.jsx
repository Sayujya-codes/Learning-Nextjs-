import React, { useRef } from "react";

const useRef_css = () => {
  let firstName = useRef();
  const change = () => {};
  return (
    <div>
      <input ref={firstName} type="text" placeholder="First Name" />
      <button onClick={change}>Click me</button>
    </div>
  );
};

export default useRef_css;
