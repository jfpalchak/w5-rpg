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
 
  // return an array of shuffled player keys, representing turn order
  // Utilizes the Fisher-Yates Sorting Algorithm
  rollInitiative() {
    let keys = Object.keys(this.players);
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [keys[i], keys[j]] = [keys[j], keys[i]];
    }
    return keys;
  }

  // according to initiative, each player takes a turn attacking
  playRound(turnOrder) {

  }


}