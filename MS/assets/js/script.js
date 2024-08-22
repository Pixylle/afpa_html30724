const carouselWrapper = document.querySelector('.carousel-coverflow-wrapper');
let angle = 0;

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    angle -= 60;
    carouselWrapper.style.transform = `rotateY(${angle}deg)`;
});

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    angle += 60;
    carouselWrapper.style.transform = `rotateY(${angle}deg)`;
});
