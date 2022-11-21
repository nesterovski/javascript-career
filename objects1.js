// объект можно сравнить с предметами в реальной жизни
// телефон имеет свойства (модель, размер, цвет) и методы (то что может делать: звонить, делать фото и тд)
// если аналогия идет на js, то тут пример пользователя
// user object. properties: name, username, gender. methods: log in, log out

// creating an object literal 

// let user = {

//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'berlin',
//     blogs: ['why mac and cheese rules', '10 things to make with marmite']



// };

// console.log(user); // покажет весь обьект в консоль
// console.log(user.name); // покажет конкретный элемент объекта

// если хотим изменить (обновить) элемент объекта

// user.age = 35;
// console.log(user.age);

// еще один способ дотянуться до элемента объекта, но теперь без точки как выше

// console.log(user['location']); 

// adding methods to objects (по идее так же как и свойства)
// строка loging как раз добавляет метод (простыми словами функцию) объекту

let user = {

    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make with marmite'],
    login: function (){
        console.log('the user logged in');
    },
    logout() { // выше пример полного написания через function, но можно сократить как тут и ниже
        console.log('the user logged out');
    },
    logBlogs(){ // это foreach с callback, иначе бы не получилось вытащить элементы массива из объекта
        console.log('this user has written the following blogs:');
        this.blogs.forEach (blog => {
            console.log(blog);
        })        
    }
    
};


user.login();
user.logout();
user.logBlogs();

// выше в объекте user у нас есть массив, просто так его вывести не получится
// для этого будем пользоваться ключевым словом this

