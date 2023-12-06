// Находим необходимые DOM-элементы - 3 импута и 3 текстовых поля
const inputMessages = document.querySelector('.number-messages');
const messages = document.querySelector('.messages');
const inputUsers = document.querySelector('.number-users');
const users = document.querySelector('.users');
const inputHappy = document.querySelector('.number-happy');
const happy = document.querySelector('.happy');

//Пишем функцию, принимающую 4 параметра: число и 3 варианта слова
function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    // Если остаток от деления на 100 от 5 до 20, то вариант 3; 
    if (n >= 5 && n <= 20) {
      return five;
    }
    // Если остаток от деления на 10 - 1, то вариант 1; 
    n %= 10;
    if (n === 1) {
      return one;
    }
    // Если остаток от деления на 10 от 2 до 4, то вариант 2;
    if (n >= 2 && n <= 4) {
      return two;
    }
    // В остальных случаях - вариант 3;
    return five;
  };


// Добавляем обработчики событий на каждый input с вызовом функции,
// где number значение импута, а итог - textContent текстового поля
inputMessages.addEventListener("click", function() {
    let numberMesssages = inputMessages.value;
    messages.textContent = getNoun(numberMesssages, 'сообщение', 'сообщения', 'сообщений');
});

inputUsers.addEventListener("click", function() {
    let numberUsers = inputUsers.value;
    users.textContent = getNoun(numberUsers, 'пользователь', 'пользователя', 'пользователей');
});

inputHappy.addEventListener("click", function() {
    let numberHappy = inputHappy.value;
    happy.textContent = getNoun(numberHappy, 'счастье', 'счастья', 'мно-о-о-ого счастьев');
});
