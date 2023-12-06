// Объявляем функцию конвертации в JSON, принимающую в себя строку
function stringToJson(inputString) {
    // Задаем JSON объект
    const jsonObject = {};
    try {
        // Удаляем начальные и конечные пробелы во входной строке
        const trimmedString = inputString.trim();

        // Проверяем, начинается и оканчивается ли строка без пробелов фигурными скобками
        // Если нет - выдаем ошибку, что это не объект JSON
        if (!(trimmedString.startsWith('{') && trimmedString.endsWith('}'))) {
            throw new Error('Входные данные не являются допустимым объектом JSON.');
        }

        // Удаляем внешние фигурные скобки, обрезая
        const jsonString = trimmedString.slice(1, -1).trim();

        // Разделение запятыми пар ключ-значение
        const pairs = jsonString.split(',');

        pairs.forEach(pair => {
            // Проверяем, разделена ли пара двоеточием
            const [key, value] = pair.split(':').map(item => item.trim());

            // Добавляем выведение ошибки, если нет ключа, значения, ковычек в начале и конце ключа
            if (!key || !value || !key.startsWith('"') || !key.endsWith('"') || value.length === 0) {
                throw new Error('Неверный формат ключ-значение.');
            }

            // Удаляем ковычки ключей и значений (если они есть)
            const cleanedKey = key.slice(1, -1);
            const cleanedValue = value.startsWith('"') && value.endsWith('"')
                ? value.slice(1, -1)
                : value;

            jsonObject[cleanedKey] = cleanedValue;
        });

        return jsonObject;
    } catch (error) {
        console.error('Ошибка конвертации:', error.message);
        return null;
    }
}

// Проверяем:
const input = '{"game":"Dangeons and Dragons","world":"Faerun","story":"Icewind Dale","isMagic":true,"character":{"name":"Yuriy Duti","class":"Bard","level":5,"spells":8,"profession":"glass blower"}}';
const result = stringToJson(input);

if (result !== null) {
    console.log('Конвертация в JSON:', result);
} else {
    console.log('Не верная JSON строка.');
}


// После проверок, я обнаружила проблему, что мой вариант решения не может сконвертировать массив.
// Дополню после изучения материалов Тан Ли Хау 