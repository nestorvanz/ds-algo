export interface IGraphNode<T> {
  value: T;
  visited: boolean;
  neighbours: number[];
}