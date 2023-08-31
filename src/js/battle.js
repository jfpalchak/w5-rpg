import { Character } from './character.js';

export class Battle {
  constructor() {
    this.players = {};
    this.currentId = 0;
  }

  assignId() {
    this.currentId += 1;
    return this.currentId;
  }

  // numberOfPlayers() {
  //   return Object.keys(this.players).length;
  // }

  addPlayer(character) {
    let id = this.assignId();
    this.players[id] = character;
  }





}