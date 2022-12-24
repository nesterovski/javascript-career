// part 8 lesson 4

const correctAnswers = ['B', 'A', 'B', 'A'];
let result = document.querySelector('.result');

let form = document.querySelector('.quiz-form');
form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // checking answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });


    // теперь надо дотянуться до текста где проценты, показывающие результат
    // выбираем главный див и с помощью quSelector цепляем span где как раз проценты

    scrollTo(0, 0); // это метод window, по идее надо было написать window.scrollTo но тк window главный, то не надо (параметры этого метода координаты X и Y)
    result.querySelector('span').textContent = `${score}%`;

    // тк секция с резами скрыта, нужно прописать код чтобы она появлялась после отправки 
    // для этого удаляем класс ответсвенный за скрытие шапки

    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 50);


});

// part 8 lesson 5

// window object

// эта штука является матерью всех объектов, даже дом
// когда мы пользуемся свойствами window то затем не нужно ставить точку и писать метод
// хороший пример это console.log --> по идее нужно было писать window.console.log это тоже самое
// у window object есть интересные методы, которые как раз понадобятся в проекте
// например перекидывать человека на результат после теста
// сейчас подставлю переменную с результатом на экран теста (засуну выше в функцию)


// все получилось, теперь используем метод window object чтобы нас на вверх перекинуло

// код нужно расположить до подсчета результатов, чтобы нас перекинуло и сразу начало считать


// также с помощью window object можно делать анимацию, но это сложно и пока просто подставлю код готовый для анимации

