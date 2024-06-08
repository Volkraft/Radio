(function () {
//Ночной режим
const nightMode = document.querySelector(`.night-mode`);
const sun = document.querySelector(`#sun`);
const moon = document.querySelector(`#moon`);
const button = document.querySelector(`#button1`);

nightMode.addEventListener(`click`, () =>{
    document.body.classList.toggle(`night`);
    sun.classList.toggle(`hidden`);
    moon.classList.toggle(`hidden`);
});
//----

//Бургер
const burger = document.querySelector(`#burger`);
const nav = document.querySelector(`#nav`);

burger.addEventListener(`click`, () =>{
    burger.classList.toggle(`active`);
    nav.classList.toggle(`active`);
}); 
})();

