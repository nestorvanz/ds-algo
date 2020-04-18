import { expect } from 'chai';
import 'mocha';

import { Queue } from "./queue.class";

describe('Queue', () => {
  let queue: Queue<number>;
  const arr = [1, 2, 3, 4, 5, 6];

  beforeEach(() => {
    queue = new Queue();
    for (const i of arr) {
      queue.enqueue(i); 
    }
  })

  it('length: should have value ' + arr.length, () => {
    const result = queue.length;
    expect(result).to.equal(arr.length);
    expect(queue.length).to.equal(arr.length);
  });

  it('toArray: should be an expected array', () => {
    const result = queue.toArray();
    expect(result.toString()).to.equal(arr.toString());
  });

  it('toArray: should be an expected array', () => {
    let value = arr.splice(0, 1)[0];
    const node = queue.dequeue();
    const result = queue.toArray();
    expect(result.toString()).to.equal(arr.toString());
    expect(node).to.equal(value);
  });

  it('toArray: should be an empty array', () => {
    let node;
    for (const i of arr) {
      node = queue.dequeue(); 
    }
    const result = queue.toArray();
    expect(result.toString()).to.equal([].toString());
    expect(node).to.equal(arr[arr.length -1]);
  });
});