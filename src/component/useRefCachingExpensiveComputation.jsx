import React, { useRef } from "react";

const UseRefCachingExpensiveComputation = () => {
  let APIData = useRef(null);
  let myPTag = useRef();
  const fetchData = async () => {
    let response = await fetch("https://dummyjson.com/products");
    APIData.current = await response.json();
  };
  const showData = () => {
    myPTag.current.innerText = JSON.stringify(APIData.current);
  };
  return (
    <div>
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Call Api</button>
      <br />
      <br />
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default UseRefCachingExpensiveComputation;
