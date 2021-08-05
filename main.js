const NavigationLinks = document.getElementById("navigation");
const Hamburger = document.getElementById("nav-bar");

Hamburger.addEventListener("click", () => {
  NavigationLinks.classList.toggle("nav-links-container");
});
