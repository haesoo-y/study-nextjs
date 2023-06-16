import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";

type Todo = {
  id: number;
  title: string;
};

export const getServerSideProps: GetServerSideProps<{
  todos: Todo[];
}> = async () => {
  const res = await fetch("http://localhost:3000/api/v1/todos");
  const todos = await res.json();
  return { props: { todos } };
};

const Todos = ({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export default Todos;
