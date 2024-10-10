// Ambil elemen-elemen dari DOM
const testimonialForm = document.getElementById('testimonialForm');
const testimonialList = document.getElementById('testimonialList');

// Tambahkan event listener untuk form submit
testimonialForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah halaman reload saat submit

    // Ambil nilai dari form input
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Validasi: pastikan nama dan isi testimoni tidak kosong
    if (name === "" || message === "") {
        alert("Please fill out both fields!");
        return;
    }

    // Buat elemen div baru untuk testimoni
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');

    // Tambahkan konten nama dan pesan ke dalam elemen div
    newTestimonial.innerHTML = `
        <h4>${name}</h4>
        <p>${message}</p>
    `;

    // Tambahkan elemen div ke dalam daftar testimoni
    testimonialList.appendChild(newTestimonial);

    // Reset form setelah submit
    testimonialForm.reset();
});
