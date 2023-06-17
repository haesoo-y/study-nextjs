import TodoList from "./TodoList";

import styles from "./page.module.css";

const Page = () => {
  return (
    <>
      <h1 className={styles.title}>TODO LIST</h1>
      <TodoList />
    </>
  );
};

export default Page;
