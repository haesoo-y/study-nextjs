type Todo = {
  id: number;
  title: string;
};

interface Props {
  params: {
    id: string;
  };
}

const getTodo = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/v1/todos/${id}`);
  console.log({ id });

  if (!res.ok) {
    throw new Error("Failed to fetch todo");
  }

  return res.json() as Promise<Todo>;
};

const Todo = async ({ params: { id } }: Props) => {
  const todo = await getTodo(id);
  return (
    <>
      <h3>{todo.title}</h3>
    </>
  );
};

export default Todo;
