import React from "react";
import "./RoundStyle.css";

const Round = ({ guess, target }) => {
  console.log(target);
  return (
    <div className="round">
      <section className={guess.id === target.id ? "green" : "red"}>
        {guess.id}
      </section>
      <section className={guess.height === target.height ? "green" : "red"}>
        {guess.height}
        {guess.height
          ? guess.height != target.height
            ? guess.height > target.height
              ? " too high "
              : " too low "
            : ""
          : ""}
      </section>
      <section className={guess.weight === target.weight ? "green" : "red"}>
        {guess.weight}
        {guess.weight
          ? guess.weight !== target.weight
            ? guess.weight > target.weight
              ? " too high "
              : " too low "
            : ""
          : ""}
      </section>
      <section className={guess.type1 === target.type1 ? "green" : "red"}>
        {guess.type1}
      </section>
      <section className={guess.type2 === target.type2 ? "green" : "red"}>
        {guess.type2}
      </section>
      <section className="image">
        <img src={guess.sprite} alt="" />
      </section>
    </div>
  );
};

export default Round;
