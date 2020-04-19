export interface INode<T> {
  value: T;
  next: INode<T>;
  prev: INode<T>;
  neighbours: INode<T>[];
  visited: boolean;
  pushed: boolean;
}