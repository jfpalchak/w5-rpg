import {Character} from './../src/js/character.js';
import {Weapon, Armor} from './../src/js/item.js';


describe('Character', () => {

  let character;
  let swordItem;
  let shieldItem;
  beforeEach(() => {
    character = new Character(3, 3);
    swordItem = new Weapon("sword", 10);
    shieldItem = new Armor("shield", 15);
  });

  test('should create a character object', () => {
    let character = new Character();
    expect(character).toEqual({
      level: 1,
      strength: undefined,
      intelligence: undefined, 
      health: 100, 
      inventory: {}
    });
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
    expect(character.inventory).toEqual({weapon: swordItem});
  });

  test('should remove an item from the character inventory', () => {
    character.addItem(swordItem);
    character.removeItem("weapon");
    expect(character.inventory).toEqual({});
  });

  test('should compute damage caused based on character weapon', () => {
    character.addItem(swordItem);
    let damage = character.dealDamage();
    expect(damage).toEqual(30);
  });

  test('should compute damage reduction from armor, when damage > armor defense', () => {
    character.addItem(shieldItem);
    character.takeDamage(30);
    expect(character.health).toEqual(85);
  });

  test('should compute damage reduction from armor, when damage <= armor defense', () => {
    character.addItem(shieldItem);
    character.takeDamage(10);
    expect(character.health).toEqual(95);
  });

});


