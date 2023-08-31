import {Battle} from './../src/js/battle.js';
import {Character} from './../src/js/character.js';

describe ('Battle', () => {

  let battle;
  let warrior;
  let wizard;
  beforeEach( () => {
    battle = new Battle();
    warrior = new Character(3, 0, 100);
    wizard = new Character(0, 3, 100);
  });

  test('should create a battle object', () => {
    expect(battle.players).toEqual({});
    expect(battle.currentId).toEqual(0);
  });

  test('should return currentId after incrementing currentId by 1', () => {
    let id = battle.assignId();
    expect(id).toEqual(1);
    expect(battle.currentId).toEqual(1);
  });

  test('should return the number of players currently in battle', () => {
    let number = battle.numberOfPlayers();
    expect(number).toEqual(0);
  });

  test('should add character object to list of players in battle', () => {
    battle.addPlayer(warrior);
    expect(battle.players).toEqual({1: {strength: 3, intelligence: 0, health: 100, inventory: {}}});
  });

  test('should be able to add multiple character objects to list of players in battle', () => {
    battle.addPlayer(warrior, wizard);
    expect(battle.players[1]).toEqual({strength: 3, intelligence: 0, health: 100, inventory: {}});
    expect(battle.players[2]).toEqual({strength: 0, intelligence: 3, health: 100, inventory: {}});
  });


});