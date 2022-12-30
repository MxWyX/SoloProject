import React from "react";
import { Button, Divider, TextField } from "@mui/material";
import "./ContactMe.css";

const ContactMe = () => {
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
  );
};

export default ContactMe;
