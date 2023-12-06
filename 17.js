ymaps.ready(init);

function init() {
    // Создаем выпадающую панель с поисковыми подсказками и прикрепляем ее к HTML-элементу по его id.
    let suggestView1 = new ymaps.SuggestView('suggest1');   
}


// Реализовываем дебоунсинг 250мс
function debounce(func, timeout = 300){
    let timer;
    return (...args) => { // Возвращаем задебаншенную функцию
      clearTimeout(timer); // Убираем таймер напрямую
      timer = setTimeout(() => { func.apply(this, args); }, timeout); //Обращаемся через аргумент
    };
  }
  const debouncedInit = debounce(() => init());
  // Вызов в HTML



  function throttle(func, delay) {
    let timerFlag = null; // Переменная чтобы держать таймер
  
    // Возвращаем затротленную функцию
    return (...args) => {
      if (timerFlag === null) { // Если таймера нет
        func(...args); // Запустить функцию
        timerFlag = setTimeout(() => { // Установим таймер, чтобы снять флажок таймера по истечении указанной задержки
          timerFlag = null; // Снимем флажок таймера, чтобы разрешить повторное выполнение основной функции
        }, delay);
      }
    };
  }
  const throttledInit = throttle(init, 300);
  // Вызов в HTML