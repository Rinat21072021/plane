const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-burger');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('burger-active')
})