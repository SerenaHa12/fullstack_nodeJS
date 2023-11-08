import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const Form = () => {
  const [form, setForm] = useState(false);
  const [name, setName] = useState([]);
  const [message, setMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rt5x9rn",
        "template_pvqd2h7",
        { name, message },
        "usf6797X7GiraXuli"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Message</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button value="Send" onClick={handleSubmit} className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default Form;
