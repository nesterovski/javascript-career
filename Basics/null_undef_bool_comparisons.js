// в этом файле узнаю про null, undefined, booleans, comparisons

//null отдельный тип данных значение, которое  «ничего», «пусто» или «значение неизвестно»

//undefined если переменная объявлена, но значение не присвоено, то она будет undefined

//boolean позволяет проверить правда или неправда 
//== loose comparison (тип может быть разный), === strict comparison (строго один тип)

let number = 5;
let stringNumber = "5"
console.log(number == 5); //тут покажет true
console.log(stringNumber == 5); //тут покажет тоже true тк loose comparison

let strictNumber = 5;
let strictStringNumber = "5"
console.log(strictNumber === 5); //тут покажет true
console.log(strictStringNumber === 5); //тут покажет тоже false тк loose comparison

// type conversion - позволяет из одного типа сделать другой
// с помощью оператора Number() или String()
// typeof позволяет проверить тип

let testVariable1 = 5;
let testVariable2 = "5";

console.log(testVariable1);
console.log(typeof testVariable1); // проверяем тип переменной 
console.log(typeof testVariable2);

// теперь попробую из testVariable 2 сделать number вместо string

testVariable2 = Number(testVariable2);
console.log(testVariable2);
console.log(typeof testVariable2); // и рил получилось 

// теперь попробую из testVariable 1 сделать string вместо number

testVariable1 = String(testVariable1);
console.log(testVariable1);
console.log(typeof testVariable1); // получилось, предыдущая строчка произвела type conversion 


// также можно переводить цифры и в тип boolean