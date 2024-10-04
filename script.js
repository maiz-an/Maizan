var typed = new Typed(".multiple-text", {
    strings: ["Computer Science Student", "Full-Stack Developer", "Mobile App Developer"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + hight) {
            navLinks.forEach(navLink =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}