import { v4 as uuidv4 } from 'uuid';
import { INode } from "./node.interface";

export class Node<T> implements INode<T> {
  id: string;
  value: T;
  next: INode<T>;
  prev: INode<T>;
  neighbours: INode<T>[];
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