let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, index = 4) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 2);
}

function prevSlide() {
    showSlide(currentSlide - 2 );
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

function pindah3d() {
    window.location.href = './class-3d.html'
}
function pindahjs() {
    window.location.href = './class-js.html'
}
function pindahoff(){
    window.location.href = './class-off.html'
}
function pindahux(){
    window.location.href = './class-ux.html'
}

function reg() {
    window.location.href = './register.html'
}

function validateForm() {
    const firstname = document.getElementById('firstname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const noTelp = document.getElementById('no-telp').value;
    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('conf-pass').value;

    if (!firstname || !username || !email || !noTelp || !password || !confirmPassword) {
        alert('Semua field harus diisi!');
        return false;
    }

    if (!/^[a-zA-Z ]+$/.test(firstname)) {
        alert('Nama depan hanya boleh mengandung huruf dan spasi!');
        return false;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        alert('Username hanya boleh mengandung huruf, angka, dan underscore!');
        return false;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert('Email tidak valid!');
        return false;
    }

    if (!/^\d+$/.test(noTelp)) {
        alert('Nomor telepon hanya boleh mengandung angka!');
        return false;
    }

    if (password.length < 8) {
        alert('Password harus memiliki minimal 8 karakter!');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        return false;
    }

    return true;
}

document.querySelector('.form form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        window.location.href = './'
    }
});
