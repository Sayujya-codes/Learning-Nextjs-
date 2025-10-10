import React, { useState } from "react";

const UseStateImmutableObjects = () => {
  const [currentObj, updateObjfunc] = useState({
    key1: "Object 1",
    key2: "Object 2",
    key3: "Object 3",
  });

  const [currentObj1, updateObjfunc1] = useState({
    key11: "Sayujya",
    key22: "Dhungana",
  });

  const onClickbtn = () => {
    updateObjfunc((prevData) => ({
      ...prevData,
      key1: "Changed Object 1",
      key2: "Changed Object 2",
      key3: "Changed Object 3",
    }));
  };

  const pagebypageFunc = () => {
    updateObjfunc1({
      ...currentObj1,
      key11: "Changed Sayujya",
      key22: "Changed Dhungana",
    });
  };
  return (
    <div>
      <p>{currentObj.key1}</p>
      <p>{currentObj.key2}</p>
      <button onClick={onClickbtn}>Click Me!</button>
      <p>{currentObj1.key11}</p>
      <button onClick={pagebypageFunc}>Click Here</button>
    </div>
  );
};

export default UseStateImmutableObjects;
