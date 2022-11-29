// git lesson 55

// шаги, 1 - query the right dom, затем вешаем even listener и затем callback funtion, что должно произойти
// например, теперь кликая на кнопку выйдет уведомление
// click это один из многие ивентов
let button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('you clicked the button');
});

// теперь попробуем похожее сделать с элементами li
// так как li много и мы берем селектор all, то надо их через foreach сначала вывести

let li = document.querySelectorAll('li');
let sample;
li.forEach(liTag => {

    liTag.addEventListener('click', e => {
        e.target.style.textDecoration = 'line-through';
        // сейчас выше попробую добавить зачеркивание при клике
        
        // ниже добавлю выведение в консоль каждого кликнутого айтема
        console.log(e.target.textContent);
    });
})

// свойство .target позволяет нам увидеть какой пункт был кликнут
// иначе так мы не будем понимать что именно было кликнуто
// таким образом добавляем в аргумент e и затем в консоль e.target
// затем добавил свойство textContent чтобы увидеть что внутри html тега
// иначе бы просто тег li вышел в консоль






