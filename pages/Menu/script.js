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
        $('header').toggleClass('scroll', $(window).scrollTop() > 100);

        $('#icon-utk-menu').removeClass('bx-x');
        $('.navbar').removeClass('active');
    });
});

$(document).ready(function () {
    $('#menuSearch').on('input', function () {
        var searchTerm = $(this).val().toLowerCase();

        $('.menu-item').each(function () {
            var menuName = $(this).find('h2').text().toLowerCase();
            if (menuName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
