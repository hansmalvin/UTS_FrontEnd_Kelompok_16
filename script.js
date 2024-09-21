const images = document.querySelectorAll('.box-container_1_2 img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let interval;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function startAutoSlide() {
    interval = setInterval(nextImage, 3000); // Ganti otomatis setiap 3 detik
}

prevButton.addEventListener('click', () => {
    prevImage();
    clearInterval(interval);
    startAutoSlide();
});

nextButton.addEventListener('click', () => {
    nextImage();
    clearInterval(interval);
    startAutoSlide();
});

// Inisialisasi slider
showImage(currentIndex);
startAutoSlide();
