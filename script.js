// Ambil semua elemen yang diperlukan
const envelope = document.getElementById('envelope');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const letter = document.getElementById('letter');
const btnContinue = document.getElementById('btnContinue');
const gallerySection = document.getElementById('gallerySection');

// Event listener untuk klik amplop
envelope.addEventListener('click', function() {
    // Tambahkan class 'open' untuk animasi amplop membuka
    envelope.classList.add('open');
    
    // Setelah 0.5 detik (saat amplop mulai membuka), mulai keluarkan surat
    setTimeout(function() {
        letter.classList.add('show');
    }, 500);
    
    // Sembunyikan amplop secara bertahap setelah surat keluar
    setTimeout(function() {
        envelopeWrapper.style.transition = 'opacity 0.8s ease';
        envelopeWrapper.style.opacity = '0';
    }, 1500);
    
    setTimeout(function() {
        envelopeWrapper.style.display = 'none';
    }, 2300);
});

// Event listener untuk tombol "Lihat Kenangan Kita"
btnContinue.addEventListener('click', function() {
    // Animasi surat terlipat kembali sebelum hilang
    letter.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    letter.style.transform = 'translate(-50%, -50%) translateY(50px) scale(0.8) rotateZ(-5deg)';
    letter.style.opacity = '0';
    
    // Tampilkan galeri foto setelah surat menghilang
    setTimeout(function() {
        // Sembunyikan surat sepenuhnya
        letter.style.display = 'none';
        
        // Scroll ke atas untuk memulai dari awal galeri
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Tampilkan galeri
        gallerySection.classList.add('show');
    }, 600);
});

// Optional: Tambahkan efek sparkle atau confetti saat amplop dibuka
function createHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-50px';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.opacity = '0.8';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'fall ' + (Math.random() * 3 + 3) + 's linear forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(function() {
        heart.remove();
    }, 6000);
}

// Tambahkan animasi jatuh untuk hati
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: translateY(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Trigger hearts saat amplop diklik
envelope.addEventListener('click', function() {
    // Buat beberapa hati jatuh
    for (let i = 0; i < 15; i++) {
        setTimeout(createHearts, i * 200);
    }
}, { once: true }); // Hanya sekali saat pertama kali diklik

// Optional: Tambahkan musik latar (jika Anda ingin menambahkan file audio)
// Uncomment kode di bawah dan tambahkan file musik Anda
/*
const backgroundMusic = new Audio('path-to-your-music.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.3;

envelope.addEventListener('click', function() {
    backgroundMusic.play();
}, { once: true });
*/

// Animasi masuk halus saat halaman dimuat
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});
