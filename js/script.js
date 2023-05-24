const handleDomContentLoaded = function () {
    const body = document.body;
    const header = document.querySelector('header');
    const burgerBtn = document.querySelector('header .nav-btn');
    const overlay = document.querySelector('.header .overlay');
    
    function handleBurgerClick () {
        if (header.classList.contains('is-active')) {
            closeNavigation();
        } else {
            openNavigation();
        }
    }

    function closeNavigation () {
        body.classList.remove('disable-scroll');
        header.classList.remove('is-active');
    }

    function openNavigation () {
        body.classList.add('disable-scroll');
        header.classList.add('is-active');
    }

    burgerBtn.addEventListener('click', handleBurgerClick);
    overlay.addEventListener('click', closeNavigation);
}
    
document.addEventListener('DOMContentLoaded', handleDomContentLoaded);

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelector('.swiper-butt-prev').addEventListener('click', function () {
    swiper.slidePrev();
  });
  
document.querySelector('.swiper-butt-next').addEventListener('click', function () {
    swiper.slideNext();
});