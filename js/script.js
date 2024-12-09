let menu = document.querySelector(".menu");
let menu_bar = document.querySelector(".menu_burger");
let close = document.querySelector(".img");
let black = document.querySelector(".black");
let orange = document.querySelector(".orange");
let white = document.querySelector(".white");
let grey = document.querySelector(".grey");
let red = document.querySelector(".red");
let car_img = document.querySelector(".red_car-img img");
let first_img = document.querySelector("#first_img");
let second_img = document.querySelector("#second_img");
let third_img = document.querySelector("#third_img");
let four_img = document.querySelector("#fourthy_img");
let fifty_img = document.querySelector("#fifthy_img");
let close_img = document.querySelector(".close_img");

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
orange.addEventListener("click", () => {
  car_img.src = "./assets/images/orange_car.png";
});
white.addEventListener("click", () => {
  car_img.src = "./assets/images/white_car.png";
});
grey.addEventListener("click", () => {
  car_img.src = "./assets/images/grey_tank-color.png";
});

// Modal img

close_img.addEventListener("click", () => {
  menu.classList.remove("active");
});
