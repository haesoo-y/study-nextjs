import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import styles from "@styles/todo.module.css";

type Todo = {
  id: number;
  title: string;
  description: string;
};

export const getServerSideProps: GetServerSideProps<{
  todo: Todo;
}> = async (context) => {
  const todoId = context.params?.id as string;
  console.log(todoId);
  const res = await fetch(`http://localhost:3000/api/v1/todos/${todoId}`);
  const todo = await res.json();
  return { props: { todo } };
};

const Todo = ({
  todo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
};

export default Todo;
