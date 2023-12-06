// Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат.

document.write();

document.write("<script>document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');document.write('This is written inside another document.write.');</script>");


function nestedDocumentWrite(level, text) {
    if (level > 0) {
      document.write(text);
      nestedDocumentWrite(level - 1, text);
    }
  }
  
  const levels = 22; // Number of times to nest document.write()
  const content = "<script>document.write('This is written inside another document.write. ');</script>";
  
  nestedDocumentWrite(levels, content);


// Я покопалась в WebKit/Source/core/dom/Document.cpp хрома, а именно вот по этой ссылке
// https://source.chromium.org/chromium/chromium/src/+/main:third_party/WebKit/Source/core/dom/Document.cpp;l=255;drc=a30d423812ad0d766e93b0f3a53523807b50b17b
// И там увидела данную строчку, устанавливающую предел
// static const unsigned kCMaxWriteRecursionDepth = 21;
// Причина - функция ломает браузер
// Для других браузеров установлено 20 раз