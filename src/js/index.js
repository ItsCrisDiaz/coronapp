const menuIcon = document.getElementById("mobileMenu");
const menuContainer = document.getElementById("menuContainer");
const menuLinks = document.querySelectorAll("#menuContainer ul li");

const openMenu = function () {
  menuContainer.classList.toggle("menu-display");
};

menuIcon.addEventListener("click", openMenu);
menuLinks.forEach((link) => link.addEventListener("click", openMenu));
