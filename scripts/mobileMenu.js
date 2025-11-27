const burger = document.getElementById('burger-menu');
const closeMenu = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
    navbar.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navbar.classList.remove('active');
});