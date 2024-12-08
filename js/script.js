let menu = document.querySelector('.menu');
let menu_bar = document.querySelector('.menu_burger');
let close = document.querySelector('.img');

menu_bar.addEventListener('click', () => {
  menu.classList.add('active_menu');
});

close.addEventListener('click', () => {
  menu.classList.remove('active_menu');
});
