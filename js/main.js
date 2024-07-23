const NAMES = [
  'Анна',
  'Борис',
  'Виктория',
  'Георгий',
  'Дмитрий',
  'Елена',
  'Иван',
  'Ксения',
  'Леонид',
  'Мария'
];

const PHRASES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Закат на пляже с золотым песком и мягкими волнами.',
  'Спокойное горное озеро, окруженное лесами и горами.',
  'Освещенная улица большого города ночью с неоновыми огнями и машинами.',
  'Цветущий сад весной с множеством разноцветных цветов.',
  'Величественные заснеженные горы под голубым небом.',
  'Уютная тропинка в лесу, окруженная зеленью и высокими деревьями.',
  'Идиллический пасторальный пейзаж с зелеными полями и пасущимися коровами.',
  'Мощный водопад в тропическом лесу с радугой в брызгах.',
  'Старинный каменный мост через спокойную реку.',
  'Обширные песчаные дюны в пустыне под ярким солнцем.'
];

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

/**
 * Получение случайного элемента массива
 * @param {number} array - массив
 * @returns {} - случайный элемент массива
 */
function getRandomArrayElement (array) {
  return array[getRandomInt(0, array.length - 1)];
}

/**
 * Генератор комментариев
 *
 * @returns {Array} - массив объектов-комментариев к фотографиям
 */
function createCommentsGenerator() {
  let maxId = 0;
  return function (count){
    const comments = [];
    for (let i = 0; i < count; i++) {
      const newComment = {
        id: maxId,
        avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
        name: getRandomArrayElement(NAMES),
        message: getRandomArrayElement(PHRASES)
      };
      comments.push(newComment);
      maxId++;
    }
    return comments;
  };
}

/**
 * Генерирует заданное количество объектов-фотографий
 *
 * @param {number} count - Количество фотографий
 * @returns {Array} - массив объекто-фотографий
*/
function createPhotos(count) {
  const photos = [];
  const generateComments = createCommentsGenerator();
  for (let i = 0; i < count; i++) {
    const newPhoto = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInt(1, 200),
      comments: generateComments(getRandomInt(0, 30))
    };
    photos.push(newPhoto);
  }
  return photos;
}
