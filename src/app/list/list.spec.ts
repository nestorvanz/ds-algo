import { expect } from 'chai';
import 'mocha';

import { List } from "./list.class";

describe('Stack', () => {
  let list: List<number>;

  beforeEach(() => {
    list = new List();
  })

  it('toArray: should return an empty array', () => {
    const result = list.toArray();
    expect(result).to.have.length(0);
  });

  it('toArray: should return and 3 length array', () => {
    list.add(1);
    list.add(2);
    list.add(3);

    const result = list.toArray();
    expect(result).to.have.length(3);
  });

  it('toArray: should return an exptected array', () => {
    const arr = [1, 2, 3];
    for (const i of arr) {
      list.add(i); 
    }
    const result = list.toArray();
    expect(result.toString()).to.equal(arr.toString());
  });
});