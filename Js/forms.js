//Тех поддержка
const buttonTech = document.querySelector(`#tech`);
const tech = document.querySelector(`#shadow-block-form`);
const buttonClose = document.querySelector(`#close-form`);

buttonTech.addEventListener(`click`, () =>{
    tech.classList.remove(`hidden`);
});

buttonClose.addEventListener(`click`, () =>{
    tech.classList.add(`hidden`);
});
//------

//Feedback
const buttonTech2 = document.querySelector(`#fback`);
const fBack = document.querySelector(`#shadow-block-form-fback`);
const buttonClosefBack = document.querySelector(`#close-form-fback`);

buttonTech2.addEventListener(`click`, () =>{
    fBack.classList.remove(`hidden`);
});

buttonClosefBack.addEventListener(`click`, () =>{
    fBack.classList.add(`hidden`);
});
//-----
