import React from "react";

const ObjChild = (props) => {
  return (
    <div>
      <p>This is from child passed as Component</p>
      <p>{props.desc}</p>

      {props.passpara && (
        <button onClick={props.passpara}>Submit for Alert</button>
      )}
    </div>
  );
};

export default ObjChild;
