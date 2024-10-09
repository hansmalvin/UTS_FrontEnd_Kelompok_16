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

    const text = $(".sec-text");
    const words = ["Mari coba", "menu latihan kami"]; 
    let index = 0; 

    const textLoad = () => {
        text.text(words[index]); 
        index = (index + 1) % words.length; 
    }

    textLoad(); 
    setInterval(textLoad, 4000); 
});