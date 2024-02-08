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
