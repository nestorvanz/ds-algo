import { Node } from "../node/node.class";
import { List } from "../list/list.class";
import { Queue } from "../queue/queue.class";
import { IGraph } from "./graph.interface";
import { Filter } from "../../types";

export class Graph<T> implements IGraph<T> {
  protected _list: List<T>;

  constructor(nodes: Node<T>[] = []) {
    this._list = new List();
    for (const node of nodes) {
      this._list.addNode(node);
    }
  }

  get list(): List<T> { return this._list; }

  public breadthFirstSearch(node: Node<T>, filter?: Filter<T>): List<T> {
    const list: List<T> = new List();
    const queue: Queue<T> = new Queue(); 
    const visited = new Set<string>([node.id]);

    bfs(node);
    return list;

    function bfs(node: Node<T>) {
      if (node == null) return;
      
      if ((filter && filter(node.value)) || !filter) {
        list.add(node.value);
      }

      node.neighbours.forEach(neighbour => {
        if (!visited.has(neighbour.id)) {
          queue.enqueueNode(neighbour);
          visited.add(neighbour.id);
        }
      });

      bfs(queue.dequeueNode());
    }    
  }
  
  public depthFirstSearch(node: Node<T>, filter?: Filter<T>): List<T> {
    const list: List<T> = new List();
    const visited = new Set<string>();

    dfs(node);

    function dfs(node: Node<T>) {
      if (visited.has(node.id)) return;
      visited.add(node.id);

      if ((filter && filter(node.value)) || !filter) {
        list.add(node.value);
      }

      node.neighbours.forEach(neighbour => {
        dfs(neighbour);
      });
    }

    return list;
  }
}