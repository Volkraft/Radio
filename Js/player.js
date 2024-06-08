(function () {
const nightMode = document.querySelector(`.night-mode`);
const sun = document.querySelector(`#sun`);
const moon = document.querySelector(`#moon`);
const player = document.querySelector(`#rad_player`);

nightMode.addEventListener(`click`, () =>{
    document.body.classList.toggle(`night`);
    sun.classList.toggle(`hidden`);
    moon.classList.toggle(`hidden`);
    
    if(player.closest(`.night`)){
        document.querySelector(`#rad_player`).style="background-color: #3b3b3b";
    }else{
        document.querySelector(`#rad_player`).style="background-color: #fff";
    }
});

//Бургер
const burger = document.querySelector(`#burger`);
const nav = document.querySelector(`#nav`);

burger.addEventListener(`click`, () =>{
    burger.classList.toggle(`active`);
    nav.classList.toggle(`active`);
}); 
})();