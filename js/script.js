const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");
const ul_links = document.querySelectorAll(".links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});