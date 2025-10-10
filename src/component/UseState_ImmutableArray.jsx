import React, { useState } from "react";

const UseState_ImmutableArray = () => {
  // we need 2 useState here:
  // 1. for the list of the task that will be displayed
  // 2. for the data that we will be adding in the input field

  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  return (
    <div>
      <input type="text" placeholder="Add Task" />
      <button>Add</button>
    </div>
  );
};

export default UseState_ImmutableArray;
