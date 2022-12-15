
// делаем ссылку на форму 

// let form = document.querySelector('.signup-form');

// именно на форму вешаем event listener
// если вешать именно на кнопку то нажимая при вводе инфы
// на enter то эти данные не дойдут

// теперь дотянемся до окошечка, куда будут идти данные

// let username = document.querySelector('#username-field');

//form.addEventListener('submit', e => {
   // e.preventDefault(); // чтобы форма при нажатии не обновляла страницу
    // console.log(form); // такое командой не получится вытащить значение которое отсылает пользователь

  //  console.log(username.value);  // нужно использовать свойство value и плюс его надо именно на переменную из окошечка
    
//});


// чтобы делать базовую валидацию формы мы пользуем regular expression
// regex101 сайт который позволяет подобрать валидацию 


// testing RegEx

// создам переменную, в которую засуну правило валидации RegEx
// нужно в слэшах
// 6,10 сколько символов можно

// test метод нужен чисто для RegEx
// возращает true или false в зависимости от того как прошла проверка

// let name = 'shadsdfdf';
// const pattern = /^[a-z]{6,10}$/;
// let result = pattern.test(name);
// console.log(result);

// в консоль все выходит правильно 

// теперь попробую написать условие с выводом текста в коноль
// тип имя проходит или нет

// if (result) {
//     console.log('your name is valid; RegEx approves it');
// } else {
//     console.log('your name is not valid; you failed RegEx');
// };

// выше все работает четко

// также можно проверять RegEx с помощью метода search(), но мне больше нравится то что выше


// сейчас устрою проверку юзернэйма с сообщением для пользователя мол правильный юзернэйм или нет
// сейчас в html ниже кнопки добавлю еще один див чтобы туда это сообщение и выходило при проверке

// все сделаю заново, все выше закомментил 

// сначала ссылки на элементы из дома и event listener

let form = document.querySelector('.signup-form');
let username = document.querySelector('#username-field');
let feedback = document.querySelector('.feedback'); // сюда буду выводить сообщение пользователю
 form.addEventListener('submit', e => {
     e.preventDefault(); // чтобы форма не перезагружала страницу
     // console.log(username.value); // проверяю работает ли форма

     if (pattern.test(username)) {
        feedback.textContent = 'you have a right username';
     } else {
        feedback.textContent = 'you have a wrong username';
     };
 });

// regEx условие юзернэйма
 const pattern = /^[a-z]{6,10}$/;
 username = username.value; //  если не добавить эту строку с value то regex не сможет именно то что внутри поля юзера вытащить, текст юзернэйма


//проверю проходит ли username и работает ли regEx условие c помощью метода test()
let result = pattern.test(username);
console.log(result);

// по идее все работает, но нужно перезагружать страницу чтобы все работало корректно

