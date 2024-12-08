let menu = document.querySelector(".menu");
let menu_bar = document.querySelector(".menu_burger");
let close = document.querySelector(".img");
let black = document.querySelector(".black");
let red = document.querySelector(".red");
let car_img = document.querySelector(".red_car-img img");

menu_bar.addEventListener("click", () => {
  menu.classList.add("active_menu");
});

close.addEventListener("click", () => {
  menu.classList.remove("active_menu");
});

// cars colors clicked

black.addEventListener("click", () => {
  car_img.src = "./assets/images/black_tank.png";
});
red.addEventListener("click", () => {
  car_img.src = "./assets/images/red_car_big.png";
});
