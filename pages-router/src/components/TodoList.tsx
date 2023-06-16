import Link from "next/link";
import { styled } from "styled-components";

const TodoListWrapper = styled.div`
  width: 360px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  & p {
    font-size: 16px;
  }
  & li {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  & a {
    color: #3535da;
  }
`;

type Todo = {
  id: number;
  title: string;
};

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>✔️</p>
          <p>{todo.title}</p>
          <Link href={`/todos/${todo.id}`}>자세히 보기</Link>
        </li>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
