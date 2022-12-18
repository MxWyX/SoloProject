import { Avatar, Button, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { Container } from "semantic-ui-react";
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
      <Container className="hero">
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
      </Container>
      <Divider variant="middle" />
      <section className="bottom">
        <section className="contact-me">
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
        <Divider />
        <section className="reviews"></section>
      </section>
    </div>
  );
};

export default Home;
