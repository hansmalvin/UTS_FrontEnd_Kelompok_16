$(document).ready(function() {
    // Ketika elemen dengan id "icon-utk-menu" diklik
    $('#icon-utk-menu').click(function() {
        // Toggle (berpindah) class "bx-x"
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('active');
    });


    // Membuat alert jika href "#error" diklik
    $('a[href="#error"]').click(function(event) {
        event.preventDefault();
        // Menampilkan pesan "Coming Soon !" saat link diklik
        alert('Coming Soon !');
    });



    // Fungsi yang dijalankan saat pengguna scroll halaman
    $(window).scroll(function() {
        $('section').each(function() {
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 100;
            let height = $(this).outerHeight();
            let id = $(this).attr('id');
            
            // Jika posisi scroll berada di dalam area dari section ini
            if (top >= offset && top < offset + height) {
                $('header nav a').removeClass('active');
                $('header nav a[href*=' + id + ']').addClass('active');
            }
        });
        // Menambahkan atau menghapus class "scroll" pada elemen header
        $('header').toggleClass('scroll', $(window).scrollTop() > 100);

        // Menghapus class "bx-x" dari ikon menu setelah pengguna menggulir halaman
        $('#icon-utk-menu').removeClass('bx-x');
        // Menutup menu navigasi dengan menghapus class "active" dari elemen navbar
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
