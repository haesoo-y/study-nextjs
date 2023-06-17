import Link from "next/link";

import styles from "@styles/todolist.module.css";

type Todo = {
  id: number;
  title: string;
};

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
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
