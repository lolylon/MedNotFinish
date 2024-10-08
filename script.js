const slider = document.getElementById('headerSlider');
let scrollAmount = 0;
const slideSpeed = 1; // Скорость прокрутки

function startCarousel() {
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    scrollAmount += slideSpeed;

    // Когда достигли конца, возвращаемся к началу
    if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: 'auto' // Убираем плавную прокрутку для бесшовности
    });
}

// Запуск карусели каждые 20 мс
setInterval(startCarousel, 20);
