// script.js

// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById("menu");
    if(window.innerWidth <= 768) {
        nav.classList.toggle("show");
    }
}

// Highlight active menu item on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100; // offset
    sections.forEach(sec => {
        if(scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight){
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            const id = sec.getAttribute('id');
            const activeLink = document.querySelector(`nav a[href="#${id}"]`);
            if(activeLink) activeLink.classList.add('active');
        }
    });
});