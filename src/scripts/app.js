'use strict';

// Не уверен, что точно понял домашнее задание, поэтому реализовал несколько решений


// Решение № 1
// если ставка и объём работ постоянно изменяемые

class Billing {
  calculateTotal() {
    throw new Error("Метод 'calculateTotal' должен быть реализован в наследуемых классах.");
  }
}

class FixBilling extends Billing {
  calculateTotal(amount) {
    return amount;
  }
}

class HourBilling extends Billing {
  calculateTotal(amount, hours) {
    return amount * hours;
  }
}

class ItemBilling extends Billing {
  calculateTotal(amount, items) {
    return amount * items;
  }
}

const fixBilling = new FixBilling();
console.log(fixBilling.calculateTotal(100));

const hourBilling = new HourBilling();
console.log(hourBilling.calculateTotal(100, 3));
console.log(hourBilling.calculateTotal(100, 5));

const itemBilling = new ItemBilling();
console.log(itemBilling.calculateTotal(100, 7));
console.log(itemBilling.calculateTotal(100, 9));


/*** Решение № 2
// если ставка постоянна, а объём работ изменяемый

class Billing {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }

  calculateTotal() {
    throw new Error("Метод 'calculateTotal' должен быть реализован в наследуемых классах.");
  }

  get amount() {
    return this.#amount;
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal(hours) {
    return this.amount * hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal(items) {
    return this.amount * items;
  }
}

const fixBilling = new FixBilling(100);
console.log(fixBilling.calculateTotal());

const hourBilling = new HourBilling(100);
console.log(hourBilling.calculateTotal(3));
console.log(hourBilling.calculateTotal(5));

const itemBilling = new ItemBilling(100);
console.log(itemBilling.calculateTotal(7));
console.log(itemBilling.calculateTotal(9));

***/

/*** Решение № 3
// если стоимость и единицы работы не изменяемы после создания экземпляра класса

class Billing {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }

  calculateTotal() {
    throw new Error("Метод 'calculateTotal' должен быть реализован в наследуемых классах.");
  }

  get amount() {
    return this.#amount;
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  #hours = 0;
  constructor(amount, hours) {
    super(amount);
    this.#hours = hours;
  }

  calculateTotal() {
    return this.amount * this.#hours;
  }
}

class ItemBilling extends Billing {
  #items = 0;
  constructor(amount, items) {
    super(amount);
    this.#items = items;
  }

  calculateTotal() {
    return this.amount * this.#items;
  }
}

const fixBilling = new FixBilling(100);
console.log(fixBilling.calculateTotal());

const hourBilling = new HourBilling(100, 3);
console.log(hourBilling.calculateTotal());

const itemBilling = new ItemBilling(100, 5);
console.log(itemBilling.calculateTotal());

***/


// сделал метод атаки разный (вместо метода Говорить),
// метод Говорить излишне было у них разным делать

class GameCharacter {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`${this.race} говорит на ${this.language}`);
  }

  attack() {
    console.log(`${this.race} нанёс удар кулаком`);
  }
}

class OrkCharacter extends GameCharacter {
  constructor(race, name, language, weapon, typeInmact) {
    super(race, name, language);
    this.weapon = weapon;
    this.typeInmact = typeInmact;
  }

  attack() {
    console.log(`${this.race} ${this.name} наносит ${this.typeInmact} оружием ${this.weapon}`);
  }
}

class ElfCharacter extends GameCharacter {
  constructor(race, name, language, typeSpell) {
    super(race, name, language);
    this.typeSpell = typeSpell;
  }

  attack() {
    console.log(`${this.race} ${this.name} наносит удар заклинанием '${this.typeSpell}'`);
  }
}

const orc = new OrkCharacter('Орк', 'Оркус', 'Орканский язык', 'Ятаган', 'Рубящий удар');
const elf = new ElfCharacter('Эльф', 'Эльфиус', 'Эльфийский язык', 'Вырви глаз');

orc.speak();
orc.attack();

elf.speak();
elf.attack();
