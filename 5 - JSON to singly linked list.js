// Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов, 
// на выходе объект, представляющий из себя односвязный список.


// JSON объект
const jsonData = '{"key1": "value1", "key2": "value2", "key3": "value3"}';

// Функция для преобразования JSON в односвязный список
// Для реализации необходимо распарсить json в объект
function jsonToLinkedList(jsonData) {
  const data = JSON.parse(jsonData);
  let head = null;
  let current = null;
// Объявляем ссылки списка как null

// Проходимся циклом по объекту и переформируем список
  for (const key in data) {
    const newNode = {
      key: key,
      value: data[key],
      next: null
    };

// Добавляем условия, что если головы нет, то добавляем элемент
// А если есть, то добавляем в next
    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = newNode;
    }
  }

  return head;
}

// Пример использования
const linkedList = jsonToLinkedList(jsonData);
console.log(linkedList);