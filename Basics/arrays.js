// ниже урок по arrays - chapter 2 (JavaScritp Basics)
// синтакс array - let ninjas = [];

let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);

// чтобы вытащить что-то конкретное из массива

console.log(ninjas[1]);

// чтобы переписать значение на другое

ninjas[1] = 'ken';
console.log(ninjas[1]);

// также как и строки, массивы имеют свойства и методы
// .length метод считает сколько элементов в массиве

console.log(ninjas.length);

// .join() метод берем массив и соединяет все элементы в одну строку

let joinResult = ninjas.join(',');
// запятая в скобках соединяет элементы запятой, можно поставить и другой знак
console.log(joinResult);

// .indexOf() показывает какой по счету элемент в массиве

let indexResult = ninjas.indexOf('shaun');
console.log(indexResult);

// .concat() метод соединяет два массива вместе
// .concat ([]) как бы сам еще создаем доп массив в скобках
let concatResult = ninjas.concat(['ken', 'crystal']);
console.log(concatResult);

// .push() метод добавляет в массив новые данные, и возвращает итоговое кол-во данных

let pushResult = ninjas.push('ken');
console.log(pushResult);
//в массиве было три элемента + ken = получилось 4

// .pop() метод выводит последний элемент

let popResult = ninjas.pop();
console.log(popResult);
// вышел ken потому что перед этим мы через push добавили ken








