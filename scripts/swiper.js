document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) {
        new Swiper(".contents__cards--mobile.swiper", {
            slidesPerView: 1,
            grid: {
                rows: 2,
                fill: 'row',
            },
            spaceBetween: 20,
            freeMode: true,
        });
    }

    if (window.innerWidth <= 768) {
        new Swiper(".platforms__container--mobile.swiper", {
            slidesPerView: 1,
            grid: {
                rows: 2,       
                fill: 'row',
            },
            spaceBetween: 16,
            freeMode: true,
            breakpoints: {
                480: { slidesPerView: 3 },
                640: { slidesPerView: 4 }
            }
        });
    }
});