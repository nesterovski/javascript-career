// adding & changing page content

//сейчас выбираем тег div и затем у него редактируем текст

let divPractice = document.querySelector('div');
divPractice.innerText = 'i changed the paragraph'; // .innerText это свойство, не метод тк не имеет скобок

// теперь выберу все теги p и выведу их через for each тк их несколько и они будут представлять что-то типа массива (NodeList)

let pAllPractice = document.querySelectorAll('p');
pAllPractice.forEach(para => {

    para.innerText += ' a new text with js';
    console.log(para.innerText);

});

// теперь буду менять html, тут уже нужно будет свойство .innerHTML
// попробую вместо тега h1 сделать h6

let content = document.querySelector('h1');
content.innerHTML = '<h6>a new h6 heading with js</h6>'; // если вместо = поставить += то останется прошлый тег и нему еще новый прибавится

// теперь практика добавления новых тегов и инфы на страницу
// допустим есть бд с пользователями и я их хочу вывести на экран с уже правильными тегами html

let ninjas = document.querySelector('.ninjas') // сначало выбрал место в браузере где отображу пользователей

let users = ['shaun', 'luigi', 'youshi']; // сами пользователи
users.forEach(user => { //forEach с коллбэком чтобы прогнать каждого пользователя
    ninjas.innerHTML += ` <h5>${user}<h5>`; // в див дока с классом ninjas добавлю прогоненных через foreach пользователей + свойство .innerHTML чтобы именно внутрь добавить пользователей и нужный html тег h5
    console.log(user);
});



// getting and setting the attributes
// помимо изменение html тэга, так же можно менять его attribute
// ниже в тэге a меняем атрибут href на другой, вместо гугла the net ninja + изменяем само текстовое содержимое ссылки
let link = document.querySelector('a');
link.setAttribute('href', 'https://www.thenetninja.co.uk'); // с помощью этого метода можем поменять аттрибут html тэга
link.innerText = 'TheNet Ninja Website'; // меняем текстовое содержимое html тэга
console.log(link.getAttribute('href')); // с помощью этого метода можем достать аттрибут html тэга


// теперь работаем с p тэгом и аттрибутом class

let paraTest = document.querySelector('.error');
console.log(paraTest); // так выйдет весь абзац с html разметкой, чтобы именно класс вытащить в консоль то берем getAttribute('class') именно класс тэга вытащит
console.log(paraTest.getAttribute('class'));
paraTest = paraTest.setAttribute('style', 'text-align:center'); // меняю свойство тэга style на другой style

// изменение класса может быть полезно например в случае когда пользователь
// заполняет форму и если он правльно ввел данные то форма будет зеленой
// если непраивльно, то будет красная
// как раз js будем менять класс элемента который либо на зеленый либо на красный поменяет код

// так можем и вносить новые аттрибуты, если такого атрибута нет, то он добавится
// например добавим ссылке выше атрибут _blank через target, то ссылка откроется в новой вкладке, сейчас пока его нет

link = link.setAttribute('target', 'target="_blank"');
// но проблема такого способа в том, что свойство будет не добавляться, а просто перезаписываться



//changing css styles with js
//добавлять новый стиль нужно с помощью свойства .style которое добавляем к переменной которая ссылается на какой-то тег

let cssTest = document.querySelector('.cssPractice'); // выбираем нужный абзцац из странички
cssTest.style.margin = '30px'; // добавили отступ тк margin это css свойство
cssTest.style.color = 'crimson';
cssTest.style.fontSize = '30px';
// если сделаем пустыке скобки, то так мы удалим атрибут cssTest.style.fontSize = '';


// если забыли какое-то css свойство, то просто в коносли пропишем следующее
console.log(cssTest.style); // ну или любую другую существующую переменную




// adding & removing classes