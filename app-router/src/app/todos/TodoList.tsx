import Link from "next/link";
import { TodoListWrapper } from "./TodoList.styled";

type Todo = {
  id: number;
  title: string;
};

const getTodos = async () => {
  const res = await fetch("http://localhost:3000/api/v1/todos");
  console.log("todos");

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json() as Promise<Todo[]>;
};

const TodoList = async () => {
  const todos = await getTodos();
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>✔️</p>
          <p>{todo.title}</p>
          <Link href={`/todos/${todo.id}`}>자세히 보기</Link>
        </li>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
