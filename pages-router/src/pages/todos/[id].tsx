import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { styled } from "styled-components";

const TodoWrapper = styled.div`
  width: 320px;
  padding: 40px;
  margin: 24px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
`;

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
    <TodoWrapper>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </TodoWrapper>
  );
};

export default Todo;
