import React from "react";
import Korpa from "./Korpa";

const Button = ({ imek, handleClick, pr, label }) => {
  return (
    <button className={imek} onClick={() => handleClick(pr)}>
      {label}
    </button>
  );
};

export default Button;
