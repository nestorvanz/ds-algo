import { expect } from 'chai';
import 'mocha';

import { List } from "./list.class";

describe('List', () => {
  let list: List<number>;
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  beforeEach(() => {
    list = new List();
    for (const i of arr) {
      list.add(i);
    }
  })

  it('reverse: should return and reversed list', () => {
    list.reverse();
    const result = list.toArray();
    const rev = arr.reverse();
    expect(result.toString()).to.equal(rev.toString());
  });

  it('toArray: should return an empty array', () => {
    list = new List();
    const result = list.toArray();
    expect(result.toString()).to.equal([].toString());
  });

  it('toArray: should return an exptected array arr', () => {
    const result = list.toArray();
    expect(result.toString()).to.equal(arr.toString());
  });
});