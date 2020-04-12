import React from "react";

import { ITodo } from "../../models/Todo";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";

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
    <List>
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodoCheckedState={setTodosCheckedState}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
};

export default TodosList;
