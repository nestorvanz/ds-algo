import { Node } from "../node/node.class";

export interface IList<T> {
  _root: Node<T>;
  _last: Node<T>;
  _length: number;
}