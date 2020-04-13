import React, { Component } from "react";

import { ITodo } from "../../models/Todo";
import todosService from "../../services/todosService";
import Grid from "./Grid";
import TodosOrganizationWidget from "./TodosOrganizationWidget";

interface IState {
  todos: ITodo[];
  isLoading: boolean;
}

export default class TodosDashboard extends Component<{}, IState> {
  state = {
    todos: [],
    isLoading: true
  };

  public componentDidMount() {
    todosService.getTodos().then(todos => {
      this.setState({
        todos,
        isLoading: false
      });
    });
  }

  public createTodo = (title: string, description: string) => {
    todosService.createTodo(title, description).then(newTodo => {
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
    todosService.setTodoCheckedState(id, isChecked).then(newTodo => {
      if (newTodo) {
        this.setState(state => ({
          todos: state.todos.map(todo => (todo.id === id ? newTodo : todo))
        }));
      }
    });
  };

  public render() {
    return (
      <Grid
        leftComponent={
          <TodosOrganizationWidget
            todos={this.state.todos}
            createTodo={this.createTodo}
            deleteTodo={this.deleteTodo}
            setTodoCheckedState={this.setTodoCheckedState}
            isLoading={this.state.isLoading}
          />
        }
        rightBottomComponent={() => <div />}
        rightTopComponent={() => <div />}
      />
    );
  }
}
