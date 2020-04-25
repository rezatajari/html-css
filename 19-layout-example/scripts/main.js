var navToggle = document.querySelector('.nav-toggle'),
    nav = document.querySelector('.nav');


navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    navToggle.classList.toggle('is-active');
    nav.classList.toggle('is-active');
})