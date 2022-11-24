// в этом уроке учимся быстро удалять и добавлять классы
// сейчас у нас один параграф с красной рамочкой и стилем в css, попробую сменить на красный стиль с помощью js


// className и classList методы помогают поменять класс элемента
// className - все классы заменяет
// classList - добавляет удаляет один класс


//elem.classList.add/remove("class") – добавить/удалить класс.
//elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.

// попробую удалить класс error у параграфа в index2.html

//let testError = document.querySelector('.error');
// testError.classList.remove('error');

// все сработало 

// попробую поменять на класс success чтобы зеленая рамка стала

//let testError = document.querySelector('p');
// testError.classList.add('success');

// выше код добавил класс success и перезаписал класс error



// теперь будет challenge, у меня в файле будет много параграфов с разными ключевыми словами
// если в абзаце есть слово right сделать зеленую рамку, если wrong, то красную рамку

// тут как я понимаю надо выбрать все p теги и затем с помощью forEach пробежаться и присвоить каждому класс нужный в html

let paragraph = document.querySelectorAll('p');
// console.log(paragraph[0].innerText); // проверил все ли работает 
// буду пользоваться методом строк include() который найдет есть ли в строке слово и вернуть true либо false

paragraph.forEach(para => {
    if (para.textContent.includes('right')) { //если бы на этой строке не добавил textContent то не смог бы добраться именно до текста внутри тега
        para.classList.add('success');
    } else if (para.textContent.includes('wrong')) {
        para.classList.add('error');
    }
    
})




// parents, children, siblings (hmtl в доме это node)
// пониманием такой иеерархии в доме, позволяет нам легче манипулировать html элементами

// например тег article оборачивает несколько p
// мы можем применить изменение ко всем p просто применяя изменению к родителю article

const article = document.querySelector('article');
console.log(article.children); // с помощью свойства children я обращаюсь ко всем элементам родителя article
// главное не забывать что все дети, которые выйдет, это не массив, а htmlcollection это значит
// что мы не сможем перебрать как массив с forEach перед этим нужно будет этот htmlcollection тип переделать в массив

// ниже переделываем в массив с помощью Array

//Array.from(article.children); // эта штука позволяет в массив переделать htmlcollection
// главное помнить что Array выше не уничтожает сам элемент, просто как бы переделывает в новое значение
//console.log(Array.from(article.children)); // и рил получилось

Array.from(article.children).forEach(hTag => {
    hTag.innerHTML += ' new info with children property';

})

// таким образом выше смогу в каждый родительский элемент добавить новую инфу

// так же можем искать родителя элемента с помощью свойства .parentElement и затем работать с ним
// сейчас найдем родителя элемента h3

let findParent = document.querySelector('h3');
console.log(findParent.parentElement);

// и действительно код выше показывает родители h3 - article

// свойство .nextElementSibling показывает сиблинга
// например у тэга h3 след сиблинг h6 значит его и покажет

let findNextSibling = document.querySelector('h3');
console.log(findNextSibling.nextElementSibling);

// и действительно выше все сработало