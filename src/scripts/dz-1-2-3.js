// @ts-check

/**
 * Функция проверяет, что пользователь достиг определённого возраста.
 * @param {*} date дата рождения пользователя в формате '2010-01-24'.
 * @returns false/true пользователь не достиг/достиг определённого возраста.
 */
const isRequiredAge = (date) => {
  const acceptableAge = 14;
  const currentYear = new Date().getFullYear();
  const receivedYear = new Date(date).getFullYear();
  const currentMonth = new Date().getMonth();
  const receivedMonth = new Date(date).getMonth();
  const currentDay = new Date().getDate();
  const receivedDay = new Date(date).getDate();

  if (currentYear - receivedYear < acceptableAge) {
    return false;
  }

  if ((currentYear - receivedYear) === acceptableAge && currentMonth < receivedMonth) {
    return false;
  }

  if ((currentYear - receivedYear) === acceptableAge && currentMonth === receivedMonth
    && currentDay < receivedDay) {
    return false;
  }

  return true;
};

/**
 * Функция генерирует случайное число (выпадает число определённой грани игровой кости).
 * @param {string} dice кость с количеством граней (d4, d6...).
 * @returns случайное число от 1 до числа количества граней игральной кости.
 */
const generateRandomNumber = (dice) => {
  const maxNumber = Number(dice.substring(1, dice.length));
  const rundomNumber = Math.floor(Math.random() * maxNumber + 1);
  return rundomNumber;
};

const setObjects = new Set([
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' }
]);

/**
 * Метод получает set не уникальных объектов и делает уникальными убирая дубли.
 * @param {Set} notUniqueSet set содержащий не уникальные объекты
 * @returns set содержащий уникальные объекты
 */
const makeElementsUnique = (notUniqueSet) => {
  const setIds = new Set();
  const arrayUniqueElements = [...notUniqueSet].filter((element) => {
    if (!setIds.has(element.id)) {
      setIds.add(element.id);
      return true;
    }
    return false;
  });
  return new Set(arrayUniqueElements);
};

console.log(generateRandomNumber('d20'));
console.log(makeElementsUnique(setObjects));
console.log(isRequiredAge('2010-01-24'));
