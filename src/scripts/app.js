// @ts-check

const generateRandomNumber = (dice) => {
  const maxNumber = Number(dice.substring(1, dice.length));
  const rundomNumber = Math.floor(Math.random() * maxNumber + 1);
  return rundomNumber;
};

console.log(generateRandomNumber('d20'));
