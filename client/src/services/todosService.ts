import Todo, { ITodo, ITodoInput } from "../models/Todo";
import http from "./api";

let mockTodosResponse = {
  data: [
    {
      id: "1",
      title: "Idi u prodavnicu",
      description: "Idi u prodavnicu da kupis klopu",
      isChecked: true
    },
    {
      id: "2",
      title: "Nauci typescript",
      description:
        "Pogledaj kurs, procitaj dokumentaciju i napisi projekat za typescript",
      isChecked: false
    },
    {
      id: "3",
      title: "Nauci node",
      description:
        "Pogledaj kurs, procitaj dokumentaciju i napisi projekat za node",
      isChecked: false
    }
  ]
};

function getTodos(): Promise<{ data: ITodoInput[] }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockTodosResponse);
    }, 300);
  });
}

function createTodo(
  title: string,
  description: string
): Promise<{ data: ITodoInput }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newTodo = {
        id: `${+mockTodosResponse.data[mockTodosResponse.data.length - 1].id +
          1}`,
        title,
        description,
        isChecked: false
      };

      mockTodosResponse = { data: [...mockTodosResponse.data, newTodo] };

      resolve({ data: newTodo });
    }, 300);
  });
}

function deleteTodo(id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      mockTodosResponse = {
        data: mockTodosResponse.data.filter(todo => todo.id !== id)
      };

      resolve();
    }, 300);
  });
}

function setTodoCheckedState(
  id: string,
  isChecked: boolean
): Promise<{ data: ITodoInput }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const oldTodo = mockTodosResponse.data.find(todo => todo.id === id);
      if (oldTodo) {
        const newTodo = { ...oldTodo, isChecked };

        mockTodosResponse = {
          data: mockTodosResponse.data.map(todo =>
            todo.id === id ? newTodo : todo
          )
        };

        resolve({ data: newTodo });
      } else {
        throw new Error();
      }
    }, 300);
  });
}

class TodosService {
  public getTodos(): Promise<ITodo[]> {
    return getTodos().then(response => this.serializeTodos(response.data));
  }

  public createTodo(title: string, description: string): Promise<ITodo | void> {
    return createTodo(title, description)
      .then(response => this.serializeTodo(response.data))
      .catch(error => {
        this.normalizeError(error);
      });
  }

  public deleteTodo(id: string): Promise<void> {
    return deleteTodo(id).catch(error => {
      this.normalizeError(error);
    });
  }

  public setTodoCheckedState(
    id: string,
    isChecked: boolean
  ): Promise<ITodo | void> {
    return setTodoCheckedState(id, isChecked)
      .then(response => this.serializeTodo(response.data))
      .catch(error => {
        this.normalizeError(error);
      });
  }

  private serializeTodos(todos: ITodoInput[]): ITodo[] {
    return todos.map(todo => this.serializeTodo(todo));
  }

  private serializeTodo(todo: ITodoInput): ITodo {
    return new Todo(todo);
  }

  private normalizeError(error: any): void {
    throw new Error(`Todos service error: ${error.message}`);
  }
}

const todosService = new TodosService();

export default todosService;
