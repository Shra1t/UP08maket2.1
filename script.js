const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    if (window.innerWidth > 374) {
        hamburger.classList.toggle('active');
        
        menu.classList.toggle('show-menu');
    }
});

let currentSlide = 0;
    const slides = document.querySelectorAll('.slideimg');

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }