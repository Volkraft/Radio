const anchors = document.querySelectorAll(`a[href*="#"]`);

anchors.forEach((el) => {
    el.addEventListener(`click`, (e) =>{
        e.preventDefault();
        const blockId = el.getAttribute(`href`);
        document.querySelector(``+blockId).scrollIntoView({
            behavior:`smooth`,
            blokk:`start`,
        })
    })
});