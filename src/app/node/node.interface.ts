export interface INode<T> {
  value: T;
  next: INode<T>;
  prev: INode<T>;
}