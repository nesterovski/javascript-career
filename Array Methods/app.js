// part 9 lesson 1
// https://github.com/iamshaunjp/modern-javascript/tree/lesson-71/chapter_9

// мы уже знаем несколько методов для массивов (например foreach)
// в этой главе разберем еще 5 полезных методов

// filter method

// используется чтобы отфильтровать значения по конкретным условиям
// например, из массива ниже выбрать только то, что выше 20
// внутри метода filter должна быть callback function 
// она как раз проверяет каждое значение массива

const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter((score) => {
    return score > 20;
});

// console.log(scores);

// если мы выведем в консоль массив так, то мы не увидим фильтрацию
// тк такой метод не desctructive, то есть не будет менять сам массив
// поэтому нужно выше создать переменную и в нее вложить метод

console.log(filteredScores); // вот так уже работает фильтрация

// более сложный пример
// попробуем из многих пользователей отобрать только с премиум подпиской
// массив, в который входят объекты со свойствами name и premium

const users = [
    { name: 'shaun', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: false },
    { name: 'chun-li', premium: true }
];

// const premiumUsers = users.filter((user) => {
//     return user.premium;
// });

// console.log(premiumUsers);

// выше все получилось, но ниже я упрощу синтаксис

const premiumUsers = users.filter(user => user.premium); // в этом случае return не пишем

console.log(premiumUsers);



// map method

// берет массив и делает новый массив с определенными изменениями (мб с измененными ценами)

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map((price) => {
    return price / 2;
});

console.log(salePrices);

// то есть вы мы взяли массив с прошлыми ценами и с помощью map
// сделали новый массив с уже изменнеными на половину ценами 
// синтаксис можно упрастить как в filter, но сейчас не буду


// ниже более сложный пример с map

const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];

// теперь пройдемся по каталогу с ценами выше и сделаем скидку
// в два раза ниже если цена выше 30 в новом массиве который создатся 

const saleProducts = products.map((product) => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 }; // возвращаем новый обьект в котором будут значения
    } else {
        return product;
    }
});

console.log(saleProducts);

// выше все получилось, создался новый массив в котором создался новый обьект в котором обновленные значения


// find method

// возвращает первый элемент массива, который подходит под условие, возратит это значение и остановится

const newScores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = newScores.find((score) => {
    return score > 50;
});

console.log(firstHighScore);

// вернулось 60 так и надо, тк это первое значение больше 50 и дальше просто все остановилось

//sort and reduce methods
// достаточно сложные и пока не вижу смысла разбирать


// chaining arrays
// когда к одному массиву мы применяем сразу несколько методов, то
// мы используем chaining для того чтобы все было более компактно


const goodProducts = [

    { name: 'gold star', price: 30 },
    { name: 'green shells', price: 10 },
    { name: 'red shells', price: 40 },
    { name: 'banana skin', price: 5 },
    { name: 'mushroom', price: 50 }

];

// это запись без chaining

// const goodFiltered = goodProducts.filter(product => product.price > 20);

// const promos = goodFiltered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;

// });

// console.log(promos);

// это запись с chaining так намного компактнее и читабельнее

// берем promos тк в итоге это то что должно получиться
// затем фильтруем что выше 20 и добавляем точкой в конце .map чтобы создался новый массив
// каждый раз при chaining лучше переходить на новую строку для удобства

const promos = goodProducts
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);