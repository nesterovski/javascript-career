// большая часть кода из предыдущего урока events.js

// let button = document.querySelector('button');
// button.addEventListener('click', () => {
//     alert('you clicked the button');
// });

// let li = document.querySelectorAll('li');

// li.forEach(liTag => {

//     liTag.addEventListener('click', e => {
//         e.target.style.textDecoration = 'line-through';

//         console.log(e.target.textContent);
//     });
// })



// how to add and delete elemetns from the dom

// сначала выбираем селектором элемент и затем свойство
// ul.remove()

// button.remove(); после этого кнопочка сразу исчезла

// продублирую код выше, а тот закоменчу

// по кнопке сделаю добавление нового li тега

let ul = document.querySelector('ul');

let button = document.querySelector('button');
button.addEventListener('click', e => {

    ul.innerHTML += '<li> a new li tag </li>';

});

// let li = document.querySelectorAll('li');

// li.forEach(liTag => {

//     liTag.addEventListener('click', e => {
//         liTag.remove(); // теперь сделаем так, чтобы при клике элементы убирались из списка
//         e.stopPropagation();

//         console.log(e.target.textContent);
//     });
// })




// EVENT BUBBLING

// проблема в том, что когда исполняется event listener у ребенка (li), если у родителя он есть тоже (ul), то он так же исполнится
// это и называется event delegation (bubbling)
// чтобы такого не случалаось, нужно прописать специальный код

// добавлю сначала event listener к ul чтобы увидеть на практике проблему

//ul.addEventListener('click', e => {
//  console.log('ul event listener')
//});

// проблема действительно появилась, при клике на li, ul тоже срабатывает по bubbling up

// чтобы этого не было нужно использовать метод stopPropagation()
// сейчас выше добавлю эту строчку и после нее теперь все норм




// EVENT DELEGATION

// когда у нас много штук к которым нужно прикрепить event listener это неудобно и затратно для производительности
// к тому же могут появляться элементы в будущем, которых пока еще нет
// поэтому event delegation позволит обратиться к родителю и назначить всем детям этот код

ul.addEventListener('click', e => {
    // console.log('event in UL');
    // console.log(e.target, e);
    if (e.target.tagName === 'LI') { // чтобы понимать что конкретно LI тэг был кликнут а не другой
        e.target.remove();
    }
});


