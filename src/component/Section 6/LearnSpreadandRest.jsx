import React from "react";

const LearnSpreadandRest = () => {
  const addNum = (a, b, c, ...others) => {
    console.log(others);
    return a + b + c;
  };

  const num = addNum(2, 3, 4, 8, 1, 2, 4);
  console.log(num);
};

export default LearnSpreadandRest;

// spread operator:

const names = ["Sayujya", "Dhungana"];

const getNames = (...names) => {};
