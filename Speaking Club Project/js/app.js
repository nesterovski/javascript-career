
const items = document.querySelectorAll(".accordion button");

items.forEach((item) => item.addEventListener("click", toggleAccordion));

function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (let item of items) {
        item.setAttribute("aria-expanded", false);
    }

    if (itemToggle === "false") {
        this.setAttribute("aria-expanded", true);
    }
}
/* Меню бургер */
const Burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__list");
const body = document.querySelector("body");
const links = document.querySelectorAll(".bold-link");
links.forEach(el => {
    el.addEventListener("click", function () {
        if (body.classList.contains("lock")) {
            body.classList.remove("lock");
        }
        menu.classList.toggle("active");
        Burger.classList.toggle("active");
    })
})
Burger.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
});

/* Анимации */

const animItems = document.querySelectorAll('.animate')
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect()
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}
