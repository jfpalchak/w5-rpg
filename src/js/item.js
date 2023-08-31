export class Item {
  constructor(item) {
    this.item = item;
  }
}

export class Weapon extends Item {
  constructor(type, attackPower) {
    super("weapon");
    this.type = type;
    this.attack = attackPower;
  }
}

export class Armor extends Item {
  constructor(type, defensePower) {
    super("armor");
    this.type = type;
    this.defense = defensePower;
  }
}