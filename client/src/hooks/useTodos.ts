import React, { useState, useEffect, useReducer } from "react";

import { ITodo } from "../models/Todo";
import todosService from "../services/todosService";

export default function useTodos(): [
  ITodo[],
  (title: string, description: string) => void,
  (id: string) => void,
  (id: string, isChecked: boolean) => void,
  boolean
] {
  const [todos, setTodos] = useState([] as ITodo[]);
  const [isLoading, setLoading] = useState(false);

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
