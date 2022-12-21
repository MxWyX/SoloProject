import React from "react";
import "./InputStyle.css";

const Input = ({
  guess,
  guesses,
  target,
  round,
  win,
  error,
  setInput,
  placeGuess,
}) => {
  return (
    <section className="guess">
      <input
        placeholder="Guess a Pokemon here"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        // set input to nothing when pressing guess
      />
      <button
        variant="contained"
        onClick={(t) => placeGuess(guess, guesses, target, round, win)}
      >
        Guess
      </button>
      <section>
        <p>{error}</p>
      </section>
    </section>
  );
};

export default Input;
