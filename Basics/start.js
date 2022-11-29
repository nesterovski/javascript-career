hey = 5;
console.log(hey);
console.log('hey friend');


// ниже буду тренироваться использовать методы для строк

let info = "this is my first code using methods";
console.log(info);

// Метод toUpperCase() используется для перевода всей строки в верхний регистр.

let CapsInfo = info.toUpperCase();
console.log(CapsInfo);

// Метод replace() используется для замены части строки другой строкой. Этот метод чувствителен к регистру. Тут новая правка

let ReplaceInfo = info.replace("code", "replacement");
console.log(ReplaceInfo);

// ниже тренируюсь над template strings `` (именно в таких скобках надо, находится где буква Ё)

let author = "Andrew Galyatkin";
let budget = 5000;
let result = `This person ${author} has a budget of ${budget} $`;
console.log(result);

