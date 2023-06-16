import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Todo = {
  id: number;
  title: string;
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
    <>
      <h3>{todo.title}</h3>
    </>
  );
};

export default Todo;
