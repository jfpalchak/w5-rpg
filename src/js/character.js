export class Character {
  constructor(strength, health) {
    this.strength = strength;
    this.health = health;
    this.inventory = {};
  }

  // calculate damage dealt by character
  dealDamage() {
    let damage = this.strength;
    if (this.inventory.weapon) {
      damage = this.strength * this.inventory.weapon.attack;
    }
    return damage;
  }

  // calculate character health based on damage received
  takeDamage(damage) {
    this.health = this.health - damage;
  }

  // add item object to character inventory
  addItem(newItem) {
    this.inventory[newItem.item] = newItem;
  }

}
