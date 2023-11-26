// import { FormEvent } from "react";
"use client";
import { todoApi } from "./TodoList";
import { useState } from "react";

const TodoAdd = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    postTodo({ name });
  };

  const postTodo = async (data) => {
    const response = await fetch(todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  //   async function onSubmit(event) {
  //     event.preventDefault();

  //     const formData = new FormData(event.currentTarget);
  //     const response = await fetch("/api/submit", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     // Handle response if necessary
  //     const data = await response.json();
  //     // ...
  //   }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          name="name"
          onChange={(e) => {
            handleSubmit;
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoAdd;
