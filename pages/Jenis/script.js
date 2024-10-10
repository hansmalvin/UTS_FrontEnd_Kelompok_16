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
    const words = ["Mari coba", "Menu latihan kami"]; 
    let index = 0; 

    const textLoad = () => {
        text.text(words[index]); 
        index = (index + 1) % words.length; 
    }

    textLoad(); 
    setInterval(textLoad, 4000); 
});

const track = document.getElementById("image-track");
window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e =>{
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    
    const percentage = (mouseDelta / maxDelta)* -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);


    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
        const imagePosition = 100 + nextPercentage; // Calculate image position
        image.style.objectPosition = `${imagePosition}% 50%`;
    }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}