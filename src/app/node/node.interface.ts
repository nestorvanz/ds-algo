import { Node } from "./node.class";
import { List } from "../list/list.class";

export interface INode<T> {
  id: string;
  value: T;
  next: Node<T>;
  prev: Node<T>;
  left: Node<T>;
  right: Node<T>;
  neighbours: Node<T>[];
}