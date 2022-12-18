import React from "react";
import "./ResultStyle.css";

const Results = ({ guess, target, round, win, setWin, endGame, Restart }) => {
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
    if (guess.type1 === target.type1) {
      winList.push(1);
    }
    if (guess.type2 === target.type2) {
      winList.push(1);
    }
    if (winList.length === 5) {
      setWin(1);
    } else if (round === 5) {
      setWin(2);
    }
  }
  winList = [];

  let message = "";
  if (win === 1) {
    message = `You win!`;
  } else if (win === 2) {
    message = `You lose.`;
  }
  return (
    <div className="result">
      <h3>{message}</h3>
      <h3>The Pokemon was {target.name}</h3>
      <section className="restart">
        <img src={win > 0 ? target.sprite : ""} alt="" />
        <button
          onClick={() => {
            Restart();
          }}
        >
          restart
        </button>
      </section>
    </div>
  );
};

export default Results;
