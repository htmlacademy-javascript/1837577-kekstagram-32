/**
 * Получение случайного элемента массива
 * @param {number} array - массив
 * @returns {} - случайный элемент массива
 */
function getRandomArrayElement (array) {
  return array[getRandomInt(0, array.length - 1)];
}

/**
 * Нахождение рандомного целого числа из диапазона
 * @param {int} a - первое число диапазона
 * @param {int} b - второе число диапазона
 * @returns {int} result - рандомное целое число
 */
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export {getRandomArrayElement, getRandomInt};
