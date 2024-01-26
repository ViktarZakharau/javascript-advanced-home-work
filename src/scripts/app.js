// @ts-ofcheck

// ESLint выдаёт ошибку, если видит не именованные функции, поэтому им прописывал fn()

const GameCharacter = function fn(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

GameCharacter.prototype.speak = function fn() {
  console.log(`${this.race} ${this.name} говорит на ${this.language}`);
};

const OrkCharacter = function fn(race, name, language, weapon, typeInmact) {
  GameCharacter.call(this, race, name, language);
  this.weapon = weapon;
  this.typeInmact = typeInmact;
};

OrkCharacter.prototype = Object.create(GameCharacter.prototype);
OrkCharacter.prototype.constructor = OrkCharacter;

OrkCharacter.prototype.attack = function fn() {
  console.log(`${this.race} ${this.name} наносит ${this.typeInmact} оружием ${this.weapon}`);
};

const ElfCharacter = function fn(race, name, language, typeSpell) {
  GameCharacter.call(this, race, name, language);
  this.typeSpell = typeSpell;
};

ElfCharacter.prototype = Object.create(GameCharacter.prototype);
ElfCharacter.prototype.constructor = ElfCharacter;

ElfCharacter.prototype.magicAttack = function fn() {
  console.log(`${this.race} ${this.name} наносит удар заклинанием '${this.typeSpell}'`);
};

const orc = new OrkCharacter('Орк', 'Оркус', 'Орканский язык', 'Ятаган', 'Рубящий удар');
const elf = new ElfCharacter('Эльф', 'Эльфиус', 'Эльфийский язык', 'Вырви глаз');

orc.speak();
orc.attack();

elf.speak();
elf.magicAttack();
