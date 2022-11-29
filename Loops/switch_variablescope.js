// switch statements
// удобно сверяться по разным значениям и выдавать результат на каждую проверку
// аналог if / else if только намногок компактнее

let weather = 'rainy'
switch (weather) {
    case 'rainy':
        console.log('You need a rain coat.')
        break // без break будет выполнять весь код ниже
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default: //если будет значение которого нет в switch
        console.log(' No need for rain coat.')
    // в самом низу break не надо

}

// switch проверяет все по strict equality

// еще один пример
let grade = 'G';

switch (grade) {
    case 'A':
        console.log('wow, you got an A');
        break

    case 'B':
        console.log('wow, you got a B');
        break

    case 'C':
        console.log('wow, you got a C');
        break

    case 'D':
        console.log('wow, you got a D');
        break

    default:
        console.log('this grade does not exist');


}

// variables and block scope
// global scope переменная может быть доступна откуда угодно
// если мы изменяем переменную в блоке кода (например, if) то она
// изменится только там, не global, а будет только local

let age = 30;
if (true) {
    let age = 40;
    console.log('inside 1st code block' + age);
}
console.log('outside code block' + age);

