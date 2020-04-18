import { Node } from "../node/node.class";
import { IList } from "./list.interface";
import { Filter } from "../../types";

export class List<T> implements IList<T> {
  _root: Node<T>;
  _last: Node<T>;
  _length: number;

  constructor () {
    this._root = this._last = null;
    this._length = 0;
  }

  get root(): Node<T> { return this._root; }
  get last(): Node<T> { return this._last; }
  get length(): number { return this._length; }

  public add(value: T) {
    const node: Node<T> = new Node(value);
    this.checkRoot(node);
    this._last.next = node;
    this._last = node;
    this._length ++;
  }

  protected checkRoot(node: Node<T>) {
    if (!this._root) {
      this._root = node;
      this._last = node;
    };
  }

  public filter(filter: Filter<T>): List<T> {
    const list: List<T> = new List();
    let node: Node<T> = this._root;
    while (node != null) {
      if (filter(node.value)) {
        list.add(node.value);
      }
      node = node.next;
    }
    return list;
  }

  public toArray(): T[] {
    let array: T[] = [];
    let node: Node<T> = this._root;
    let count = 0;
    while (count < this.length) {
      array.push(node.value);
      node = node.next;
      count ++;
    }
    return array;
  }
}