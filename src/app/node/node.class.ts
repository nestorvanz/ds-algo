import { v4 as uuidv4 } from 'uuid';
import { INode } from "./node.interface";
import { List } from '../list/list.class';

export class Node<T> implements INode<T> {
  id: string;
  value: T;
  next: Node<T>;
  prev: Node<T>;
  left: Node<T>;
  right: Node<T>;
  neighbours: Node<T>[];

  constructor(value: T) {
    this.id = uuidv4();
    this.value = value;
    this.next = this.prev = this.left = this.right = null;
    this.neighbours = [];
  }

  get values(): INode<T> {
    return {
      id: this.id,
      value: this.value,
      next: this.next,
      prev: this.prev,
      left: this.left,
      right: this.right,
      neighbours: this.neighbours,
    }
  }

  set values(values: INode<T>) {
    if (values) {
      this.id = values.id;
      this.value = values.value;
      this.next = values.next;
      this.prev = values.prev;
      this.left = values.left;
      this.right = values.right;
      this.neighbours = values.neighbours;
    }
  }

  addNeighbour(node: Node<T>) {
    this.neighbours.push(node);
    node.neighbours.push(this);
  }

  addNeighbours(nodes: Node<T>[]) {
    nodes.forEach(node => {
      this.addNeighbour(node);
    });
  }

  public clone() {
    const node = new Node(this.value);
    node.values = this.values;
    return node;
  }

  public remove() {
    const prev = this.prev;
    const next = this.next;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
  }
}