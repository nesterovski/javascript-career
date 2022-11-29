// разбираем еще больше event listeners

// copy - позволяет отследить копирование и что-то сделать 

// отображаем человеку в консоль что он украл контент после того как он копирует
let copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('you steal my content!');
});


// показываем координаты мышки при движении

let box = document.querySelector('.box');
box.addEventListener('mousemove', e => {

    box.innerHTML = `your X positon is ${e.clientX} and your Y position is ${e.clientY}`; // e это событие и у него можно посмотреть разные свойства если выввести его в консоль, и одно из свойств e это позиция по Y или X
});


// с помощью этого event listener выведем координаты прокрутки колесика мышки в консоль


document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});