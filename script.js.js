document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });
});
