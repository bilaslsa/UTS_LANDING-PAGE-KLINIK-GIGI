let menu = document .querySelector("#menu-btn");
let navbar = document .querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

function opennewpage() {
    window.open("index pesan.html", "_blank");
}