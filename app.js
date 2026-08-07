/**
 * Jules - Advanced Portfolio Initialization
 * 2026 Standards
 */

// --- 1. i18n (Internationalization) ---
const translations = {
    pl: {
        "preloader.text": "Inicjalizacja...",
        "hero.greeting": "Cześć, jestem",
        "hero.role": "Technik Programista & Student IT.<br>Tworzę cyfrowe doświadczenia nowej generacji.",
        "hero.cta": "Zobacz Projekty",
        "about.title": "Edukacja & Rozwój",
        "about.edu1.title": "Technikum Informatyczne",
        "about.edu1.desc": "Uzyskanie tytułu Technika Programisty. Tworzenie pierwszych aplikacji webowych, nauka algorytmiki i baz danych.",
        "about.edu2.title": "Studia Informatyczne (B.Sc.)",
        "about.edu2.subtitle": "Uniwersytet Technologiczny",
        "about.edu2.desc": "Pogłębianie wiedzy z zakresu inżynierii oprogramowania, architektury systemów oraz zaawansowanych technologii webowych.",
        "stack.title": "Tech Stack",
        "projects.title": "Wybrane Projekty",
        "projects.p1.title": "Nexus E-Commerce",
        "projects.p1.desc": "Platforma sprzedażowa z widokiem produktów 3D i płatnościami krypto.",
        "projects.p2.title": "AI Task Manager",
        "projects.p2.desc": "Aplikacja do zarządzania czasem wspierana przez LLM.",
        "projects.p3.title": "Social Dashboard",
        "projects.p3.desc": "Panel analityczny z zaawansowanymi wykresami Real-time.",
        "projects.p4.title": "Creative Agency",
        "projects.p4.desc": "Strona wizytówka oparta o WebGL i Scroll Animations.",
        "projects.view": "Zobacz projekt ➔",
        "contact.title": "Bądźmy w kontakcie",
        "contact.name": "Twoje imię",
        "contact.email": "Adres e-mail",
        "contact.message": "Wiadomość",
        "contact.send": "Wyślij wiadomość",
        "footer.text": "Zaprojektowane z pasją. Wszelkie prawa zastrzeżone."
    },
    en: {
        "preloader.text": "Initializing...",
        "hero.greeting": "Hi, I'm",
        "hero.role": "Software Developer & IT Student.<br>Crafting next-generation digital experiences.",
        "hero.cta": "View Projects",
        "about.title": "Education & Growth",
        "about.edu1.title": "IT Technical School",
        "about.edu1.desc": "Obtained IT Technician degree. Built first web apps, learned algorithms and databases.",
        "about.edu2.title": "Computer Science (B.Sc.)",
        "about.edu2.subtitle": "Technology University",
        "about.edu2.desc": "Deepening knowledge in software engineering, system architecture, and advanced web technologies.",
        "stack.title": "Tech Stack",
        "projects.title": "Selected Projects",
        "projects.p1.title": "Nexus E-Commerce",
        "projects.p1.desc": "Sales platform with 3D product views and crypto payments.",
        "projects.p2.title": "AI Task Manager",
        "projects.p2.desc": "Time management application powered by LLMs.",
        "projects.p3.title": "Social Dashboard",
        "projects.p3.desc": "Analytics panel with advanced real-time charts.",
        "projects.p4.title": "Creative Agency",
        "projects.p4.desc": "Portfolio site based on WebGL and Scroll Animations.",
        "projects.view": "View project ➔",
        "contact.title": "Let's get in touch",
        "contact.name": "Your name",
        "contact.email": "Email address",
        "contact.message": "Message",
        "contact.send": "Send message",
        "footer.text": "Designed with passion. All rights reserved."
    }
};

let currentLang = 'pl';

function updateLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Smooth transition using modern View Transitions API if supported, or simple opacity fallback
    const updateDOM = () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
                    // For placeholders (though here we use labels mainly)
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    };

    if (document.startViewTransition) {
        document.startViewTransition(updateDOM);
    } else {
        updateDOM();
    }
}

// Language Toggle Setup
const langOptions = document.querySelectorAll('.lang-option');
const langSwitchBg = document.querySelector('.lang-switch-bg');

langOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        if (lang === currentLang) return;

        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Move background switch
        langSwitchBg.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';

        updateLanguage(lang);
    });
});


// --- 2. Theme Toggle (Dark/Light Mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check LocalStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.replace('dark-mode', 'light-mode');
} else {
    // Default to dark mode for 2026 aesthetics
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
}

themeToggleBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');

    const toggleTheme = () => {
        if (isDark) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    };

    if (document.startViewTransition) {
        document.startViewTransition(toggleTheme);
    } else {
        toggleTheme();
    }
});


// --- 3. Custom Cursor Logic ---
const cursor = document.getElementById('custom-cursor');
const cursorFollower = document.getElementById('custom-cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Direct position for main cursor dot
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth follow effect using requestAnimationFrame
function renderCursor() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(renderCursor);
}
renderCursor();

// Cursor Hover Effects
const hoverElements = document.querySelectorAll('a, button, .hover-effect, input, textarea');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});


// --- 4. WebGL Background (Three.js) ---
function initThreeJS() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800; // Adjust for performance
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Dynamic color based on theme
    const getParticleColor = () => body.classList.contains('dark-mode') ? 0x6366f1 : 0x4361ee;

    const material = new THREE.PointsMaterial({
        size: 0.02,
        color: getParticleColor(),
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        targetX = (event.clientX - windowHalfX) * 0.001;
        targetY = (event.clientY - windowHalfY) * 0.001;
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Observe Theme Change to update particle color
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                material.color.setHex(getParticleColor());
            }
        });
    });
    observer.observe(body, { attributes: true });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Rotate slowly
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = elapsedTime * 0.02;

        // Mouse influence
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

        renderer.render(scene, camera);
    }
    animate();
}


// --- 5. Preloader & GSAP Animations ---
window.addEventListener('load', () => {
    // Hide Preloader
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.loader-progress');

    gsap.to(progressBar, {
        width: '100%',
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.8,
                onComplete: () => {
                    preloader.style.display = 'none';
                    initThreeJS(); // Init heavy 3D after load
                    initAnimations();
                }
            });
        }
    });
});

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const heroTl = gsap.timeline();

    heroTl.from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".kinetic-text .word", {
              y: 50,
              opacity: 0,
              duration: 1,
              stagger: 0.2,
              ease: "expo.out",
              rotationX: -45,
              transformOrigin: "0% 50% -50"
          }, "-=0.4")
          .from(".hero-description", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".btn-primary", { scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, "-=0.4")
          .from(".scroll-indicator", { opacity: 0, duration: 1 }, "-=0.2");

    // Section Titles Reveal
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Timeline Items Reveal
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.1
        });
    });

    // Stack Items Reveal (Stagger)
    gsap.from('.stack-item', {
        scrollTrigger: {
            trigger: '.stack-grid',
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.2)"
    });

    // Bento Grid Items Reveal
    gsap.from('.bento-item', {
        scrollTrigger: {
            trigger: '.bento-grid',
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    // 3D Tilt Effect on Cards (Vanilla JS based on mouse move)
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max rotation degrees
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.zIndex = 10;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.zIndex = 1;
        });
    });
}

// --- 6. Form Handling ---
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const statusDiv = document.getElementById('form-status');
        const btn = form.querySelector('.btn-submit span');
        const originalText = btn.innerHTML;

        // Mock sending state
        btn.innerHTML = currentLang === 'pl' ? 'Wysyłanie...' : 'Sending...';

        setTimeout(() => {
            statusDiv.innerHTML = currentLang === 'pl' ? 'Wiadomość wysłana pomyślnie!' : 'Message sent successfully!';
            statusDiv.style.color = '#10b981';
            statusDiv.style.marginTop = '15px';
            form.reset();
            btn.innerHTML = originalText;

            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 3000);
        }, 1500);
    });
}
