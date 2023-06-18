import styles from "./page.module.css";

type Todo = {
  id: number;
  title: string;
  description: string;
};

interface Props {
  params: {
    id: string;
  };
}

const getTodo = async (id: string) => {
  const res = await fetch(`http://localhost:3030/api/v1/todos/${id}`, {
    cache: "no-store",
  });
  console.log({ id });

  if (!res.ok) {
    throw new Error("Failed to fetch todo");
  }

  return res.json() as Promise<Todo>;
};

const Todo = async ({ params: { id } }: Props) => {
  const todo = await getTodo(id);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
};

export default Todo;
