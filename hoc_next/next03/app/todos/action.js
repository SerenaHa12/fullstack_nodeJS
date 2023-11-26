import { todoApi } from "./todolist/TodoList";

export const postTodo = async (data) => {
  "use server";
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log(response);
  }
};

export const addTodo = async (formData) => {
  "use server";
  const name = formData.get("name");
  // console.log(name);

  await postTodo({ name });
  revalidatePath("/todos");
};
