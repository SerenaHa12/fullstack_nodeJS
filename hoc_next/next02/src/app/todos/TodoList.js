const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const TodoList = async () => {
  const todos = await getTodo();
  return (
    <>
      <h1>TodoList</h1>
      {todos.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </>
  );
};

export default TodoList;
