import { INode } from "./node.interface";

export class Node<T> implements INode<T> {
  value: T;
  next: INode<T>;
  prev: INode<T>;

  constructor(value: T) {
    this.value = value;
  }
}