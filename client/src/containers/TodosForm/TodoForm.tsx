import React, { Component, useState, SyntheticEvent } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

interface ITodoFormProps {
  createTodo: (title: string, description: string) => void;
}

const TodoForm: React.FunctionComponent<ITodoFormProps> = ({ createTodo }) => {
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
