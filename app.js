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
        "services.title": "Co oferuję",
        "services.s1.title": "Web Development",
        "services.s1.desc": "Tworzenie nowoczesnych, szybkich i responsywnych aplikacji webowych.",
        "services.s2.title": "UI/UX Design",
        "services.s2.desc": "Projektowanie interfejsów zgodnych z najnowszymi trendami (Glassmorphism, Neumorphism).",
        "services.s3.title": "Optymalizacja",
        "services.s3.desc": "Audyty wydajności, SEO i dostosowanie do standardów Core Web Vitals.",
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
        "services.title": "What I Offer",
        "services.s1.title": "Web Development",
        "services.s1.desc": "Building modern, fast, and responsive web applications.",
        "services.s2.title": "UI/UX Design",
        "services.s2.desc": "Designing interfaces following latest trends (Glassmorphism, Neumorphism).",
        "services.s3.title": "Optimization",
        "services.s3.desc": "Performance audits, SEO, and adapting to Core Web Vitals standards.",
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
                    initGradient(); // Init interactive gradient bg
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

    initTerminal();

    // Animate Services Grid
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services-grid',
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
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

    initTerminal();

    // Animate Services Grid
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services-grid',
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });
    });
}

// --- 7. Terminal Typing Logic ---
function initTerminal() {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;

    const commands = [
        { text: "jules --version", delay: 1000 },
        { text: "Jules Portfolio v2026.1", type: "output", delay: 500 },
        { text: "npm start creative-mode", delay: 1500 },
        { text: "Loading creativity modules...", type: "output", delay: 800 },
        { text: "Success! Creative mode activated 🚀", type: "output", delay: 500 }
    ];

    let currentCommand = 0;

    // We start the terminal animation only when it scrolls into view
    ScrollTrigger.create({
        trigger: ".terminal-section",
        start: "top 80%",
        onEnter: () => {
            if (currentCommand === 0) runTerminal();
        },
        once: true
    });

    function runTerminal() {
        if (currentCommand >= commands.length) {
            // Re-run animation after some time for effect
            setTimeout(() => {
                terminalOutput.innerHTML = "";
                currentCommand = 0;
                runTerminal();
            }, 5000);
            return;
        }

        const cmd = commands[currentCommand];
        setTimeout(() => {
            if (cmd.type === "output") {
                terminalOutput.innerHTML += `<p>${cmd.text}</p>`;
                currentCommand++;
                runTerminal();
            } else {
                typeText(cmd.text, 0, () => {
                    terminalOutput.innerHTML += `<p class="command"><span class="prompt">$</span> ${cmd.text}</p>`;
                    currentCommand++;
                    runTerminal();
                });
            }
        }, cmd.delay);
    }

    function typeText(text, index, callback) {
        // The visual typing effect is handled by updating a temporary span
        // We'll simulate typing by updating the prompt line before pushing to output
        const inputLine = document.querySelector('.terminal-input-line');

        if (index === 0) {
            let tempSpan = document.createElement('span');
            tempSpan.id = 'typing-temp';
            inputLine.insertBefore(tempSpan, inputLine.querySelector('.typing-cursor'));
        }

        let tempSpan = document.getElementById('typing-temp');
        if (tempSpan && index < text.length) {
            tempSpan.innerHTML += text.charAt(index);
            setTimeout(() => typeText(text, index + 1, callback), 50 + Math.random() * 50);
        } else {
            if (tempSpan) tempSpan.remove();
            callback();
        }
    }
}
// Add initTerminal to the main initialization function
