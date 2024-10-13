// Typed.js initialization
var typed = new Typed(".multiple-text", {
    strings: ["Software Student", "Full-Stack Developer", "Mobile App Developer"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Variables for menu and navigation
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll event handler
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;  // Fixed the typo
        let id = sec.getAttribute('id');  // Added parentheses

        // Check if the current section is in the viewport
        if (top >= offset && top < offset + height) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');  // Fixed the variable name
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Menu icon click event handler
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Automatically close the menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'bx-x' from menu icon and 'active' from navbar
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});
