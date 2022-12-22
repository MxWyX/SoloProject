import React, { useState, useEffect } from "react";
import GetPoke from "./GetPoke";
import Round from "./Round/Round";
import Input from "./Round/Input";
import "../../fonts/PokemonSolidNormal.ttf";
import "./Pordle.css";

const Pordle = () => {
  const [guess, setGuess] = useState({});
  const [guesses, setGuesses] = useState([]);
  const [target, setTarget] = useState({});
  const [round, setRound] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
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

  const placeGuess = async (guess, guesses, round) => {
    if (!input.length || input > 905 || input < 1) {
      setError("Oops, that's not a pokemon. Please try again.");
      return;
    } else {
      setError("");
    }
    const { data, status } = await GetPoke(input);
    if (status !== 200) {
      setError("Sorry, something went wrong. please try again.");
      return;
    } else {
      setError("");
    }
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
    setGuesses([]);
    setGuess("");
    setRound(0);
    setWin(0);
    startGame();
  };

  return (
    <div className="main">
      <Input
        guess={guess}
        guesses={guesses}
        target={target}
        round={round}
        error={error}
        win={win}
        setWin={setWin}
        Restart={Restart}
        setInput={setInput}
        placeGuess={placeGuess}
      />
      <section className="game-container">
        <section className="labels">
          <p>ID</p>
          <p>Height</p>
          <p>Weight</p>
          <p>Type 1</p>
          <p>Type 2</p>
        </section>
        <section className="guesses">
          {guesses.map((guess, index) => (
            <Round
              key={index}
              guess={guess}
              target={target}
              round={round}
              win={win}
              setWin={setWin}
              Restart={Restart}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Pordle;
