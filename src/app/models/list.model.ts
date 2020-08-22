import { ListItem } from "./list-item.model";

export class List {
  id: number;
  title: string;
  creationDate: Date;
  finishDate: Date;
  completed: boolean;
  items: ListItem[];

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.creationDate = new Date();
    this.completed = false;
    this.items = [];
  }
}
