import React from "react";
import ReactDOM from "react-dom";

import TodosDashboard from "./views/TodosDashboard";

const App = () => {
  return <TodosDashboard />;
};

ReactDOM.render(<App />, document.getElementById("root"));
