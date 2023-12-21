function toggleMenu(element) {
    element.classList.toggle("change");
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle("show");

    document.body.style.overflow = (menuLinks.classList.contains("show")) ? "hidden" : "auto";
}