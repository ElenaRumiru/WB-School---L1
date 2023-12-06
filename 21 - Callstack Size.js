// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

// ========= Пример №1 ========== 
// Зациклим функции на самих себе
let i = 0;

const func1 = () => {
  i++;

  func1();
};

try {
  func1();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика  в консоль
  console.log('Пример первый');
  console.log(i);
};
// 12526 раз объем вызовов функции в Chrome
// 12519 раз объем вызовов функции в Edge
// 32366 раз объем вызовов функции в FireFox
// 12526 раз объем вызовов функции в Opera


// ========= Пример №2 ==========
let j = 0;

const func2 = () => {
  let someVariable = j + 1;
  j++;

  func2();
};

try {
  func2();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика  - 12523 в консоль
  console.log('Пример второй');
  console.log(j);
}
// 11387 раз объем вызовов функции в Chrome
// 11381 раз объем вызовов функции в Edge
// 24737 раз объем вызовов функции в FireFox
// 11387 раз объем вызовов функции в Opera



// ========= Пример №3 ==========
let k = 0;

const func3 = () => {
  let a = i + 1;
  let b = a + 1;
  let c = b + 1;
  let d = c + 1;
  let e = d + 1;
  k++;

  func3();
};

try {
  func3();
} catch (e) {
  console.log('Пример третий');
  console.log(k);
}
// 8351 раз объем вызовов функции в Chrome
// 8346  раз объем вызовов функции в Edge
// 29422 раз объем вызовов функции в FireFox
// 8350 раз объем вызовов функции в Opera


// Выводы: в разных браузерах количество различается, 
// Объект и переменные не отличаются по размеру - так как ссылочные
// Количество переменных в функции значительно снижает количество вызовов функции