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
        $('section').each(function() {
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 100;
            let height = $(this).outerHeight();
            let id = $(this).attr('id');
            
            if (top >= offset && top < offset + height) {
                $('header nav a').removeClass('active');
                $('header nav a[href*=' + id + ']').addClass('active');
            }
        });

        $('header').toggleClass('scroll', $(window).scrollTop() > 100);

        $('#icon-utk-menu').removeClass('bx-x');
        $('.navbar').removeClass('active');
    });
});