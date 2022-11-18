// functions

// function is declared by a function key word followed by a name, followed by parentheses (). 

// function declaration

function greet () {
    console.log('hello there');
}

greet(); // называется calling или invoking the function

// function expression 
// используется когда встраиваем сразу в переменную
// будет чаще использоваться в жизни чем просто способ function declaration

let speak = function(){
console.log('good day');
}; // важно помнить что надо ставить ; если у нас именно function expression, в declaration не надо

speak();
// function declaration имеет плюс что может быть hoisted 
// тип если мы в самом конце кода функцию именно так сделаем, то она все равно будет работать
// в function expression так уже не получится



// arguments and parameters

// A parentheses can take a parameter. If a function take a parameter it will be called with argument. 
// A function can also take a default parameter. To store a data to a function, a function has to return certain data types. 
// To get the value we call or invoke a function


let talk = function (name, surname) { // name тут является параметром (как бы создается local переменная, которую можно использовать в функции)
console.log(`good morning! ${name} ${surname}`);
};

talk('eugene', 'nesterov'); // если я сюда pass value into the function и она присвоится переменной name в функции
// можно передавать столько значений, сколько параметров в функции; присваиваться будут по порядку

// можно установить параметры по умолчанию если вдруг туда не будут передаваться значения, пример ниже

let tell = function (name = 'Eugene', surname = 'Nesterov') {
    console.log(`hey, ${name} ${surname}`);
};

tell('lu', 'zik'); // если уберу эти значения, то подставяться параметры по умолчанию eugene nesterov



// return lesson 32 git
// возвращает результат, который получился после работы функции и этот результат можно записать в переменную чтобы его там хранить


function sum(a, b) {
    return a + b;
  }
  
  let result = sum(1, 2);
  console.log( result ); // 3


const calcArea = function (radius){
    let area = 3.14 * radius**2;
    return area;
}

console.log(calcArea(5));




