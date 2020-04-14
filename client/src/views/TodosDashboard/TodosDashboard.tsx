import React from "react";
import { Grid as MaterialUiGrid } from "@material-ui/core";

import TodosOrganizationWidget from "./TodosOrganizationWidget";
import { TodosStore } from "../../_context/TodosContext";

const TodosDashboard: React.FunctionComponent<{}> = () => {
  return (
    <TodosStore>
      <MaterialUiGrid container={true} direction="row">
        <MaterialUiGrid item={true} xs={6}>
          <TodosOrganizationWidget />
        </MaterialUiGrid>
        <MaterialUiGrid item={true} xs={6} container={true} direction="column">
          <MaterialUiGrid />
          <MaterialUiGrid />
        </MaterialUiGrid>
      </MaterialUiGrid>
    </TodosStore>
  );
};

export default TodosDashboard;
