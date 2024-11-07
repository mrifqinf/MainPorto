// VARIABLES LIBRARY
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const hamMenu = document.querySelector('#hamburger-menu');
const navbar = document.querySelector('.navbar');

// SCROLL FUNCTION
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight;;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>  {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    // REMOVE ICON X AND NAVBAR IF SCROLL AND CLICK
    hamMenu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// SCROLL FUNCTION

// HAMBURGER MENU FUNCTION
hamMenu.onclick = () => {
    hamMenu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// HAMBURGER MENU FUNCTION

// SCROLL FUNCTION FROM SCROLLREVEALJS
ScrollReveal({
    reset: true, 
    distance: '1.5rem', 
    duration: 2500, 
    delay: 100
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
// SCROLL FUNCTION FROM SCROLLREVEALJS

// TYPED TEXT FUNCTION
const typed = new Typed('.multiple-text', {
    strings: ['Junior Web Developer', 'Technical Support'],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
});
// TYPED TEXT FUNCTION