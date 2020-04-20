import { expect } from 'chai';
import 'mocha';

import { Graph } from "./graph.class";
import { Node } from "../node/node.class";
import { List } from '../list/list.class';

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
  // DEL(6)-BFS: [1, 2, 3, 4, 5]

  let graph: Graph<number>;
  let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  let bfs: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  let dfs: number[] = [1, 2, 4, 5, 3, 6, 7, 8];
  let del: number[] = [1, 2, 3, 4, 5];
  let nodes: Node<number>[];

  beforeEach(() => {
    nodes = [];
    for (const i of arr) {
      nodes.push(new Node(i));
    }

    nodes[0].addNeighbours([nodes[1], nodes[2]]);
    nodes[1].addNeighbours([nodes[3], nodes[4]]);
    nodes[3].addNeighbours([nodes[4]]);
    nodes[2].addNeighbours([nodes[5]]);
    nodes[5].addNeighbours([nodes[6], nodes[7]]);

    graph = new Graph(nodes);
  })
  
  it('breadthFirstSearch: should be equal to array bfs', () => {
    const result = graph.breadthFirstSearch(graph.list.root).toArray();
    expect(result.toString()).to.equal(bfs.toString());
  });

  it('depthFirstSearch: should be equal to array dfs', () => {
    const result = graph.depthFirstSearch(graph.list.root).toArray();
    expect(result.toString()).to.equal(dfs.toString());
  });

  // it('remove node (6): should be equal to array del', () => {
  //   nodes[5].remove();
  //   console.log(nodes[2].neighbours);
  //   const result = graph.breadthFirstSearch(graph.list.root).toArray();
  //   expect(result.toString()).to.equal(del.toString());
  // });
});