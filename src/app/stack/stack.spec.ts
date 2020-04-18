import { expect } from 'chai';
import 'mocha';

import { Stack } from "./stack.class";

describe('Stack', () => {
  let stack: Stack<number>;
  const arr = [1, 2, 3, 4, 5, 6];

  beforeEach(() => {
    stack = new Stack();
    for (const i of arr) {
      stack.push(i); 
    }
  })

  it('length: should have value ' + arr.length, () => {
    const result = stack.length;
    expect(result).to.equal(arr.length);
  });

  it('toArray: should be an expected array', () => {
    const result = stack.toArray();
    expect(result.toString()).to.equal(arr.toString());
  });

  it('toArray: should be an expected array', () => {
    arr.pop();
    stack.pop();
    const result = stack.toArray();
    expect(result.toString()).to.equal(arr.toString());
  });

  it('toArray: should be an empty array', () => {
    for (const i of arr) {
      stack.pop(); 
    }
    const result = stack.toArray();
    expect(result.toString()).to.equal([].toString());
  });
});