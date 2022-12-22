import React from "react";
import "./InputStyle.css";

const Input = ({
  target,
  guess,
  guesses,
  round,
  error,
  setInput,
  placeGuess,
  Restart,
}) => {
  let message = "";
  let winList = [];

  if (typeof target.id === "number") {
    if (guess.id === target.id) {
      winList.push(1);
    }
    if (guess.height === target.height) {
      winList.push(1);
    }
    if (guess.weight === target.weight) {
      winList.push(1);
    }
    if (guess.type2 === target.type2) {
      winList.push(1);
    }
    if (guess.type1 === target.type1) {
      winList.push(1);
    }
  }

  if (winList.length === 5) {
    message = `You win!`;
  } else if (round === 5) {
    message = `You lose.`;
  }

  console.log(target);
  console.log(winList);

  return (
    <div>
      {!message ? (
        <section className="guess">
          <input
            placeholder="Guess a Pokemon here"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            variant="contained"
            onClick={(t) => placeGuess(guess, guesses, round)}
          >
            Guess
          </button>
          <section>
            <p>{error}</p>
          </section>
        </section>
      ) : (
        <div className="result">
          <h3>{message}</h3>
          <h3>The Pokemon was {target.name}</h3>
          <section className="restart">
            <img src={target.sprite} alt="" />
            <button onClick={() => Restart()}>restart</button>
          </section>
        </div>
      )}
    </div>
  );
};

export default Input;
