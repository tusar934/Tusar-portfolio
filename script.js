// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("active", window.scrollY > 10);
});
  const params = new URLSearchParams(window.location.search);
  if (params.get("success")) {
    alert("✅ Message sent successfully!");
  }