const btnRegishon = document.querySelector('.header__nuw-acoutn');
const form = document.querySelector('.form');
const clous = document.querySelector('.clous');

btnRegishon.addEventListener("click", function() {
    form.classList.toggle('none');
});

clous.addEventListener("click", function() {
    form.classList.toggle('none');
})