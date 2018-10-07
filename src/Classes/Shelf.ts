import { ShelfItem } from "../Interface/IShelfItem";

export default class Shelf<T extends ShelfItem> {
  private _item: Array<T> = new Array<T>();

  Add(newItem: T) {
    this._item.push(newItem);
  }

  GetFirst(): T {
    return this._item[0];
  }

  Find(title: string): T {
    return this._item.filter(item => item.title === title)[0];
  }

  GetTitles(): void {
    this._item.forEach(item => console.log(item.title));
  }
}
