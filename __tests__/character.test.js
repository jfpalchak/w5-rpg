import {Character} from './../src/js/character.js';

describe('Character', () => {

  let character;
  beforeEach(() => {
    character = new Character(3, 100);
  });

  test('should create an character object', () => {
    let character = new Character();
    expect(character).toEqual({strength: undefined, health: undefined, inventory: {}});
  });

  test('should compute damage caused', () => {
    let damage = character.dealDamage();
    expect(damage).toEqual(3);
  });

  test('should compute damage taken', () => {
    character.takeDamage(30);
    expect(character.health).toEqual(70);
  });

});


