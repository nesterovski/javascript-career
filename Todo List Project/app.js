// part 10 To do list project

// шаги как выполнить проект:
// сначала делаем ссылку на форму (дом) и затем вешаем event listener
// затем внутри event listener вытаскиваем данные пользователя которые он вводит и форматируем их (например метод trim чтобы не было пустых пробелов)
// главное не забыть еще name окошечка ввести, куда данные вводятся
// затем пишем код чтобы при добавлении дел, они добавлялись в to do список
// после этого уже работаем с удалением дел
// вешаем event listener на родителя и при нажатии будет удаляться li тег из всего списка дел
// затем сдадия фильтрации, но пока не дошел


const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

const filterTodos = term => {

  // add filtered class
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

// add todos event
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    addForm.reset(); // если не добавить этот метод то после добавление todo в форме останется прошлое имя, а так форма очищается
  }

});

// delete todos event
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});

// filter todos event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});


