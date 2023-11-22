import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";


const Form = ({ user }) => {
  console.log(user.email);
  const [form, setForm] = useState(false);
  const [name, setName] = useState(user.email);
  const [message, setMessage] = useState("Tôi cần trợ giúp bài tập về nhà");
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.warning("Send request ...");

    if (!message && !name) {
      toast.error("Please enter your email and message");
      return;
    }

    emailjs
      .send(
        "service_rt5x9rn",
        "template_pvqd2h7",
        { name, message },
        "usf6797X7GiraXuli"
      )
      .then(
        (result) => {
          toast.success(result.text);
          console.log(result.text);
        },
        (error) => {
          toast.error(error.text);
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="user_email"
          // defaultValue={}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-control"
          rows="3"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
