// Задаем массив объектов (свернут)
let users = [
    {
      name: 'Bob',
      age: 25,
    },
    {
      name: 'Alice',
      age: 25,
    },  
    {
      name: 'Bafonasiy',
      age: 99,
    },
    {
      name: 'Gafonasiy',
      age: 99,
    },
    {
      name: 'Zafonasiy',
      age: 99,
    },
    {
      name: 'Charlie',
      age: 66,
    },
    {
      name: 'Helena',
      age: 25,
    },
    {
      name: 'Yarik',
      age: 41,
    },
    {
      name: 'Victoria',
      age: 35,
    },
    {
      name: 'Brian',
      age: 38,
    },
    {
      name: 'Valentina',
      age: 77,
    },
    {
      name: 'Afonasiy',
      age: 99,
    },
    {
      name: 'Petr',
      age: 46,
    }
  ];
  
// Используем метод sort с собтвенной функцией сортировки 
  users.sort(function(a, b) {
    // Сначала сортируем по возрасту, затем по алфавиту, если возраст равен
    if (a.age < b.age) {
        return -1;
        } else if (a.age == b.age && a.name > b.name) {
        return 1;
        } else if (a.age == b.age && a.name < b.name) {
        return -1;
        }
    });