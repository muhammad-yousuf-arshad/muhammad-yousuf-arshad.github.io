// ===== TOGGLE MENU =====
function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

// ===== CLOSE MENU =====
function closeMenu() {
    document.getElementById("menu").classList.remove("open");
}

// ===== CLICK OUTSIDE CLOSE (FIXED) =====
document.addEventListener("click", function (e) {
    const nav = document.getElementById("menu");
    const icon = document.querySelector(".menu-icon");

    if (nav && icon && !nav.contains(e.target) && !icon.contains(e.target)) {
        nav.classList.remove("open");
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        closeMenu();

        const targetId = this.getAttribute("href");

        if (targetId === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// ===== CONTACT FORM =====
function handleSubmit() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (!name || !email || !msg) {
        alert("Please fill all fields");
        return;
    }

    const success = document.getElementById("form-msg");
    success.style.display = "block";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    setTimeout(() => {
        success.style.display = "none";
    }, 4000);
}