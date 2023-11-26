import TodoList from "./todolist/TodoList";
import TodoAdd from "./todolist/TodoAdd";
import TodoAdd2 from "./todolist/TodoAdd2";

const Todos = () => {
  return (
    <div>
      <TodoList />
      <TodoAdd2 />
      {/**  <TodoAdd />*/}
    </div>
  );
};

export default Todos;
