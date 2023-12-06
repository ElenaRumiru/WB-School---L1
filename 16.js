// Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами. 
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.


// Достаем нужные поля
const dateInput = document.querySelector('.datefrom');
const countDay = document.querySelector('.countday');
let valueInput = dateInput.value.replace(/\-/g, '');

// Берем из документации функцию, которая считает количество
// дней, прошедших с даты в инпуте до настоящего момента
let a = moment(valueInput, 'YYYYMMDD').fromNow();
countDay.textContent = a;

// Добавляем ту же функцию в обработчик на изменение инпута
// Выводим все в поле
dateInput.addEventListener("change", function() {    
    let valueInput = dateInput.value.replace(/\-/g, '')
    let a = moment(valueInput, 'YYYYMMDD').fromNow();
    countDay.textContent = a;
});

// Добавляем экспорт функции
export { a }; 