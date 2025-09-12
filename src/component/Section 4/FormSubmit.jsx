import React from "react";

const FormSubmit = () => {
  const formsubmitdata = (event) => {
    event.preventDefault();

    alert("The form is Submitted!");
  };

  return (
    <>
      <form onSubmit={formsubmitdata}>
        <input type="text" placeholder="Name" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormSubmit;
