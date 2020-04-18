import { IGraphNode } from "./graph-node.interface";

export class GraphNode<T> implements IGraphNode<T> {
  value: T;
  visited: boolean;
  neighbours: number[];

  constructor(value: T, neighbours: number[] = []) {
    this.value = value;
    this.visited = false;
    this.neighbours = neighbours;
  }
}
