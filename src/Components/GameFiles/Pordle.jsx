import React, { useState, useEffect } from "react";
import GetPoke2 from "./GetPoke2";
import Round from "./Round/Round";
import Results from "./Round/Results";

const Pordle = () => {
  const [guess, setGuess] = useState({});
  const [target, setTarget] = useState({});
  const [correct, setCorrect] = useState([0, 0, 0, 0, 0]);
  const [round, setRound] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    const data = await GetPoke2(Math.floor(Math.random() * 904 + 1));
    setTarget({
      id: data.data?.id,
      height: data.data?.height,
      weight: data.data?.weight,
      type1: data.data?.types[0].type.name || "none",
      type2: data.data?.types[1]?.type.name || "none",
      name: data.data?.name,
      sprite: data.data?.sprites.front_default,
    });
    console.log(data.data);
  };

  const placeGuess = async (guess, target, round) => {
    if (!input.length || input > 905 || input < 1) return;
    const data = await GetPoke2(input);
    if (data.status !== 200) return;
    const newGuess = {
      id: data.data?.id,
      height: data.data?.height,
      weight: data.data?.weight,
      type1: data.data?.types[0].type.name || "none",
      type2: data.data?.types[1]?.type.name || "none",
      name: data.data?.name,
      sprite: data.data?.sprites.front_default,
    };
    setGuess(newGuess);
    setGuesses([...guesses, newGuess]);
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
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={(t) => placeGuess(guess, target, round)}>
            Guess
          </button>
        </section>
        <section>
          {guesses.map((guess, index) => (
            <Round
              key={index}
              guess={guess}
              target={target}
              sprite={guess.sprite}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Pordle;
