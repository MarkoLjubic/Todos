import React, { Fragment } from "react";

import { ITodo } from "../../models/Todo";
import TodoForm from "../../containers/TodosForm/";
import TodosList from "../../containers/TodosList";

interface ITodoItemProps {
  todos: ITodo[];
  createTodo: (title: string, description: string) => void;
  deleteTodo: (id: string) => void;
  setTodoCheckedState: (id: string, isChecked: boolean) => void;
  isLoading: boolean;
}

const TodosOrganizationWidget: React.FunctionComponent<ITodoItemProps> = ({
  todos,
  createTodo,
  deleteTodo,
  setTodoCheckedState,
  isLoading
}) => {
  return (
    <Fragment>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <TodosList
          todos={todos}
          deleteTodo={deleteTodo}
          setTodoCheckedState={setTodoCheckedState}
        />
      )}
      <TodoForm createTodo={createTodo} />
    </Fragment>
  );
};

export default TodosOrganizationWidget;
