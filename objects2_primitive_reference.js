// objects in array вроде lesson 41 git
// мы можем в массив засунуть объекты, это оч удобно когда мы храним много данных
// например сайт с фильмами или блоги

// ниже в массив вставил два обьекта

// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs[0].title);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
      {title: 'why mac & cheese rules', likes: 30},
      {title: '10 things to make with marmite', likes: 50}
    ],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(`${blog.title} has ${blog.likes} likes`);
      })
    }
  };
  
  // console.log(this);
  user.logBlogs();


  // math object - встроенный объект в js, которые позволяет делать полезные штуки вроде округления или рандомного числа

  const area = 7.7;

  console.log(Math.round(area)); // в качестве аргумента идет переменная данными которой манипулируем
  console.log(Math.floor(area)); // округляет вниз
  console.log(Math.ceil(area)); // округляет вверх
  console.log(Math.trunc(area)); // убирает десятичное число

  // random numbers

  const random = Math.random();
  console.log(random); // выходит рандомное число между 0 и 1

  // если хотим рандомное число от 1 до 100, то умножаем на 100 
  // ну и округлим чтобы не было десятичного числа
  
  let randomNum = random * 100;
  console.log(Math.trunc(randomNum));

  
  
  
  // primitive and reference type
  // primitive это цифры, строки, булиан и другие, где тупо одно число записано, без сложностей
  // reference уже объемные данные вроде массивов, объектов и тд
  // почему это важно знать?
  // primitive можно копировать из одной переменной в другую и одни будут жить сами по себе
  // то есть если одну переменную отредактируем, то другая не изменится
  // reference же, мы можем одну переменную в другую копировать, но обьект не копируется а просто ссылается друг на друга
  // то есть если что-то изменим в одной переменной, то это поменяет значение и в основном обьекте

  // primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);

// примеры выше оч хорошо все это показывают 
// в primitive переменные сами по себе живут и одна другую не меняет
// в reference при изменении данных копированной, в оригинальной все равно меняется

