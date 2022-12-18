import React from "react";
import "./InputStyle.css";

const Input = ({
  guess,
  guesses,
  target,
  round,
  win,
  setInput,
  placeGuess,
}) => {
  return (
    <section className="guess">
      <input
        placeholder="Guess a Pokemon here"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        variant="contained"
        onClick={(t) => placeGuess(guess, guesses, target, round, win)}
      >
        Guess
      </button>
    </section>
  );
};

export default Input;
