if (screen.width < 1200) {
    var promoSwiper = new Swiper('.promo_swiper', {
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
        },
    });
}
var swiper = new Swiper('.about_swiper', {
    loop: true,
    spaceBetween: 30,
    speed: 2800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1000,
    },
});