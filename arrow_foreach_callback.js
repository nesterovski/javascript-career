// arrow functions lesson 33 git 
// позволяют кратко писать синтаксис функций (чаще всего используется)


 // традиционная (полная) функция

//const calcArea = function(radius){
  //  return 3.14 * radius**2;
// } закомментил чтобы ниже функция работала

// стрелочная функция
// слово function убираем, если аргумент в скобках 1, то скобки убираем, если 2 или 0 то оставляем

// const calcArea = radius => {
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log('area is:', area);

// можно упрастить еще больше
// если return на одной строке как выше, то поднимаем его и убираем фигурные и слово return

const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);


// практикуем превращение обычной функции в стрелочную

// const greet = function(){
// return 'hello, world';
// }

// console.log(greet());

// ниже упрощаем

const greet = () => 'hello, world';
console.log(greet());

// еще одно задание по упрощению

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// console.log(bill[10, 15, 30], 0.20);

//ниже упрощаем

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
    }
    return total;
    };

    console.log(bill[10, 15, 30], 0.20);


// for each method & callbacks lesson 35 git
// callback functions in action
// тему callback нормальнь не понял, дошло только то, что это функция в функции
// но зачем это и как грамотно с ней работать не понял

