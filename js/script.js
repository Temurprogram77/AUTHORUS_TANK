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
let close_img = document.querySelector(".close_icon");
let firstCar_img = document.querySelector("#first-car_img");
let secondCar_img = document.querySelector("#second-car_img");
let thirdCar_img = document.querySelector("#third-car_img");
let fourthCar_img = document.querySelector("#fourth-car_img");
let fiveCar_img = document.querySelector("#fifthy-car_img");
let modal = document.querySelector(".modal_car-background");
let big_img = document.querySelector("#big-img");

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
  modal.classList.remove("active");
});

firstCar_img.addEventListener("click", ()=>{
  modal.classList.add("active");
})
secondCar_img.addEventListener("click", ()=>{
  modal.classList.add("active");
})
thirdCar_img.addEventListener("click", ()=>{
  modal.classList.add("active");
})
fourthCar_img.addEventListener("click", ()=>{
  modal.classList.add("active");
})
fiveCar_img.addEventListener("click", ()=>{
  modal.classList.add("active");
})

first_img.addEventListener("click", () => {
  big_img.src = "./assets/images/first_car.png";
});
second_img.addEventListener("click", () => {
  big_img.src = "./assets/images/second_car.png";
});
third_img.addEventListener("click", () => {
  big_img.src = "./assets/images/third_car.png";
});
four_img.addEventListener("click", () => {
  big_img.src = "./assets/images/four_car.png";
});
fifty_img.addEventListener("click", () => {
  big_img.src = "./assets/images/five_car.png";
});

