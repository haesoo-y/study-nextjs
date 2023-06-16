import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";

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

const Page = async () => {
  const todos = await getTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <Link href={`/todos/${todo.id}`} key={todo.id}>
          <li>{todo.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Page;
