import { v4 as uuidv4 } from 'uuid';
import { INode } from "./node.interface";

export class Node<T> implements INode<T> {
  id: string;
  value: T;
  next: Node<T>;
  prev: Node<T>;
  neighbours: Node<T>[];
  visited: boolean;
  pushed: boolean;

  constructor(value: T) {
    this.id = uuidv4();
    this.value = value;
    this.next = this.prev = null;
    this.neighbours = [];
    this.visited = false;
    this.pushed = false;
  }
}