import React, { useEffect } from "react";
import "./RoundStyle.css";

const Round1 = (guess, target, sprite) => {
  return (
    <div className="round">
      <section className={guess.guess.id === guess.target.id ? "green" : "red"}>
        {guess.guess.id}
      </section>
      <section
        className={guess.guess.height === guess.target.height ? "green" : "red"}
      >
        {guess.guess.height}
        {guess.guess.height != guess.target.height
          ? guess.guess.height > guess.target.height
            ? " too high "
            : " too low "
          : ""}
      </section>
      <section
        className={guess.guess.weight === guess.target.weight ? "green" : "red"}
      >
        {guess.guess.weight}
        {guess.guess.weight !== guess.target.weight
          ? guess.guess.weight > guess.target.weight
            ? " too high "
            : " too low "
          : ""}
      </section>
      <section
        className={guess.guess.type1 === guess.target.type1 ? "green" : "red"}
      >
        {guess.guess.type1}
      </section>
      <section
        className={guess.guess.type2 === guess.target.type2 ? "green" : "red"}
      >
        {guess.guess.type2}
      </section>
      <section className="image">
        <img src={guess.sprite} alt="" />
      </section>
    </div>
  );
};

export default Round1;
