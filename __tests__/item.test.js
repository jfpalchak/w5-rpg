import {Item, Weapon, Armor} from './../src/js/item.js';

describe('Item', () => {

  test('should create an Item object', () => {
    let newItem = new Item("weapon", 100);
    expect(newItem).toEqual({
      item: "weapon",
      value: 100
    });
  });

});

describe('Weapon', () => {

  test('should create a Weapon object, as an extension of Item', () => {
    let newWeapon = new Weapon("sword", 10);
    expect(newWeapon).toEqual({
      item: "weapon",
      type: "sword",
      attack: 10,
      value: 200
    });
  });

});

describe('Armor', () => {

  test('should create an Armor object, as an extension of Item', () => {
    let newArmor = new Armor("shield", 15);
    expect(newArmor).toEqual({
      item: "armor",
      type: "shield",
      defense: 15,
      value: 150
    });
  });

});