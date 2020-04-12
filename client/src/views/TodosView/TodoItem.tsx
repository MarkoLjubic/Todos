import * as React from "react";

import { ITodo } from "../../models/Todo";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";

interface ITodoItemProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  setTodoCheckedState: (id: string, isChecked: boolean) => void;
}

const TodoItem: React.FunctionComponent<ITodoItemProps> = ({
  todo,
  setTodoCheckedState,
  deleteTodo
}) => {
  const handleCheck = (isChecked: boolean, id: string) => {
    setTodoCheckedState(todo.id, isChecked);
  };

  return (
    <div>
      <Checkbox
        id={todo.id}
        value={todo.isChecked}
        label={todo.title}
        onChange={handleCheck}
      />
      <Button action={deleteTodo} actionProps={[todo.id]}>
        x
      </Button>
    </div>
  );
};

export default TodoItem;
