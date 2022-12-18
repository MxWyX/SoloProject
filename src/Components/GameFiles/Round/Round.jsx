import React from "react";
import "./RoundStyle.css";

const Round = ({ guess, target }) => {
  return (
    <div className="round">
      <section className={guess.id === target.id ? "green" : "red"}>
        {"#" + guess.id}
        <br />
        {guess.id
          ? guess.id !== target.id
            ? guess.id > target.id
              ? " High "
              : " Low "
            : ""
          : ""}
      </section>
      <section className={guess.height === target.height ? "green" : "red"}>
        {guess.height / 10 + "m"}
        <br />
        {guess.height
          ? guess.height !== target.height
            ? guess.height > target.height
              ? " High "
              : " Low "
            : ""
          : ""}
      </section>
      <section className={guess.weight === target.weight ? "green" : "red"}>
        {guess.weight / 10 + "kg"}
        <br />
        {guess.weight
          ? guess.weight !== target.weight
            ? guess.weight > target.weight
              ? " High "
              : " Low "
            : ""
          : ""}
      </section>
      <section className={guess.type1 === target.type1 ? "green" : "red"}>
        {guess.type1}
      </section>
      <section className={guess.type2 === target.type2 ? "green" : "red"}>
        {guess.type2}
      </section>
      <img className="image" src={guess.sprite} alt="" />
    </div>
  );
};

export default Round;
