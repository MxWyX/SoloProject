import React, { useState } from "react";
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
      <section className="hero">
        <img src={require("./Imgs/Max.jpg")} alt="My dog being held by me." />
        <section className="details">
          <h1>I'm Max</h1>
          <h2>I'm a new Front End Developer</h2>
          <p>
            I'm looking for entry level remote roles that will allow me to build
            on my skills.
          </p>
          <p>
            I'd love to learn more about backend development as well, and
            eventually become a full stack developer.
          </p>
        </section>
      </section>
      <section className="contact-me">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
