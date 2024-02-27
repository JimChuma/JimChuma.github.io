function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

let today = new Date();
let thisYear = today.getFullYear();
let footerText = document.querySelector('footer p');
footerText.textContent = 'Copyright © ' + thisYear + ' Jim Oputa. All Rights Reserved.';