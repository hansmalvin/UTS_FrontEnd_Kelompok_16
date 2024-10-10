$(document).ready(function() {
    $('#icon-utk-menu').click(function() {
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('active');
    });

    $(window).scroll(function() {
        $('header').toggleClass('scroll', $(window).scrollTop() > 100);

        $('#icon-utk-menu').removeClass('bx-x');
        $('.navbar').removeClass('active');
    });
});


