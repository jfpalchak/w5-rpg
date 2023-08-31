import {Item} from './../src/js/item.js';

describe('Item', () => {

  test('should create an Item object', () => {
    let newItem = new Item("weapon");
    expect(newItem).toEqual({item: "weapon"});
  });

  
});