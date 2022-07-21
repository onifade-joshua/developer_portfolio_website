"use strict";
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
let btnScrollToTop = document.querySelector("#btn-scroll-to-top");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });

    //scroll to up arrow
    btnScrollToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });

});
//fade in & out button
window.addEventListener("scroll", () => {
    let position = window.scrollY;
    if (position <= 10) {
        btnScrollToTop.classList.toggle("fade-in");
        btnScrollToTop.classList.toggle("fade-out");
    }
    // console.log(position);

});



