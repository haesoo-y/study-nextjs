import Link from "next/link";
import styles from "./todolist.module.css";

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
    <div className={styles.wrapper}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.item}>
          <p>✔️</p>
          <p className={styles.title}>{todo.title}</p>
          <Link href={`/todos/${todo.id}`} className={styles.link}>
            자세히 보기
          </Link>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
