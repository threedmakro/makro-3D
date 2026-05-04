// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan balas secepatnya!');
    this.reset();
});

// NAVBAR SCROLL EFFECT - HITAM KE ABU-ABU TERANG
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        // Abu-abu terang saat scroll
        header.style.background = 'rgba(40, 40, 40, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 5px 30px rgba(255,255,255,0.15)';
    } else {
        // Hitam pekat saat atas
        header.style.background = '#1a1a1a';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 20px rgba(255,255,255,0.1)';
    }
});