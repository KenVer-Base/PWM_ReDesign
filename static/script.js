
// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('.nav-ul');
if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.card, .gallery-item').forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease-out';
    observer.observe(item);
});
