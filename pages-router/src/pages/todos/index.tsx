import TodoList from "@src/components/TodoList";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import styles from "@styles/todolist.module.css";

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
    <>
      <h1 className={styles.title}>TODO LIST</h1>
      <TodoList todos={todos} />
    </>
  );
};

export default Todos;
