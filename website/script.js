/* ============================================
   PRIZMA — Interactions & Animations
   ============================================ */

// ---- Nav scroll effect ----
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 60);
    lastScroll = scrollY;
});

// ---- Mobile menu ----
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ---- Reveal on scroll ----
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.style.animationDelay || '0s';
            const ms = parseFloat(delay) * 1000;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, ms);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ---- Counter animation ----
const counters = document.querySelectorAll('.neu-card__number');
let counterAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            counterAnimated = true;
            animateCounters();
        }
    });
}, { threshold: 0.3 });

if (counters.length > 0) {
    counterObserver.observe(counters[0].closest('.stats'));
}

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(target * eased);

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

// ---- Floating particles ----
const particlesContainer = document.getElementById('particles');

function createParticles() {
    const count = window.innerWidth < 768 ? 20 : 40;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 10;
        const hue = Math.random() > 0.5 ? 270 : 190;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: hsla(${hue}, 70%, 60%, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            animation: float ${duration}s ${delay}s ease-in-out infinite;
            pointer-events: none;
        `;

        particlesContainer.appendChild(particle);
    }
}

// Add float keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
        25% { transform: translate(${rand()}px, ${rand()}px) scale(1.2); opacity: 0.6; }
        50% { transform: translate(${rand()}px, ${rand()}px) scale(0.8); opacity: 0.2; }
        75% { transform: translate(${rand()}px, ${rand()}px) scale(1.1); opacity: 0.5; }
    }
`;
document.head.appendChild(style);

function rand() {
    return Math.round((Math.random() - 0.5) * 80);
}

createParticles();

// ---- Smooth scroll for anchors ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ---- Tilt effect on glass cards (desktop only) ----
if (window.innerWidth > 768) {
    document.querySelectorAll('.glass-card, .work-card, .portfolio-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `
                translateY(-4px)
                perspective(800px)
                rotateX(${y * -4}deg)
                rotateY(${x * 4}deg)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ---- Active nav link highlight ----
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = navMenu.querySelector(`a[href="#${id}"]`);

        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                link.style.color = 'var(--text)';
            } else {
                link.style.color = '';
            }
        }
    });
});
