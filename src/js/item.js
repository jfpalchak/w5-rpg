export class Item {
  constructor(item, value) {
    this.item = item;
    this.value = value;
  }
}

export class Weapon extends Item {
  constructor(type, attackPower) {
    super("weapon", (20*attackPower));
    this.type = type;
    this.attack = attackPower;
  }
}

export class Armor extends Item {
  constructor(type, defensePower) {
    super("armor", (10*defensePower));
    this.type = type;
    this.defense = defensePower;
  }
}