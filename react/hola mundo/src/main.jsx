import React from "react";
import { createRoot } from "react-dom/client";

const CustomButton = ({ text }) => {
  return <button>{text}</button>;
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <CustomButton text="Sumar"></CustomButton>
    <br /> <br />
    <CustomButton text="Restar"></CustomButton>
  </React.Fragment>
);
