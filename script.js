/* ===============================
   Navbar shadow on scroll
================================ */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active", window.scrollY > 10);
});


/* ===============================
   Contact form success alert
================================ */
const params = new URLSearchParams(window.location.search);
if (params.get("success")) {
    alert("✅ Message sent successfully!");
}


/* ===============================
   Hamburger menu toggle
================================ */
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const navItems = document.querySelectorAll(".navlinks a");

/* Open / close menu on hamburger click */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
});

/* 🔥 Close menu when any navlink is clicked */
navItems.forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

