export interface IGraphNode<T> {
  value: T;
  neighbours: number[];
  visited: boolean;
  pushed: boolean;
}