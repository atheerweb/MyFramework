var navbar__links = document.querySelector(".navbar__menu ")
var navbar__animation = document.querySelector("#mobile__menu ")

document.querySelector('.navbar__toggle').addEventListener('click', function () {
    navbar__links.classList.toggle('active');
    navbar__animation.classList.toggle('is-active');
});