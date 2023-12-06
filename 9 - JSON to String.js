// Глаза боятся - руки делают
function JSONToString(obj) {
    if (typeof obj !== 'object' || obj === null) {
      // Проверяем если наш "объект" не объект или null
      if (typeof obj === 'string') {
        // Внутри проверки добавляем проверку на строку
        // Добавляем двойные ковычки, если это строка
        return `"${obj}"`;
      } else {
        // Для остальных типов (числа, булевы и тд) - явно преобразуем в строку
        return String(obj);
      }
    } else if (Array.isArray(obj)) {
      // Если массив, преобразовываем в новый массив, используем конвертацию в строку.
      // Затем присоединяем сконвертированное с помощью запятой.
      const arrayValues = obj.map((item) => JSONToString(item));
      return `[${arrayValues.join(',')}]`;
    } else {
      // Остаются только объекты!
      // Для объектов - возвращаем массив ключей
      // Затем создаем новый массив с результатом вызова новой функции конвертации в строку, добавляем ковычки
      // Возвращаем ключи и значения, разделенными запятой
      const objectKeys = Object.keys(obj);
      const objectString = objectKeys.map((key) => {
        const keyString = `"${key}":`;
        const valueString = JSONToString(obj[key]);
        return `${keyString}${valueString}`;
      });
      return `{${objectString.join(',')}}`;
    }
  }
  
  // Пример JSON на основе любимой настолки
  const jsonData = {
    game: 'Dangeons and Dragons',
    world: 'Faerun',
    story: 'Icewind Dale',
    isMagic: true,
    character: {
      name: 'Yuriy Duti',
      class: 'Bard',
      level: 5,
      spells: 8,
      profession: 'glass blower',
    },
    skills: ['Performance', 'Sleight of hand', 'Diplomacy']
  };
  
  // Тестируем результат!
  const jsonString = JSONToString(jsonData);
  console.log(jsonString);