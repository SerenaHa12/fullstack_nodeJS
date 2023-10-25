import React from "react";
import Header from "./components/Header";

const App = () => {
  const user = {
    name: "John",
    email: "john@example.com",
    age: 20,
  };
  return (
    <div>
      <h1>React</h1>
      <Header title="Hi" {...user} />
    </div>
  );
};

export default App;
// Prop: truyền dữ liệu từ component cha sang component con
