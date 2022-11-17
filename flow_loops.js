//loops are handy, if you want to run the same code over and over again, each time with a different value.
//например, у нас массив, будет запарно выводить по каждому значению что-то на экран
//можно автоматизировать с помощью loop (например, вытащить всех людей из бд)

// for loop
// синтаксис 

for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}

console.log('loop is finished');

// expr 1 переменная с начальным значением
// expr 2 условие
// expr 3 увеличиваем чтобы цикл шел вперед
// часто бывает что мы не знаем сколько у нас предметов
// например массив, тогда в expr 2 нужно использовать метод
//.length - считает кол-во элементов в массиве, а если применять к строке, то считает кол-во символов

// для примера создам массив и затем применю for loop
// чтобы в консоль вывести содержимое 

let names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++) { //.length позволяет любой обьем данных, даже если мы не знаем кол-во элементов в массиве или бд
    console.log(names[i]); // надо i тк по loop прибавляется к ней по одному и всех перебирает
}

// также можем сделать html шаблон

let students = ['alex', 'kate', 'rob'];

for (let i = 0; i < students.length; i++) {
    console.log(`<div>${students[i]}</div>`); // не забываем, что перебираем массив с помощью переменной массива и i для переборки
}

// while loop
// по сути это одно и тоже что for, просто другой синтакс
// в for i не нужно было объявлять заранее - тут нужно. i++ идет в теле
// пример while с такими же задачами как for выше

let i = 0;

while (i < 7) {
    console.log(i);
    i++;
}

let clients = ['eugene', 'luzik', 'artyom'];

showClients = 0; // обычно делают i = 0, но просто выше уже пользовались такой переменной, поэтому я решил взять другую говоряющую переменную

while (showClients < clients.length) {
    console.log(clients[showClients]);
    showClients++;
}

// do while loop просто дополнение к while
// нужен чтобы хотя бы раз выполнить итерацию даже если она по условию не должна случиться

let u = 3; // i была занята выше

do {
    console.log(u);
    u++;
} while (u < 1); // несмотря на то, что u больше 1, один раз все равно выполнится


// if (condition) statement
// попробуем проверить длину пароль

let password = 'pass';

if (password.length > 3) {
    console.log('your password length is correct');
}

//если будет в переменной password больше 3 символов, то сообщение выведется в консоль

// теперь условие больше с else

let username = "mydeepsix";

if (username.length > 6) {
    console.log('you have a good username');
} else {
    console.log('you have a bad username');
}

// теперь условие больше с else if

let email = 'mydeepsix@ya.ru';

if (email.includes('@')) { //метод include проверяет есть ли такой символ
    console.log('you have a correct email');
} else if (email.includes('#')) {
    console.log('you cannot use #');
} else {
    console.log('your email is strange');
}
// все работает, можно в переменную email подставлять разные штуки из условий и все сработае

// logical operators
// || - or; && - and

// пратика с || - or
let age = 18;

if (age == 18 || age == 24) {
    console.log('your age is right');
} else {
    console.log('your age is not 14 or 24');
}

// пратика с && - and

let surname = 'nesterov';

if (surname = 'nesterov' && surname.includes('v')) {
    console.log('yes, surname is correct');
} else {
    console.log('you have not typed nesterov');
}

// logical not - позволяет сделать opposite

let familyname = true;
console.log(!familyname); // по идее должно быть true, но будет false тк мы используем logical not

// break используется чтобы выйти из loop
// набираем сто баллов и выходим, и дальше не выводим в консоль
// break вставляется с if в тело for

let points = [50, 25, 70, 100, 50, 10];

for (i = 0; i < points.length; i++) {
    console.log(points[i]);
    if (points[i] === 100) {
        console.log('you win! you get 100');
        break;
    }
}


// continue в свою очередь дает возможность перепрыгивать через итерацию 
// например, нам не охота выводить 0 в консоль, то сделаем следующее

let marks = [1, 4, 0, 5, 100, 6];

for (i = 0; i < marks.length; i++) {


    if (marks[i] === 0) {
        continue; // важно ставить continue в начало, иначе не сработает если console.log ниже сделать выше
    }

    console.log('all of your marks:' + marks[i]);
}
