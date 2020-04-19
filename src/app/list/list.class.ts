import { Node } from "../node/node.class";
import { IList } from "./list.interface";
import { Filter } from "../../types";

export class List<T> implements IList<T> {
  _root: Node<T>;
  _last: Node<T>;
  _length: number;

  constructor (nodes: Node<T>[] = []) {
    this._root = this._last = null;
    this._length = 0;

    for (const node of nodes) {
      this.addNode(node);
    }
  }

  get root(): Node<T> { return this._root; }
  get last(): Node<T> { return this._last; }
  get length(): number { return this._length; }

  public add(value: T) {
    this.addNode(new Node(value));
  }

  public addNode(node: Node<T>) {
    node.prev = this._last;
    if (this._last) {
      this._last.next = node;
    }
    if (this._root == null) {
      this._root = node;
    }
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

  public reverse() {
    let node = this._root;
    this._root = this._last;
    this._last = node;
    while (node != null) {
      const next = node.next;
      node.next = node.prev;
      node.prev = next;
      node = node.prev;
    }
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