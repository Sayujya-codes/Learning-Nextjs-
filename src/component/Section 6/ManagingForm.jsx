import React, { useState } from "react";

const ManagingForm = () => {
  const [formObj, setformObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  return (
    <div>
      <input
        value={formObj.fName}
        onChange={(e) => {
          setformObj(e.target.value);
        }}
        type="text"
        placeholder="First Name"
      />
      <input value={formObj.lName} type="text" placeholder="Last Name" />
      <select value={formObj.city}>
        <option value="">Choose City</option>
        <option value="Kathmandu">Kathmandu</option>
        <option value="Pokhara">Pokhara</option>
        <option value="Chitwan">Chitwan</option>
      </select>
      <input checked={formObj.gender === "Male"} type="radio" name="gender" />
      Male <br />
      <input checked={formObj.gender === "Female"} type="radio" name="gender" />
      Female <br />
      <button type="submit">Submit</button>
    </div>
  );
};

export default ManagingForm;
