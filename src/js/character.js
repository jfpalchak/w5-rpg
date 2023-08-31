export class Character {
  constructor(strength, intelligence) {
    this.level = 1;
    this.experience = 0;
    this.strength = strength;
    this.intelligence = intelligence;
    this.health = 100;
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

  // calculate character health based on damage and armor
  takeDamage(damage) {
    if (this.inventory.armor) {
      if (damage > this.inventory.armor.defense) {
        damage = damage - this.inventory.armor.defense;
      } else {
        damage = Math.ceil(damage / 2);
      }
    } 
    this.health = this.health - damage;
  }

  // add item object to character inventory
  addItem(newItem) {
    this.inventory[newItem.item] = newItem;
  }

  // remove item from inventory, according to item type
  removeItem(itemType) {
    delete this.inventory[itemType];
  }

  calculateExp(expGain) {
    this.experience += expGain;

    let exp = this.experience;
    let expCap = ((this.level * 100) - 1);
    
    if (exp >= expCap) {
      this.experience = this.experience - expCap;
      this.level += 1;
    }
  }

}
