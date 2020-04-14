import React from "react";

import TodoForm from "../../containers/TodosForm/";
import TodosList from "../../containers/TodosList";

const TodosOrganizationWidget: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <TodosList />
      <TodoForm />
    </div>
  );
};

export default TodosOrganizationWidget;
