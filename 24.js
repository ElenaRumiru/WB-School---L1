let placeholder = document.querySelector("#data-output");

async function createDataTable() {
  fetch("http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true")
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {

      let out = "";
      for (let product of products) {
        out += `
            <tr class="nums">
                <td>${product.fname}</td>
                <td>${product.lname}</td>
                <td>${product.tel}</td>
                <td>${product.address}</td>
                <td>${product.city}</td>
                <td>${product.state}</td>
                <td>${product.zip}</td>
            </tr>
            `;
      }
      placeholder.innerHTML = out;
    })

}

createDataTable();

// ===========================================
// ========== Добавляем сортировку ===========
// ===========================================

// P.S. Использовать другие модели сортировки типа Radix Sort я не успела, но очень хотела :С


function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("userdata");
  let tablebody = document.getElementById('data-output');
  switching = true;
  // Установим сортировку по возрастанию
  dir = "asc";
  // Создаем цикл пока не будет переключения
  while (switching) {
    //Пока переключения нет
    switching = false;
    rows = tablebody.getElementsByTagName("TR");
    // Выполним цикл по всем строкам кроме первой заглавной
    for (i = 0; i < (rows.length - 1); i++) {
      //Пока переключения нет
      shouldSwitch = false;
      // Получаем два элемента, которые хотим сравнить
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      // Меняем местами по возрастанию
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //Если больше - переключаем и разрываем цикл
          shouldSwitch = true;
          break;
        }
        // Меняем местами по убыванию
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //Если больше - переключаем и разрываем цикл
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      // Если переключатель true - переключаем и отмечаем как переключенное
      // insertBefore позволяет вставить элемент перед другим элементом
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Каждый раз, когда выполняется переключение, увеличиваем значение на 1
      switchcount++;
    } else {
      // Если переключение не было выполнено и указано направление "asc",
      // установим направление на "desc" и снова запустим цикл while
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};


// ===========================================
// ======== Создаем гибкую пагинацию =========
// ===========================================

setTimeout(function() {
  let count = 1000; //всего записей
  let cnt = 50; //сколько отображаем сначала
  let cnt_page = Math.ceil(count / cnt); //кол-во страниц
  
  // Выводим список страниц
  let paginator = document.querySelector(".paginator");
  let page = "";
  for (let i = 0; i < cnt_page; i++) {
    page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
  }
  paginator.innerHTML = page;
  //выводим первые записи {cnt}
  let div_num = placeholder.getElementsByTagName("TR");
  
  for (let i = 0; i < div_num.length; i++) {
    if (i < cnt) {
      div_num[i].style.display = "table-row";
    } 
  }
  let main_page = document.getElementById("page1");
  main_page.classList.add("paginator_active");
}, 2000);



// Обработчик события по клику внутри HTML
function pagination(event) {
  let main_page = document.querySelector(".paginator_active");
  let div_num = placeholder.getElementsByTagName("TR");
  let cnt = 50;
  let e = event || window.event;
  let target = e.target;
  let id = target.id;

  if (target.tagName.toLowerCase() != "span") return;

  let data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  let j = 0;
  for (let i = 0; i < div_num.length; i++) {
    let data_num = div_num[i].dataset.num;
      div_num[i].style.display = "none";
  }
  for (let i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "table-row";
    j++;
  }
};

