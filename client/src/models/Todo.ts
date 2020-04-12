export interface ITodoInput {
  id: string;
  title: string;
  description: string;
  isChecked: boolean;
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  isChecked: boolean;
}

export default class Todo {
  public id: string;
  public title: string;
  public description: string;
  public isChecked: boolean;

  constructor({ id, title, description, isChecked }: ITodo) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isChecked = isChecked;
  }
}
