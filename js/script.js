let mobileMenuWrap = document.querySelector('.mobile-menu-wrap');
let hamburgerToggle = document.querySelector('.hamburger-toggle');

hamburgerToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.body.classList.toggle('overflow-hidden');
    hamburgerToggle.classList.toggle('hamburger-toggle--active');
    mobileMenuWrap.classList.toggle('mobile-menu-wrap--active');
}