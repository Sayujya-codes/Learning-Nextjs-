import React, { useState } from "react";

const UseState_ImmutableArray = () => {
  // we need 2 useState here:
  // 1. for the list of the task that will be displayed
  // 2. for the data that we will be adding in the input field

  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
  };
  return (
    <div>
      <p>{list.length}</p>
      <input
        type="text"
        placeholder="Add Task"
        onChange={(e) => setItem(e.target.value)}
      />
      <br />
      <br />
      <button onClick={AddToList}>Add</button>
      <br />
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((i, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{i}</td>
                  <button>Remove</button>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UseState_ImmutableArray;
