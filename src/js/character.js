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

  addItem(newItem) {
    this.inventory[newItem.item] = newItem;
  }
  

}






// if (has armor) 
//   damage - armor; // reduce damage
