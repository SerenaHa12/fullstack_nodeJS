import { useState } from "react";

const Counter = () => {
  // call hook
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log(count);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>+</button>
      <hr />
      <form action="">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone..."
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default Counter;
