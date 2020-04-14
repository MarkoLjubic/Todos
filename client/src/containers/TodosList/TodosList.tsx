import React, { useContext } from "react";
import { CircularProgress } from "@material-ui/core";

import TodosContext from "../../_context/TodosContext";
import { ITodo } from "../../models/Todo";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";

const TodosList: React.FunctionComponent<{}> = () => {
  const { isLoading, todos, deleteTodo, setTodoCheckedState } = useContext(
    TodosContext
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!todos.length) {
    return <div>No todos</div>;
  }

  return (
    <List>
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodoCheckedState={setTodoCheckedState}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
};

export default TodosList;
