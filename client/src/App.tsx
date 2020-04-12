import React from "react";
import ReactDOM from "react-dom";

import TodosView from "./views/Dashboard";

const App = () => {
  return <TodosView />;
};

ReactDOM.render(<App />, document.getElementById("root"));
