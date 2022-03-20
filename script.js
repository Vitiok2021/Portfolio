


/* ----------------burger------------------ */

const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header__nave-close');

burgerItem.addEventListener("click", () => {
    menu.classList.toggle('header__nav_active');
});

const allLink = document.querySelectorAll('.header__item_link');

allLink.forEach((el) => el.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
}));



/* --------------change images--------------- */




const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelector('.portfolio__buttons');


function changeImage(event) {

    if (event.target.dataset.season === "winter") {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.png`);
    }
    else if (event.target.dataset.season === "spring") {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.png`);
    }
    else if (event.target.dataset.season === "summer") {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.png`);
    }
    else if (event.target.dataset.season === "autumn") {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.png`);
    }

}

portfolioBtns.addEventListener('click', changeImage);



/*----------------Button----------avtive-------------------*/



// const portfolioBtn = document.querySelectorAll('.portfolio__button');


// for (let i = 0; i < portfolioBtn.length; i++) {

//     function changeClassActive() {
//         portfolioBtn[i].classList.toggle('active');
//     }
//     portfolioBtn[i].addEventListener('click', changeClassActive);
// }



// const portfolioBtn = document.querySelectorAll('.portfolio__button');
// function as(elem) {
//     elem.classList.toggle('active');
// }
// for (let i = 0; i < portfolioBtn.length; i++) {


//     portfolioBtn[i].onclick = as;
// }





























// for (let i = 0; i < portfolioBtn.length; i++) {
//     portfolioBtn[i].addEventListener('click', () => {
//         portfolioImages.forEach((img, index) => img.src = `./assets/img/portf2.png`);
//     });
// }


// (function changeClass() {
//     let but = document.querySelectorAll('.portfolio__button');
//     // console.log(but);
//     for (let i = 0; i < but.length; i++) {

//         but.classList.add('active');
//     }
//     but.classList.remove('active');


// }());


