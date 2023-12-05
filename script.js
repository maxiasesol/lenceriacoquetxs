






// Menu reponsivo bulma
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});



const d = document;
const w = window;
const wath = d.querySelector(".btn-wtsp");
const form = d.querySelector(".form");
const nav = d.querySelector(".navbar")
const destacados = d.querySelector(".destacados")
const productos = d.querySelector(".sectiones")
const map = d.querySelector(".map");
const ubicacion = d.querySelector(".ubicacion");
const contacta = d.querySelector(".contacta");
const footer = d.querySelector(".footer");







w.addEventListener("scroll", e => {
    let scrolltop = w.pageYOffset;
    console.log(scrolltop);

    if (scrolltop > 100) {

        wath.classList.add('animate__animated', 'animate_');
    }
    if (scrolltop > 148) {
        destacados.classList.add('animate__animated', 'animate__fadeInUp');
    }
    if (scrolltop > 248) {
        productos.classList.add('animate__animated', 'animate__fadeInUp');
    }
    if (scrolltop > 870) {
        ubicacion.classList.add('animate__animated', 'animate__fadeInUp');
    }
    if (scrolltop > 880) {
        map.classList.add('animate__animated', 'animate__fadeInUp');
    }
    if (scrolltop > 1378) {
        contacta.classList.add('animate__animated', 'animate__fadeInUp');
    }
    if (scrolltop > 1500) {
        form.classList.add('animate__animated', 'animate__fadeInUp');
    }
    if (scrolltop > 1907) {
        footer.classList.add('animate__animated', 'animate__fadeIn');
    }


});



// imagen1 = document.querySelector(".img01");
// imagen2 = document.querySelector(".img02");
// imagen3 = document.querySelector(".img03");
// imagen4 = document.querySelector(".img04");
// imagen5 = document.querySelector(".img05");
// imagen6 = document.querySelector(".img06");
// imagen7 = document.querySelector(".img07");
// imagen8 = document.querySelector(".img08");


// imagen1.addEventListener("mouseover", function () {
//     imagen1.src = "./img/02.jpg";
// })
// imagen1.addEventListener("mouseout", function () {
//     imagen1.src = "./img/01.jpg";
// })


// imagen2.addEventListener("mouseover", function () {
//     imagen2.src = "./03.jpg";
// })
// imagen2.addEventListener("mouseout", function () {
//     imagen2.src = "./02.jpg";
// })

// imagen3.addEventListener("mouseover", function () {
//     imagen3.src = "./04.jpg";
// })
// imagen3.addEventListener("mouseout", function () {
//     imagen3.src = "./03.jpg";
// })

// imagen4.addEventListener("mouseover", function () {
//     imagen4.src = "./05.jpg";
// })
// imagen4.addEventListener("mouseout", function () {
//     imagen4.src = "./04.jpg";
// })

// imagen5.addEventListener("mouseover", function () {
//     imagen5.src = "./06.jpg";
// })
// imagen5.addEventListener("mouseout", function () {
//     imagen5.src = "./07.jpg";
// })

// imagen6.addEventListener("mouseover", function () {
//     imagen6.src = "./07.jpg";
// })
// imagen6.addEventListener("mouseout", function () {
//     imagen6.src = "./08.jpg";
// })

// imagen7.addEventListener("mouseover", function () {
//     imagen7.src = "./08.jpg";
// })
// imagen7.addEventListener("mouseout", function () {
//     imagen7.src = "./01.jpg";
// })

// imagen8.addEventListener("mouseover", function () {
//     imagen8.src = "./02.jpg";
// })
// imagen8.addEventListener("mouseout", function () {
//     imagen8.src = "./03.jpg";
// })