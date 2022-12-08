
// делаем ссылку на форму 

let form = document.querySelector('.signup-form');

// именно на форму вешаем event listener
// если вешать именно на кнопку то нажимая при вводе инфы
// на enter то эти данные не дойдут

// теперь дотянемся до окошечка, куда будут идти данные

let username = document.querySelector('#username-field');

form.addEventListener('submit', e => {
    e.preventDefault(); // чтобы форма при нажатии не обновляла страницу
    // console.log(form); // такое командой не получится вытащить значение которое отсылает пользователь

    console.log(username.value);  // нужно использовать свойство value и плюс его надо именно на переменную из окошечка
    
});


// чтобы делать базовую валидацию формы мы пользуем regular expression
// regex101 сайт который позволяет подобрать валидацию 


// testing RegEx

// создам переменную, в которую засуну правило валидации RegEx
// нужно в слэшах
// 6,10 сколько символов можно

// text метод нужен чисто для RegEx
// возращает true или false в зависимости от того как прошла проверка

let name = 'shadsdfdf';
const pattern = /^[a-z]{6,10}$/;
let result = pattern.test(name);
console.log(result);

// в консоль все выходит правильно 

// теперь попробую написать условие с выводом текста в коноль
// тип имя проходит или нет

if (result) {
    console.log('your name is valid; RegEx approves it');
} else {
    console.log('your name is not valid; you failed RegEx');
};

// выше все работает четко

// также можно проверять RegEx с помощью метода search(), но мне больше нравится то что выше

