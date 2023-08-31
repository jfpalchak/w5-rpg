import {Item, Weapon} from './../src/js/item.js';

describe('Item', () => {

  test('should create an Item object', () => {
    let newItem = new Item("weapon");
    expect(newItem).toEqual({item: "weapon"});
  });

});

describe('Weapon', () => {

  test('should create a Weapon object, as an extension of Item', () => {
    let newWeapon = new Weapon("sword", 10);
    expect(newWeapon).toEqual({
      item: "weapon",
      type: "sword",
      attack: 10
    });
  });

});

describe('Armor', () => {

  test('should create an Armor object, as an extension of Item', () => {
    let newWeapon = new Weapon("shield", 15);
    expect(newWeapon).toEqual({
      item: "armor",
      type: "shield",
      defense: 15
    });
  });

});