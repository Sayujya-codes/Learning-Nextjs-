import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const toAdd = () => {
    console.log("function called");
    list.push(item);
    setList([...list]);
  };

  const removeItem = (index) => {
    alert(index);
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div>
      <p>{list.length}</p>

      <input
        type="text"
        placeholder="Task Here"
        onChange={(e) => setItem(e.target.value)}
      />
      <br />
      <br />
      <button onClick={toAdd}>Add Task</button>
      {/* <p>{item}</p> */}
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((i, index) => {
              return (
                <tr key={index}>
                  <td>{i}</td>
                  {/* <td>{index}</td> */}
                  <button
                    onClick={() => {
                      removeItem(index);
                    }}
                  >
                    Remove
                  </button>
                </tr>
              );
            })
          ) : (
            <td>No Task!</td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
