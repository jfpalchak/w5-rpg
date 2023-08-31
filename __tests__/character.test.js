import {Character} from './../src/js/character.js';

describe('Character', () => {

  let character;
  let swordItem;
  let shieldItem;
  beforeEach(() => {
    character = new Character(3, 100);
    swordItem = {item: "weapon", type: "sword", attack: 10};
    shieldItem = {item: "armor", type: "shield", defense: 15};
  });

  test('should create an undefined character object', () => {
    let character = new Character();
    expect(character).toEqual({strength: undefined, health: undefined, inventory: {}});
  });

  test('should compute damage caused based on strength', () => {
    let damage = character.dealDamage();
    expect(damage).toEqual(3);
  });

  test('should compute character health value after taking damage', () => {
    character.takeDamage(30);
    expect(character.health).toEqual(70);
  });

  test('should add an item to the character inventory', () => {
    character.addItem(swordItem);
    expect(character.inventory).toEqual({weapon: {item: "weapon", type: "sword", attack: 10}});
  });

  test('should compute damage caused based on character weapon', () => {
    character.addItem(swordItem);
    let damage = character.dealDamage();
    expect(damage).toEqual(30);
  });

  test('should compute character health value after taking damage, based on character armor', () => {
    character.addItem(shieldItem);
    character.takeDamage(30);
    expect(character.health).toEqual(85);
  });

});


