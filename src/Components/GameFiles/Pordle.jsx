import React, { useState, useEffect } from "react";
import GetPoke from "./GetPoke";
import Round from "./Round/Round";
import Results from "./Round/Results";
import "../../fonts/PokemonSolidNormal.ttf";
import "./Pordle.css";
import Input from "./Round/Input";

const Pordle = () => {
  const [guess, setGuess] = useState({});
  const [guesses, setGuesses] = useState([]);
  const [target, setTarget] = useState({});
  const [round, setRound] = useState(0);
  const [input, setInput] = useState("");
  const [win, setWin] = useState(0);

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

  const placeGuess = async (guess, guesses, target, round) => {
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
    setGuesses([...guesses, newGuess]);
    setRound(round + 1);
  };

  const Restart = () => {
    console.log("press refresh");
  };

  return (
    <div className="main">
      {round === 5 || win > 0 ? (
        <Results
          guess={guess}
          target={target}
          round={round}
          setWin={setWin}
          win={win}
          Restart={Restart}
        />
      ) : (
        <Input
          guess={guess}
          guesses={guesses}
          target={target}
          round={round}
          win={win}
          setInput={setInput}
          placeGuess={placeGuess}
        />
      )}
      <div className="game-container">
        <div className="labels">
          <p>ID</p>
          <p>Height</p>
          <p>Weight</p>
          <p>Type 1</p>
          <p>Type 2</p>
        </div>
        <section className="guesses">
          {guesses.map((guess, index) => (
            <Round key={index} guess={guess} target={target} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Pordle;
