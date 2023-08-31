import { Character } from './character.js';

export class Battle {
  constructor() {
    this.players = {};
    this.currentId = 0;
  }

  // increment currentId by one
  assignId() {
    this.currentId += 1;
    return this.currentId;
  }

  // return the number of players currently in battle
  numberOfPlayers() {
    return Object.keys(this.players).length;
  }

  // add players to battle, taking any number of players as an argument
  addPlayer() {
    for (let i=0; i < arguments.length; i++) {
      let id = this.assignId();
      this.players[id] = arguments[i];
    }
  }
 
  rollInitiative() {
    
  }





}