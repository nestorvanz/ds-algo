import { Node } from "../node/node.class";
import { List } from "../list/list.class";
import { Queue } from "../queue/queue.class";

type Filter<T> = (value: T) => boolean

export class Graph<T> {
  private _root: Node<T>;
  private list: List<T>;
  private queue: Queue<T>;

  constructor(root: Node<T> = null) {
    this._root = root;
    this.list = new List();
    this.queue = new Queue();
  }

  get root(): Node<T> { return this._root; }

  breadthFirstSearch(node: Node<T>, filter?: Filter<T>): List<T> {
    if (this.queue.length == 0) this.pushNode(node);
    for (let neighbour of node.neighbours) {
      if (!neighbour.pushed) {
        this.pushNode(neighbour);
      }
    }
    for (let neighbour of node.neighbours) {
      this.breadthFirstSearch(neighbour, filter);
    }
    return this.queue;
  }

  depthFirstSearch(node: Node<T>, filter?: Filter<T>): List<T> {
    if (node.visited) return;
    this.visitNode(node, filter);
    for (let neighbour of node.neighbours) {
      this.depthFirstSearch(neighbour, filter);
    }
    return this.list;
  }

  private pushNode(node: Node<T>, filter?: Filter<T>) {
    node.pushed = true;
    if ((filter && filter(node.value)) || !filter) {
      this.queue.enqueue(node.value);
    }
  }

  private visitNode(node: Node<T>, filter?: Filter<T>) {
    node.visited = true;
    if ((filter && filter(node.value)) || !filter) {
      this.list.add(node.value);
    }
  }
}