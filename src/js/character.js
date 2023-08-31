export class Character {
  constructor(strength, health) {
    this.strength = strength;
    this.health = health;
    this.inventory = {};
  }

  dealDamage() {
    let damage = this.strength;
    return damage;

  }

  takeDamage(damage) {
    this.health = this.health - damage;
  }

  
}






// if (has armor) 
//   damage - armor; // reduce damage
