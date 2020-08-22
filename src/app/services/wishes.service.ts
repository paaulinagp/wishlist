import { Injectable } from "@angular/core";
import { List } from "../models/list.model";

@Injectable({
  providedIn: "root",
})
export class WishesService {
  lists: List[] = [];

  constructor() {
    const lista1 = new List("prueba 1");
    const lista2 = new List("prueba 2");

    this.lists.push(lista1, lista2);
    console.log(this.lists);
  }
}
