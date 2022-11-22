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
users.forEach (user => { //forEach с коллбэком чтобы прогнать каждого пользователя
    ninjas.innerHTML += ` <h5>${user}<h5>`; // в див дока с классом ninjas добавлю прогоненных через foreach пользователей + свойство .innerHTML чтобы именно внутрь добавить пользователей и нужный html тег h5
    console.log(user);
});



// getting and setting the attributes 





