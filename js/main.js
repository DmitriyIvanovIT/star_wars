window.onload = function () {
    //initialize swiper when document ready
    let mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 16,
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            993: {
                slidesPerView: 3
            },
            586: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    });
};