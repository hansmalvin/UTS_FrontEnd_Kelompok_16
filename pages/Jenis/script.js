$(document).ready(function() {
    // animasi class burger icon
    $('#icon-utk-menu').click(function() {
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('active');
    });

    $(window).scroll(function() {
        $('header').toggleClass('scroll', $(window).scrollTop() > 100);

        $('#icon-utk-menu').removeClass('bx-x');
        $('.navbar').removeClass('active');
    });

    // animasi text typing
    const text = $(".sec-text");
    const words = ["Mari coba", "Menu latihan kami"]; 
    let index = 0; 

    const textLoad = () => {
        text.text(words[index]); 
        index = (index + 1) % words.length; 
    }

    textLoad(); 
    setInterval(textLoad, 4000); 

    // untuk accordion menu
    $('.accordion-btn').click(function () {
        $(this).toggleClass('active');
        
        const content = $(this).next();
        if (content.css('display') === 'block') {
          content.css('display', 'none');
        } else {
          content.css('display', 'block');
        }
    });

    window.markDay = function(day) {
        var statusId = '#' + day + '-status';
        $(statusId).html('<i class="bx bx-check-circle" style="color:green;"></i>'); // Add green checkmark

        $(statusId).closest('.accordion-item').find('.mark-done').prop('disabled', true).css({
            backgroundColor: '#218838',
            cursor: 'not-allowed'
        });
    };
});

// menggunakan javascript untuk animasi gambar
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