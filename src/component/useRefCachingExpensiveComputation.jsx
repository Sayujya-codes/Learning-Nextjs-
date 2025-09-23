import React from "react";

const useRefCachingExpensiveComputation = () => {
  const change1 = () => {
    alert("test 1");
  };
  const change2 = () => {
    alert("test 2");
  };
  return (
    <div>
      <button onClick={change1}>Click me 1</button>
      <button onClick={change2}>Click me 2</button>
    </div>
  );
};

export default useRefCachingExpensiveComputation;
