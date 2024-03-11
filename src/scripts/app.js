/**
 * URL сервиса откуда запрашивается активность. Он возвращает случайную активность с данными
 */
const urlBoredapi = 'https://www.boredapi.com/api/activity';

/**
 * Функция запрашивает данные по активности
 * @param {string} url url по которому запрашивать данные
 * @returns Объект {} содержащий данные по активности
 */
async function getActivity(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

/**
 * Функция эмулирующая ошибку запроса данных по активности
 * @param {string} url url по которому запрашивать данные
 * @returns Объект {} содержащий данные по активности
 */
async function getActivityError(url) {
  const response = await fetch(url + 'error');
  const json = await response.json();
  return json;
}

/**
 * Функция осуществляющая одновременный запрос данных из переданного массива функций
 * @param {array} arrayPromise массив функций, которые запрашивают данные по активностям
 * @returns Объект {} содержащий данные по активности, который вернулся раньше всех, или ошибку запроса
 */
async function race(arrayPromise) {
  return new Promise((resolve, reject) => {
    arrayPromise.forEach(promise => {
      promise.then(resolve).catch(reject);
    });
  });
}

(async () => {
  console.log(await race([
    getActivity(urlBoredapi),
    getActivityError(urlBoredapi),
    getActivity(urlBoredapi)
  ]));
})();
