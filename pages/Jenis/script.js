$(document).ready(function() {
    $('#icon-utk-menu').click(function() {
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('active');
    });

    // buat alert dulu
    $('a[href="#error"]').click(function(event) {
        event.preventDefault(); 
        alert('Coming Soon !');
    });

    $(window).scroll(function() {
        $('#icon-utk-menu').removeClass('bx-x');
        $('.navbar').removeClass('active');
    });
});