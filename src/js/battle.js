import { Character } from './character.js';

export class Battle {
  constructor() {
    this.players = {};
  }

  numberOfPlayers() {
    return Object.keys(this.players).length;
  }

  addPlayer(character) {
    let id = Object.keys(this.players).length + 1;
    this.players[id] = character;
  }





}