import {Battle} from './../src/js/battle.js';
import {Character} from './../src/js/character.js';

describe ('Battle', () => {

  test('should create a battle object', () => {
    let battle = new Battle();
    expect(battle.players).toEqual({});
  });


});