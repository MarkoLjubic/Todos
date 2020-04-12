import * as React from "react";
import ListItem from "@material-ui/core/ListItem";

import { ITodo } from "../../models/Todo";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import { ListItemSecondaryAction, ListItemText } from "@material-ui/core";

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
    <ListItem role={undefined} dense={true}>
      <Checkbox id={todo.id} value={todo.isChecked} onChange={handleCheck} />
      <ListItemText id={todo.id} primary={todo.title} />
      <ListItemSecondaryAction>
        <Button action={deleteTodo} actionProps={[todo.id]}>
          x
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
