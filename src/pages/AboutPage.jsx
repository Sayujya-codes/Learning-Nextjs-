import React from "react";
import MenuFile from "../component/MenuFile";
import { useParams } from "react-router-dom";
const AboutPage = () => {
  let { id, name } = useParams();

  return (
    <div>
      <MenuFile />
      <h1>This is About Page.</h1>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default AboutPage;
