import { Node } from "../node/node.class";
import { List } from "../list/list.class";

export class Stack<T> extends List<T> {
  push(value: T) {
    const node: Node<T> = new Node(value);
    node.prev = this._last;
    this.checkRoot(node);
    this._last.next = node;
    this._last = node;
    this._length ++;
  }

  pop(): T {
    const node: Node<T> = this.last;
    this._last = this._last.prev;
    if (!this.last) this._root = null;
    this._length --;
    return node.value;
  }
}