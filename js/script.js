// toggle menu button
var menuButton = document.getElementById('menu_button');
menuButton.onclick = () => document.body.classList.toggle('menu_active');
// ------------------

var formButton = document.getElementById('form_button');
var formWrap = document.querySelector('.form_wrap');

formButton.onclick = () => {
    formWrap.classList.add('form_send');
    return false
}

var navLink = document.querySelectorAll('.nav_link');

navLink.forEach(element => {
    element.onclick = () => {
        document.body.classList.remove('menu_active');
    }

});