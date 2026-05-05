// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if(target) target.scrollIntoView({behavior: 'smooth'});
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Terima kasih! Permintaan Anda telah terkirim.');
    this.reset();
});

// Navbar scroll effect - black to gray
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 100){
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        header.style.color = '#222222';
        header.querySelectorAll('a, .logo').forEach(a => a.style.color = '#222222');
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
        header.style.color = '#222222';
        header.querySelectorAll('a, .logo').forEach(a => a.style.color = '#222222');
    }
});

// Animation on scroll (fade in elements)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .value-card, .about-text, .profile-stats').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});