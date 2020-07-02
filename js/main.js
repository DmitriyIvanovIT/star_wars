window.onload = function () {
    //initialize swiper when document ready
    let mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 16,
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        }
    });
};