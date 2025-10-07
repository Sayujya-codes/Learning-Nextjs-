import React from "react";

const SpreadOperator = () => {
  const array1 = {
    key1: "Sayujya",
    key2: "Dhungana",
  };

  const arrayCopy = { ...array1 };

  console.log(arrayCopy);
};

export default SpreadOperator;
