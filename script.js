function toggleMenu(element) {
    element.classList.toggle("change");
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle("show");

    document.body.style.overflow = (menuLinks.classList.contains("show")) ? "hidden" : "auto";
}

function showInfo(memberClass) {
    document.querySelector(`.${memberClass} .member-info`).style.display = "flex";
}

function closeInfo(memberClass) {
    document.querySelector(`.${memberClass} .member-info`).style.display = "none";
}

