import React from "react";

import { ITodo } from "../../models/Todo";
import TodoItem from "./TodoItem";

interface ITodoItemProps {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  setTodosCheckedState: (id: string, isChecked: boolean) => void;
}

const TodosList: React.FunctionComponent<ITodoItemProps> = ({
  todos,
  deleteTodo,
  setTodosCheckedState
}) => {
  if (!todos.length) {
    return <div>No todos</div>;
  }

  return (
    <div>
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodoCheckedState={setTodosCheckedState}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodosList;
