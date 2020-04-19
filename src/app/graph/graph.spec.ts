import { expect } from 'chai';
import 'mocha';

import { Graph } from "./graph.class";
import { Node } from "../node/node.class";

describe('Graph', () => {
  //    -- Graph --
  //    (2)-----(4)
  //   /   \   / 
  // (1)    (5)  (7) 
  //   \        /
  //    (3)---(6)---(8)
  // 
  // BFS: [1, 2, 3, 4, 5, 6, 7, 8]
  // DFS: [1, 2, 4, 5, 3, 6, 7, 8]

  let graph: Graph<number>;
  let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  let bfs: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  let dfs: number[] = [1, 2, 4, 5, 3, 6, 7, 8];
  let nodes: Node<number>[];

  beforeEach(() => {
    nodes = [];
    for (const i of arr) {
      nodes.push(new Node(i));
    }
    nodes[0].neighbours = [nodes[1], nodes[2]];
    nodes[1].neighbours = [nodes[3], nodes[4]];
    nodes[2].neighbours = [nodes[5]];
    nodes[5].neighbours = [nodes[6], nodes[7]];

    graph = new Graph(nodes[0]);
  })

  
  it('breadthFirstSearch: should be equal to array bfs', () => {
    const result = graph.breadthFirstSearch(graph.root).toArray();
    expect(result.toString()).to.equal(bfs.toString());
  });

  it('depthFirstSearch: should be equal to array dfs', () => {
    const result = graph.depthFirstSearch(graph.root).toArray();
    expect(result.toString()).to.equal(dfs.toString());
  });
});