import React, { useState, useEffect, useReducer } from "react";

import { ITodo } from "../models/Todo";
import todosService from "../services/todosService";

const SET_TODOS = "SET_TODOS";
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_TODO_CHECKED_STATE = "SET_TODO_CHECKED_STATE";
const SET_IS_LOADING = "SET_IS_LOADING";

interface ITodoAction {
  type: string;
  payload: ITodo[] | ITodo | string;
}

const setTodosAction = (todos: ITodo[]): ITodoAction => ({
  type: SET_TODOS,
  payload: todos
});

const createTodoAction = (todo: ITodo): ITodoAction => ({
  type: CREATE_TODO,
  payload: todo
});

const deleteTodoAction = (id: string): ITodoAction => ({
  type: DELETE_TODO,
  payload: id
});

const reducer = (
  state: { isLoading: boolean; todos: ITodo[] },
  action: ITodoAction
) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
  }
};

export default function useTodos(): [
  ITodo[],
  (title: string, description: string) => void,
  (id: string) => void,
  (id: string, isChecked: boolean) => void,
  boolean
] {
  const [state, dispatch] = useReducer();

  useEffect(() => {
    setLoading(true);
    todosService.getTodos().then(todosResponse => setTodos(todosResponse));
    setLoading(false);
  }, []);

  const createTodo = (title: string, description: string) => {
    todosService.createTodo(title, description).then(newTodo => {
      if (newTodo) {
        setTodos(prevTodos => [...prevTodos, newTodo]);
      }
    });
  };

  const deleteTodo = (id: string): void => {
    todosService.deleteTodo(id).then(() => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    });
  };

  const setTodosCheckState = (id: string, isChecked: boolean): void => {
    todosService.setTodoCheckedState(id, isChecked).then(newTodo => {
      if (newTodo) {
        setTodos(prevTodos =>
          prevTodos.map(todo => (todo.id === id ? newTodo : todo))
        );
      }
    });
  };

  return [todos, createTodo, deleteTodo, setTodosCheckState, isLoading];
}
