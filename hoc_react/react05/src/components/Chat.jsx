import React, { useState, useEffect, useContext } from "react";
import { ProviderContext } from "../core/Provider";
const Chat = () => {
  const [message, setMessage] = useState("");
  const { state, addMessage } = useContext(ProviderContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      addMessage(message);
      setMessage("");
    }
  };

  useEffect(() => {
    
  }, []);
  return (
    <div className="container">
      <div className="chat p-3 my-3">
        <div className="message">
          {state.messages?.map((message, i) => {
            return <h1 key={i}>{message}</h1>;
          })}
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Tin nhan ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="mt-3 btn btn-primary" onClick={handleSubmit}>
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
