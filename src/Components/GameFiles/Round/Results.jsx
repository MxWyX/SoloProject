import React from "react";

const Results = (results) => {
  let message = "";
  if (results[0] === 1) {
    message = `You've correctly guessed the pokemon is ${results[1]}`;
  } else {
    message = `Unfortunately, you didn't guess the Pokemon. it was ${results[1]}`;
  }
  return (
    <div>
      <h3>{message}</h3>
      <img src={results[2] ? results[2] : ""} alt="" />
    </div>
  );
};

export default Results;
