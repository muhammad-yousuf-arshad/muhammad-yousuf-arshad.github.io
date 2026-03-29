// ===== TOGGLE MOBILE MENU =====
function toggleMenu() {
    const nav = document.getElementById("menu");
    nav.classList.toggle("show");
}

// ===== CLOSE MENU WHEN CLICKING OUTSIDE (Mobile UX) =====
document.addEventListener("click", (e) => {
    const nav = document.getElementById("menu");
    const menuIcon = document.querySelector(".menu-icon");

    if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
        nav.classList.remove("show");
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }

        // Close menu after click (mobile)
        document.getElementById("menu").classList.remove("show");
    });
});

// ===== ACTIVE LINK ON SCROLL =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
        if (
            scrollPos >= sec.offsetTop &&
            scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

            const id = sec.getAttribute('id');
            const activeLink = document.querySelector(`nav a[href="#${id}"]`);

            if (activeLink) activeLink.classList.add('active');
        }
    });
});
