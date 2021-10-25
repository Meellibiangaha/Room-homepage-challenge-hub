//получаем 2-е кнопки
//все картинки/текс и создаём "i", как индекс текущей картинки
let left = document.querySelector('.but_left');
let right = document.querySelector('.but_right');
//с помощью querySelectorAll получаем массив из слайдов,
//что мне показалось очень удобным
let image = document.querySelectorAll('.slide');
let h1 = document.querySelectorAll('.h1text');
let p = document.querySelectorAll('.ptext');
let i = 0;

//идея функции заключается в добавлении и удалении display: block
//и смене текста
//из-за этого я не смог придумать анимацию к смене слайдов

left.addEventListener("click", function () {
    --i;
    if (i < 0) {
        image[i+1].classList.remove("block");
        h1[i+1].classList.add("hide");
        p[i+1].classList.add("hide");

        i = 2;

        image[i].classList.add("block");
        h1[i].classList.remove("hide");
        p[i].classList.remove("hide");
    } else {
        h1[i+1].classList.add("hide");
        p[i+1].classList.add("hide");
        image[i+1].classList.remove("block");

        image[i].classList.add("block");
        h1[i].classList.remove("hide");
        p[i].classList.remove("hide");
    }
})

right.addEventListener("click", function () {
    ++i;
    if (i >= image.length) {
        image[i-1].classList.remove("block");
        h1[i-1].classList.add("hide");
        p[i-1].classList.add("hide");

        i = 0;

        image[i].classList.add("block");
        h1[i].classList.remove("hide");
        p[i].classList.remove("hide");
    } else {
        h1[i-1].classList.add("hide");
        p[i-1].classList.add("hide");        
        image[i-1].classList.remove("block");

        image[i].classList.add("block");
        h1[i].classList.remove("hide");
        p[i].classList.remove("hide");
    }
})