import { IGraphNode } from "./graph-node.interface";

export class GraphNode<T> implements IGraphNode<T> {
  value: T;
  neighbours: number[];
  visited: boolean;
  pushed: boolean;

  constructor(value: T, neighbours: number[] = []) {
    this.value = value;
    this.neighbours = neighbours;
    this.visited = false;
    this.pushed = false;
  }
}
