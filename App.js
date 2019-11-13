const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navlinks = document.querySelectorAll('.nav__links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav__active');


        navlinks.forEach((link, index) => {
            link.style.animation = 'navlinksfade 0.5s ease forwards ${index / 7 + 1.5}s';


        });

    });


}

navSlide();