// Задача на работу с объектами: создайте объект, представляющий собой книгу. 
// Объект должен иметь свойства, такие как: название книги, автор и год издания. 
// Напишите методы для получения и изменения значений свойств книги.

// Создаем объект
let book = {
    name: "Атомные привычки",
    autor: "Джеймс Клир",
    year: 2019   
   }

// Добавьте свойство и добавить значение
book.price = 1000;
console.log(book);

// Способы изменить значение объекта через разные типы обращения
book.year = 2018;
book["year"] = 2017;
console.log(book);

// Получить массив ключей
const keys = Object.keys(book);
console.log(keys);

// Итерация по ключам и значениям
Object.keys(book).forEach(key => {
    let value = book[key];
    console.log(`${key}: ${value}`);
    });

// Получить массив значений    
const values = Object.values(book);
console.log(values);

// Перебор свойств циклом for...in
for (let key in book) {
    // ключи
    console.log( key );
    // значения ключей
    console.log( book[key] );
  };

// Получить длину объекта
const length = Object.keys(book).length;
console.log(length);

// Создать вложенный массив пар «ключ-значение»
const bestseller = Object.entries(book);
console.log(bestseller);

// Копировать значения из одного объекта в другой с помощью метода
let bookstype = { genre: "Книга по саморазвитию" }
const selfDevelopmentBooks = Object.assign(book, bookstype);
console.log(selfDevelopmentBooks);
// ... и с помощью spread оператора
const selfDevelopmentBooks2 = {...book, ...bookstype}
console.log(selfDevelopmentBooks2);

// Для удаления свойства объекта метод delete
delete selfDevelopmentBooks.genre;
console.log(selfDevelopmentBooks);

// Проверить существует ли свойство в объекте
console.log("year" in book);

// Также с помощью вышеописанных методов можно использовать
// самые разные функции для изменения значений объекта

