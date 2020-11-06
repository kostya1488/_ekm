$(document).ready(function() {

    // toggle menu button
    $('#menu_button').click(function(e) {
        e.preventDefault();
        $('.body').toggleClass('menu_active')
    });
    // hide menu and smoth scrolling to elem by id
    $('.nav_link').click(function(e) {
        e.preventDefault();

        $('.body').removeClass('menu_active')

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);

    });

});