// @ts-check

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

console.log(makeElementsUnique(setObjects));
