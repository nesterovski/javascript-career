// part 10 To do list projec

// шаги как выполнить проект:
// сначала делаем ссылку на форму (дом) и затем вешаем event listener
// затем внутри event listener вытаскиваем данные пользователя которые он вводит и форматируем их (например метод trim чтобы не было пустых пробелов)
// главное не забыть еще name окошечка ввести, куда данные вводятся
// затем пишем код чтобы при добавлении дел, они добавлялись в to do список
// после этого уже работаем с удалением дел
// вешаем event listener на родителя и при нажатии будет удаляться li тег из всего списка дел
// затем сдадия фильтрации, но пока не дошел


let addForm = document.querySelector('.add');
let list = document.querySelector('.todos');

let generateTemplate = todo => {

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;

};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    
    if (todo.length) { 
    generateTemplate(todo);
    addForm.reset(); // если не добавить этот метод то после добавление todo в форме останется прошлое имя, а так форма очищается
    };

});

// остановился на 6,35, все работает, но пока можно вставить в Todo пустой запрос
// чтобы пустой запрос не отправлялся добавлю условие с методом length



// теперь работаем над удалением todos

