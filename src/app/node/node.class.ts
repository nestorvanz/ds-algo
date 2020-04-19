import { INode } from "./node.interface";

export class Node<T> implements INode<T> {
  value: T;
  next: INode<T>;
  prev: INode<T>;
  neighbours: INode<T>[];
  visited: boolean;
  pushed: boolean;

  constructor(value: T) {
    this.value = value;
    this.next = this.prev = null;
    this.neighbours = [];
    this.visited = false;
    this.pushed = false;
  }
}