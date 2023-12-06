// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, 
// которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

const array = [ 
    function () { return 1}, 
    function () { return 2},
    function () { return 3},
    function () { return 4},
    function () { return 5},
    function () { return 6},
    function () { return 7},
    function () { return 8}
  ];

  // Создать функцию, перебирающую элементы массива до длины массива
  // И запустить каждый элемент массива по порядку как функцию
  function completeAll(arr) {
        return function () {
            let result = []; 
            for (let i = 0; i < array.length; i++) {
            result.push(array[i]());
        }
        console.log(result);
    };    
  };
  
  // Пробуем - работает!
 let resultToArray = completeAll(array);
 resultToArray();