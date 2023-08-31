import {Character} from './../src/js/character.js';

describe('Character', () => {

  let character;
  beforeEach(() => {
    character = new Character(3, 100);
  });

  test('should create an undefined character object', () => {
    let character = new Character();
    expect(character).toEqual({strength: undefined, health: undefined, inventory: {}});
  });

  test('should compute damage caused based on strength', () => {
    let damage = character.dealDamage();
    expect(damage).toEqual(3);
  });

  test('should compute character health value  taken', () => {
    character.takeDamage(30);
    expect(character.health).toEqual(70);
  });

  test('should add an item object to the character inventory', () => {
    const swordItem = {type: "Sword", attack: 10};
    character.addItem(swordItem);
    expect(character.inventory).toEqual({Sword: {type: "Sword", attack: 10}});
  });

  test('should recognize if item is a weapon when adding to character inventory', () => {
    const swordItem = {type: "Sword", attack: 10};
    character.addItem(swordItem);
    expect(character.inventory).toEqual({Weapon: {type: "Sword", attack: 10}});
  });

});


