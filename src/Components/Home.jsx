import { Avatar, Button, Divider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { faker } from "@faker-js/faker";
import "./Home.css";

const Home = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div>
      <Box className="hero" sx={{ mx: 5 }}>
        <Avatar
          src={require("./Imgs/Max.jpg")}
          alt="My dog being held by me."
          sx={{ width: 200, height: 200 }}
        />
        <section className="details">
          <h1>I'm Max Wykes,</h1>
          <h2>I'm a new Front End Developer</h2>
          <Divider />
          <p>
            I'm looking for entry level remote roles that will allow me to build
            on my skills.
          </p>
          <p>
            I'd love to learn more about backend development as well, and
            eventually become a full stack developer.
          </p>
        </section>
      </Box>
      <Divider variant="middle" />
      <section className="bottom">
        <section className="contact-me">
          <h3>Contact Me</h3>
          <Divider variant="middle"></Divider>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              varient="outlined"
              size="small"
              sx={{ my: 1 }}
              type="text"
              id="name"
              required
            />
            <TextField
              label="Email"
              varient="outlined"
              size="small"
              sx={{ my: 1 }}
              type="email"
              id="email"
              required
            />
            <TextField
              label="Message"
              varient="outlined"
              multiline
              rows={3}
              size="small"
              sx={{ my: 1 }}
              id="message"
              required
            />
            <Button variant="outlined" type="submit" sx={{ my: 1 }}>
              {status}
            </Button>
          </form>
        </section>
        <section className="review">
          <h4>{faker.name.fullName()}</h4>
          <h5>{faker.name.jobTitle()}</h5>
          <Divider></Divider>
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
          <Divider></Divider>
          <p>Max is a {faker.word.adjective()} guy.</p>
          <p>
            {faker.company.bs()} wouldn't be the {faker.word.adjective()} place
            it is today if I hadn't of met him.
          </p>
          <p>
            His {faker.word.adjective()} forethought helped us tremendously.
          </p>
        </section>
        <section className="review">
          <h4>{faker.name.fullName()}</h4>
          <h5>{faker.name.jobTitle()}</h5>
          <Divider></Divider>
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
          <Divider></Divider>
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
    </div>
  );
};

export default Home;
