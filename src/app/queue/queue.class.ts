import { Node } from "../node/node.class";
import { List } from "../list/list.class";

export class Queue<T> extends List<T> {
  enqueue(value: T) {
    this.enqueueNode(new Node(value));
  }

  enqueueNode(node: Node<T>) {
    let clone = node.clone();
    this.checkRoot(clone);
    this._last.next = clone;
    this._last = clone;
    this._length ++;
  }

  dequeue(): T {
    return this.dequeueNode().value;
  }

  dequeueNode(): Node<T> {
    const node: Node<T> = this._root;
    if (node) {
      this._root = this._root.next;
      if (!this._root) this._last = null;
      this._length --;
    }
    return node;
  }
}