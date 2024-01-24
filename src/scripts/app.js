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

console.log(isRequiredAge('2010-01-24'));
