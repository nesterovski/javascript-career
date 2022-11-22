// the dom
// Document Object Model - объектная модель документа
// каждый html тег является объектом
// dom по сути это все что мы видим в html странице, и с помощью dom мы можем этим манипулировать (тегами)
// Например, document.body – объект для тега <body>.


// querying the dom - достаем тег из страницы чтобы затем с ним работать
// .querySelector() метод позволяющий достать первый попавшийся элемент

// запрос надо хранить в переменной

let para = document.querySelector('p'); // document пишем обязательно тк ссылаемся на главный обьект в который входят все теги
// в скобках где query selector нужны ковычки у селектора
console.log(para);

// попробуем достать по классу
let divClass = document.querySelector('.divClass');
console.log(divClass);
// также можно открыть в браузере инспектор кода и выбрать путь к тегу document.querySelector("body > div.divClass")

// .querySelectorAll() метод позволяющий достать все элементы

let allPara = document.querySelectorAll('p');
console.log(allPara);
console.log(allPara[0]); // позволяет из всех вытащить один (наподобие как массив)
// но переменная allPara хоть и похожа на массив, но все равно это не совсем то


// other ways to query the DOM