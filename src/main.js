const LOGO = document.querySelector('#logo');
const MENU_MOBIE = document.querySelector('#menu_mobie')
const CLOSE = document.querySelector('#close');
const OVERLAY = document.querySelector('#overlay');

LOGO.onclick = function() {
    MENU_MOBIE.classList.toggle('show')
    OVERLAY.classList.toggle('show1')
}
CLOSE.onclick = function() {
    MENU_MOBIE.classList.toggle('show')
    OVERLAY.classList.toggle('show1')
}
OVERLAY.onclick = function() {
    MENU_MOBIE.classList.toggle('show')
    OVERLAY.classList.toggle('show1')
}