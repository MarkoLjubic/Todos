import React from "react";

import { ITodo } from "../models/Todo";
import todosService from "../services/todosService";
import TodosContext from "../_context/TodosContext";

export default React.createContext({
  createTodo: (title: string, description: string) => {},
  deleteTodo: (id: string) => {},
  setTodoCheckedState: (id: string, isChecked: boolean) => {},
  isLoading: false,
  todos: []
});

interface IState {
  todos: ITodo[];
  isLoading: boolean;
}

export class TodosStore extends React.Component<{}, IState> {
  state = {
    todos: [],
    isLoading: true
  };

  public componentDidMount() {
    todosService.getTodos().then((todos: ITodo[]) => {
      this.setState({
        todos,
        isLoading: false
      });
    });
  }

  public createTodo = (title: string, description: string) => {
    todosService
      .createTodo(title, description)
      .then((newTodo: ITodo | void) => {
        if (newTodo) {
          this.setState(state => ({
            todos: [...state.todos, newTodo]
          }));
        }
      });
  };

  public deleteTodo = (id: string): void => {
    todosService.deleteTodo(id).then(() => {
      this.setState(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
      }));
    });
  };

  public setTodoCheckedState = (id: string, isChecked: boolean): void => {
    todosService
      .setTodoCheckedState(id, isChecked)
      .then((newTodo: ITodo | void) => {
        if (newTodo) {
          this.setState(state => ({
            todos: state.todos.map(todo => (todo.id === id ? newTodo : todo))
          }));
        }
      });
  };

  public render() {
    return (
      <TodosContext.Provider
        value={{
          ...this.state,
          createTodo: this.createTodo,
          deleteTodo: this.deleteTodo,
          setTodoCheckedState: this.setTodoCheckedState
        }}
      >
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}
