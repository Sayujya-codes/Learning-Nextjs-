import React from "react";

const MouseClick = () => {
  const clickfunc = () => {
    alert("This is the test");
  };
  return (
    <>
      {/* <button onClick={alert("This is New Nepal")}>Submit</button> */}
      <button onClick={clickfunc}>Submit Here</button>
    </>
  );
};

export default MouseClick;
