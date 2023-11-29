"use client";
import { useState } from "react";
import { useSWRConfig } from "swr";
const api = `${process.env.NEXT_PUBLIC_SERVER_API}/posts`;

const PostAdd = () => {
  const { mutate } = useSWRConfig();

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    // console.log(name);
    const names = {
      title: name,
    };
    e.preventDefault();
    await addPost(names);
  };

  const addPost = async (data) => {
    const response = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      await mutate(api);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Thêm"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default PostAdd;
