import dayjs from 'dayjs';

// Функция  по генерации случайного числа из диапазона
/*const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};*/


// Результат: целое число из диапазона "от...до"
function getRandomInteger(min, max) {
  if(max > min && min >= 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}

//имя_функции(от, до, количество_знаков_после_запятой);
// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
function getRandomFractionalNumber(min, max, numberSymbols) {
  if(max > min && min >= 0 && numberSymbols >= 0){
    const randomNumber = (Math.random() * (max - min)) + min;  //случайное дробное в диапазоне [min, max)
    const cropNumber = randomNumber.toFixed(numberSymbols);

    return parseFloat(cropNumber);
  }
  return false;
}

// получение случайного элемента массива
function getArrayRandomElement (array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

//получение случайного true/false
function getBoolean () {
  return getRandomInteger(0, 1);
}

//получение нескольких случайных элеменов массива
function getArrayRandomElements (array) {
  return array.filter(() => getBoolean ());
}


const humanizeDate = (date, templete) => dayjs(date).format(templete);

export {getRandomInteger, getBoolean, humanizeDate, getArrayRandomElements, getArrayRandomElement,  getRandomFractionalNumber};
