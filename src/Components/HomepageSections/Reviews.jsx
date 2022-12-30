import React from "react";
import { faker } from "@faker-js/faker";
import { Divider } from "@mui/material";

const Reviews = () => {
  return (
    <section className="bottom">
      <Divider />
      <section className="top-row">
        <section className="review">
          <h4>{faker.name.fullName()}</h4>
          <h5>{faker.name.jobTitle()}</h5>
          <Divider />
          <p>
            Max, what a {faker.word.adjective()} {faker.word.noun()}.
          </p>
          <p>
            He helped my company {faker.company.bs()} and for that I am ever
            thankful.
          </p>
          <p>Without him, {faker.company.name()} wouldn't be what is today!</p>
        </section>
        <section className="review">
          <h4>{faker.name.fullName()}</h4>
          <h5>{faker.name.jobTitle()}</h5>
          <Divider />
          <p>Max is a {faker.word.adjective()} guy.</p>
          <p>
            {faker.company.bs()} wouldn't be the {faker.word.adjective()} place
            it is today if I hadn't of met him.
          </p>
          <p>
            His {faker.word.adjective()} forethought helped us tremendously.
          </p>
        </section>
      </section>
      <section className="bot-row">
        <section className="review">
          <h4>{faker.name.fullName()}</h4>
          <h5>{faker.name.jobTitle()}</h5>
          <Divider />
          <p>
            Max is the most {faker.word.adjective()} person I've ever known.
          </p>
          <p>
            He saved my family from a {faker.animal.bear()} with his bare hands.
          </p>
          <p>
            He was the best man at my wedding in {faker.date.month()} and his
            speach has everyone in tears.
          </p>
        </section>
        <section className="review">
          <h4>{faker.name.fullName()}</h4>
          <h5>{faker.name.jobTitle()}</h5>
          <Divider />
          <p>Max Wykes, what a {faker.word.adjective()} bloke.</p>
          <p>
            This man is the sole reason {faker.company.name()} is now so
            successful!
          </p>
          <p>
            Using his {faker.word.adjective()} brain, he saved us all from
            certain failure.
          </p>
        </section>
      </section>
    </section>
  );
};

export default Reviews;
