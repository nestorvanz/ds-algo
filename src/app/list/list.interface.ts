import { Node } from "../node/node.class";

export interface IList<T> {
  root: Node<T>;
  last: Node<T>;
  length: number;
}