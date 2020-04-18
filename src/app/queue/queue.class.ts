import { Node } from "../node/node.class";
import { List } from "../list/list.class";

export class Queue<T> extends List<T> {
  enqueue(value: T) {
    let node: Node<T> = new Node(value);
    this.checkRoot(node);
    this._last.next = node;
    this._last = node;
    this._length ++;
  }

  dequeue(): T {
    const node: Node<T> = this._root;
    this._root = this._root.next;
    if (!this._root) this._last = null;
    this._length --;
    return node.value;
  }
}