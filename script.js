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



const images = document.querySelectorAll('.box-container_1_2 img');
let current = 0;

function changeImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}

setInterval(changeImage, 4000); // Ganti gambar setiap 4 detik

