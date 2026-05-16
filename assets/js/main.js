// ==========================================
// 1. MOBILE HAMBURGER MENU
// ==========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Tutup menu otomatis setelah link diklik (khusus mobile)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// ==========================================
// 2. SMOOTH SCROLLING
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; 
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// ==========================================
// 3. NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        header.style.background = '#ffffff'; // Pertahankan putih agar serasi
        header.style.boxShadow = 'none';
    }
});

// ==========================================
// 4. ANIMATION ON SCROLL (INTERSECTION OBSERVER)
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .value-card, .about-text, .profile-stats').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ==========================================
// 5. FORM SUBMISSION
// ==========================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Permintaan Anda telah terkirim.');
        this.reset();
    });
}

// ==========================================
// 6. SWIPER GALLERY INITIALIZATION
// ==========================================
// KODE INI YANG BIKIN GALLERY-NYA JADI SLIDER
if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2, // Di HP muncul 1 gambar penuh, dan sedikit gambar di sebelahnya
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // Pengaturan untuk layar PC / Tablet
            768: {
                slidesPerView: 3, 
                spaceBetween: 30,
            }
        }
    });
}