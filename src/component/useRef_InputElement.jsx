import React from "react";

const useRef_InputElement = () => {
  const change = () => {};
  return (
    <div>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <button onClick={change}></button>
    </div>
  );
};

export default useRef_InputElement;
