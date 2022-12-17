import React, { useState, useEffect } from "react";
import GetPoke from "./GetPoke";
import Round from "./Round/Round";
import Results from "./Round/Results";

const Pordle = () => {
  const [guess, setGuess] = useState({});
  const [target, setTarget] = useState({});
  const [round, setRound] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    const { data } = await GetPoke(Math.floor(Math.random() * 904 + 1));
    const newTarget = {
      id: data?.id,
      height: data?.height,
      weight: data?.weight,
      type1: data?.types[0].type.name,
      type2: data?.types[1]?.type.name || "none",
      name: data?.name,
      sprite: data?.sprites.front_default,
    };
    setTarget(newTarget);
  };

  const placeGuess = async (guess, round) => {
    if (!input.length || input > 905 || input < 1) return;
    const { data, status } = await GetPoke(input);
    if (status !== 200) return;
    const newGuess = {
      id: data?.id,
      height: data?.height,
      weight: data?.weight,
      type1: data?.types[0].type.name,
      type2: data?.types[1]?.type.name || "none",
      name: data?.name,
      sprite: data?.sprites.front_default,
    };
    setGuess(newGuess);
    setRound(round++);
    console.log(guess);
  };

  // setRound(round + 1);
  // if (round === 5 || guess === [1, 1, 1, 1, 1]) {
  //   if (guess === [1, 1, 1, 1, 1]) {
  //     Results([1, target.name, target.sprite]);
  //   } else {
  //     Results([0, target.name, target.sprite]);
  //   }
  // } else {
  //   correct = [0, 0, 0, 0, 0];
  // }
  // startGame();
  // placeGuess(2, target, round, correct);

  return (
    <div>
      <div className="game-container">
        <section className="controls">
          <input
            className="guess"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={(t) => placeGuess(guess, round)}>Guess</button>
        </section>
        <section>
          <Round guess={guess} target={target} />
        </section>
      </div>
    </div>
  );
};

export default Pordle;
