import {Battle} from './../src/js/battle.js';
import {Character} from './../src/js/character.js';

describe ('Battle', () => {

  let battle;
  beforeEach( () => {
    battle = new Battle();
  });

  test('should create a battle object', () => {
    expect(battle.players).toEqual({});
  });

  test('should return the number of players currently in battle', () => {
    let number = battle.numberOfPlayers();
    expect(number).toEqual(0);
  });

  test('should add character object to list of players in battle', () => {
    let warrior = new Character(3, 100);
    battle.addPlayer(warrior);
    expect(battle.players).toEqual({1: {strength: 3, health: 100, inventory: {}}});
  });


});