// ===== NAVIGATION =====
const menuBtn = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu");

function toggleMenu() {
    if (!menuNav) return;
    const isOpen = menuNav.classList.toggle("open");
    if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", String(isOpen));
    }
}

function closeMenu() {
    if (!menuNav) return;
    menuNav.classList.remove("open");
    if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", "false");
    }
}

if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
}

// Close menu when clicking outside
document.addEventListener("click", function (e) {
    if (menuNav && menuBtn && !menuNav.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Close menu on pressing Escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeMenu();
    }
});

// Close menu on nav link click
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const msgInput = document.getElementById("message");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const msg = msgInput ? msgInput.value.trim() : "";

        if (!name || !email || !msg) {
            showFormFeedback("Please fill out all fields before submitting.", "error");
            return;
        }

        // Display feedback message
        showFormFeedback(`Thank you, ${name}! Your message has been prepared. I'll get back to you soon.`, "success");

        // Clear form inputs
        contactForm.reset();
    });
}

function showFormFeedback(text, type) {
    if (!formMsg) return;
    formMsg.textContent = text;
    formMsg.style.display = "block";
    formMsg.style.marginTop = "0.85rem";
    formMsg.style.lineHeight = "1.5";

    if (type === "success") {
        formMsg.style.color = "var(--accent)";
    } else {
        formMsg.style.color = "#ff7b72";
    }

    setTimeout(() => {
        formMsg.style.display = "none";
    }, 6000);
}

// ===== OTHER PLATFORMS TOGGLE =====
const otherToggleBtn = document.getElementById("other-toggle-btn");
const otherDrawer = document.getElementById("other-links-drawer");
const otherToggleText = document.querySelector(".other-toggle-text");

if (otherToggleBtn && otherDrawer) {
    otherToggleBtn.addEventListener("click", function () {
        const isExpanded = otherToggleBtn.getAttribute("aria-expanded") === "true";
        const nextState = !isExpanded;

        otherToggleBtn.setAttribute("aria-expanded", String(nextState));
        otherToggleBtn.classList.toggle("active", nextState);
        otherDrawer.classList.toggle("open", nextState);
        otherDrawer.setAttribute("aria-hidden", String(!nextState));

        if (otherToggleText) {
            otherToggleText.textContent = nextState ? "See less" : "See more";
        }
    });
}
