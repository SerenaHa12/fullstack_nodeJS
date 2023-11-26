import { todoApi } from "./TodoList";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const TodoAdd2 = async () => {
  const postTodo = async (data) => {
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

  const addTodo = async (formData) => {
    "use server";
    const name = formData.get("name");
    // console.log(name);

    await postTodo({ name });
    revalidatePath("/todos");

    // điều hướng tại 
    // ở đoạn này làm sao để điều hướng về trang chủ
    redirect("/");
  };

  return (
    <div>
      <form action={addTodo}>
        <input type="text" placeholder="Add task" name="name" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoAdd2;

/**
 * link api nội bộ
 */