{
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
}

{
const page = {
  timer: document.querySelector('#timer')
};

/**
 * Функция определяющая количество дней в месяце.
 * @param {number} year год, с которым работаем, пример 1999
 * @param {number} mounth номер месяца в году, учитывая, что в Date() месяцы нумеруются с 0.
 * @returns количество дней в месяце
 */
const getNumberDaysInMonth = (year, mounth) => {
  // если запросить нулевой день следующего месяца, то он вернёт количество дней текущего месяца
  const days = new Date(year, mounth + 1, 0).getDate();
  return days;
};

/**
 * Функция возвращает рассчитывает количество времени оставшегося до Нового года
 * @returns X месяцев, X дней, X часов, X минут, X секунд
 */
function getTimeUntilNewYear() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  const currentSeconds = new Date().getSeconds();
  // максимум месяцев в году (начинаем счёт с 0)
  const monthsYear = 11;
  // полных месяцев до конца года
  const remainderMonthUntilEndYear = monthsYear - currentMonth;
  // дней в текущем месяце
  const dayInCurrentMounth = getNumberDaysInMonth(currentYear, currentMonth);
  // осталось полных дней в текущем месяце remainderMonth
  const remainderDaysUntilEndMonth = dayInCurrentMounth - currentDate;
  // часов в сутках
  const hoursInDay = 24;
  // осталось полных часов сегодня, -1 для корректировки
  const remainderHoursUntilEndDay = hoursInDay - currentHours - 1;
  // минут в часе
  const minutesInHour = 60;
  // осталось полных минут в текущем часе, -1 для корректировки
  const remainderMinutesUntilEndHour = minutesInHour - currentMinutes - 1;
  // секунд в минуте
  const secondsInMinute = 60;
  // осталось секунд в текущей минуте, -1 для корректировки
  const remainderSecondsUntilEndMinute = secondsInMinute - currentSeconds - 1;

  const result = `${remainderMonthUntilEndYear} месяцев, ${remainderDaysUntilEndMonth} дней, ${remainderHoursUntilEndDay} часов, ${remainderMinutesUntilEndHour} минут, ${remainderSecondsUntilEndMinute} секунд`;

  return result;

  // если требуется посчитать все дни в полных месяцах текущего года
  // let daysLeftDontCountCurrentMonth = 0;
  // for (let month = currentMonth + 1; month <= 11; month += 1) {
  //   const dayInMounth = getNumberDaysInMonth(currentYear, month);
  //   daysLeftDontCountCurrentMonth += dayInMounth;
  // }
}

setInterval(() => {
  page.timer.innerText = getTimeUntilNewYear();
}, 1000);
}
