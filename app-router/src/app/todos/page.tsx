import TodoList from "./TodoList";

type Todo = {
  id: number;
  title: string;
};

const Page = () => {
  return (
    <>
      <h1>TODO LIST</h1>
      {/* @ts-expect-error Async Server Component */}
      <TodoList />
    </>
  );
};

export default Page;
