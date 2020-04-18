import { GraphNode } from "./graph-node.class";

type Filter<T> = (value: T) => boolean

export class Graph<T> {
  private nodes: GraphNode<T>[];
  private filtered: GraphNode<T>[];

  constructor(nodes: GraphNode<T>[]) {
    this.nodes = nodes;
    this.filtered = [];
  }

  depthFirstSearch(index: number, filter?: Filter<T> ): GraphNode<T>[] {
    const node = this.nodes[index];
    
    if (node.visited) return;
    node.visited = true;

    if ((filter && filter(node.value)) || !filter) {
      this.filtered.push(node);
    }

    for (let neighbour of node.neighbours) {
      this.depthFirstSearch(neighbour, filter);
    }

    return this.filtered;
  }
}