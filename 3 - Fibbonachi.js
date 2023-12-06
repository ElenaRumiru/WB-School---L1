// ==========================================
// Вычисление N числа в ряду Фибоначчи ======
// ==========================================

function fib1(n) {                      // Объявляем функцию
    let a = 0;                          // Присваиваем значения первых чисел после 0
    let b = 1;
    for (let i = 1; i <= n; i++) {      // Для каждого числе от 1 меньше порядкового N
      let c = a + b;                    // Находим следующее число по сумме двух предыдущих
      a = b;                            // Чтобы не пересчитывать перезаписываем первое число на второе, а второе на третье 
      b = c;                            // и считаем заново!
    }
    return b;
  }

// ==========================================
// Вычисление чисел Фибоначчи до числа N ====
// ==========================================

function fib2(n) {                      // Объявляем функцию        
    let result = [0, 1];                // Создаем массив с первыми числами
    let a = 0;                          // Присваиваем значения первых чисел после 0
    let b = 1;
    for (let i = 1; i <= n; i++) {      // Проходимся циклом по всем числам в ряду до порядкового N
      let c = a + b;                    // Находим следующее число по сумме двух предыдущих
      result.push(c);                   // Пишем его в массив
      a = b;                            // Чтобы не пересчитывать перезаписываем первое число на второе, а второе на третье 
      b = c;                            // и считаем заново!
    }
    return result;
  }

// ==========================================
//  Проверка является ли число простым ======
// ==========================================


function isPrime(i) {                         // Объявляем функцию
    for (var c = 2; c <= Math.sqrt(i); ++c)   // Цикл делителей от 2 до квадратного корня от проверяемого числа
      if (i % c === 0) return false;          // Если делится на что-то кроме себя и 1 - возвращаем false
    return true;                              // Если нет - то это простое число
  }

// ==========================================
//  Вычесление N-го простого числа с 2 ======
// ==========================================

function primeNth(n) {                        // Объявляем функцию
    let counter = 0;                          // Создаем нулевой счетчик до числа N
    let maxPrime = 0;                         // Создаем переменную с максимальным значением простого числа
        for (let i = 2; i < 1000; i++) {      // Создаю цикл по всем числам с 2 до 1000
            if (isPrime(i) && counter < n) {  // Если это простое число И счетчик еще меньше n,
                maxPrime = i;                 // записываем это число в максимальное, а счетчик увеличиваем на 1
                counter++;
            }
        }    
    return maxPrime;                          // Возвращаем энное простое число в ряду
}


// ============================================
// Вычисление ряда чисел до числа N (не по счету) 
// ============================================

function primeList(N) {                     // Объявляем функцию
    var list = [];                          // Создаем пустой массив, куда будем записывать ряд
     for (var i = 2; i <= N; ++i)           // Счетчик с 2 до N включительно
       if (isPrime(i)) list.push(i);        // Если это простое число - добавляем в массив
    return list;                            // Возвращаем массив простых числе до числа N
  }