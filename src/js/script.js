const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'); 
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active'); 
});

const counters = document.querySelectorAll('.scale__procent_proc'),
      lines = document.querySelectorAll('.scale__line_top div');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});