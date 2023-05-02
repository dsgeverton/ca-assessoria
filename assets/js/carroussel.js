let qtdCards = calcularCardsNaHorizontal();

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: qtdCards,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: true
    },
    mousewheel: {
        forceToAxis: true,
    }
});

window.addEventListener('resize', function () {
    qtdCards = calcularCardsNaHorizontal();
    window.addEventListener('resize', function () {
        swiper.params.slidesPerView = calcularCardsNaHorizontal();
        swiper.update();
    });
    console.log(`Você pode exibir ${qtdCards} cards na horizontal`);
});

function calcularCardsNaHorizontal() {
    const larguraCard = 340; // largura do card em pixels
    const larguraSwiper = document.querySelector('.swiper').clientWidth; // largura do swiper em pixels
    const qtdCards = Math.floor(larguraSwiper / larguraCard); // quantidade de cards que cabem na tela'
    if (qtdCards > 3) {
        return 3;
    }
    return qtdCards;
}

