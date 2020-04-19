import { Node } from "../node/node.class";
import { List } from "../list/list.class";
import { Queue } from "../queue/queue.class";

type Filter<T> = (value: T) => boolean

export class Graph<T> {
  private _root: Node<T>;

  constructor(root: Node<T> = null) {
    this._root = root;
  }

  get root(): Node<T> { return this._root; }

  public breadthFirstSearch(node: Node<T>, filter?: Filter<T>): List<T> {
    const queue: Queue<T> = new Queue();
    this.bfs(queue, node, filter);
    return queue;
  }
  
  private bfs(queue: Queue<T>, node: Node<T>, filter?: Filter<T>) {
    if (queue.length == 0) this.enqueueNode(queue, node);
    for (let neighbour of node.neighbours) {
      if (!neighbour.pushed) {
        this.enqueueNode(queue, neighbour);
      }
    }
    for (let neighbour of node.neighbours) {
      this.bfs(queue, neighbour, filter);
    }
  }
  
  public depthFirstSearch(node: Node<T>, filter?: Filter<T>): List<T> {
    const list: List<T> = new List();
    this.dfs(list, node, filter);
    return list;
  }

  private dfs(list: List<T>, node: Node<T>, filter?: Filter<T>): List<T> {
    if (node.visited) return list;
    this.visitNode(list, node, filter);
    for (let neighbour of node.neighbours) {
      this.dfs(list, neighbour, filter);
    }
    return list;
  }

  private enqueueNode(queue: Queue<T>, node: Node<T>, filter?: Filter<T>) {
    node.pushed = true;
    if ((filter && filter(node.value)) || !filter) {
      queue.enqueue(node.value);
    }
  }

  private visitNode(list: List<T>, node: Node<T>, filter?: Filter<T>) {
    node.visited = true;
    if ((filter && filter(node.value)) || !filter) {
      list.add(node.value);
    }
  }
}