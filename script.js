const images = document.querySelectorAll('.box-container_1_2 img');
let current = 0;

function changeImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}

setInterval(changeImage, 4000); // Ganti gambar setiap 4 detik

