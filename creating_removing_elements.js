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
    ul.prepend();

    ul.innerHTML += '<li> a new li tag </li>';

});

let li = document.querySelectorAll('li');

li.forEach(liTag => {

    liTag.addEventListener('click', e => {
        liTag.remove(); // теперь сделаем так, чтобы при клике элементы убирались из списка

        
        console.log(e.target.textContent);
    });
})


// код, который позволяет удалять при клике тег, работает только с элементами
// которые уже были изначально, но новодобавленные не буду удаляться
// для этого нужно будет пользоваться event delegation (bubbling)




