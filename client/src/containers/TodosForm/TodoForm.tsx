import React, { Component, useState, SyntheticEvent, useContext } from "react";

import TodosContext from "../../_context/TodosContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const TodoForm: React.FunctionComponent<{}> = () => {
  const { createTodo } = useContext(TodosContext);

  const [values, setValues] = useState({ title: "", description: "" });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    createTodo(values.title, values.description);
  };

  const handleChange = (value: string, id: string): void => {
    setValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input
        id="title"
        isRequired={true}
        label="Title"
        value={values.title}
        onChange={handleChange}
      />
      <Input
        id="description"
        label="Description"
        value={values.description}
        onChange={handleChange}
      />
      <div className="todo-form-actions">
        <Button type="submit">Add todo</Button>
      </div>
    </form>
  );
};

export default TodoForm;
