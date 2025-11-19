// ============================================
// Portfolio Website JavaScript
// ============================================

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// Navigation Functionality
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 30px rgba(0, 23, 31, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 23, 31, 0.1)';
    }
});

// ============================================
// Animated Headline
// ============================================
const headlines = [
    'Building AI-powered apps.',
    'Creating interactive digital experiences.',
    'Turning ideas into code.'
];

let currentHeadlineIndex = 0;
const headlineElement = document.getElementById('headline-text');

function changeHeadline() {
    // Fade out
    gsap.to(headlineElement, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
            // Change text
            currentHeadlineIndex = (currentHeadlineIndex + 1) % headlines.length;
            headlineElement.textContent = headlines[currentHeadlineIndex];

            // Fade in
            gsap.fromTo(headlineElement,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
        }
    });
}

// Change headline every 3 seconds
setInterval(changeHeadline, 3000);

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// GSAP Scroll Animations
// ============================================

// Hero section animation
gsap.from('.hero-name', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
});

// Animate geometric shapes
gsap.to('.shape-1', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
});

// Removed rotation animation for shape-2 - it now only uses the CSS float animation

// Section animations on scroll
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.from(section.querySelectorAll('.section-title'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// About section animation
gsap.from('.about-text p', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Skills section animation
gsap.from('.skill-category', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    immediateRender: false
});

// Set initial state for skill categories
gsap.set('.skill-category', { opacity: 1, visibility: 'visible' });

// Project cards animation
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    immediateRender: false
});

// Set initial state for project cards
gsap.set('.project-card', { opacity: 1, visibility: 'visible' });

// Timeline items animation
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.experience',
        start: 'top 70%'
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Contact section animation
gsap.from('.contact-item', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%'
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%'
    },
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'power3.out'
});

// ============================================
// Project Modal Functionality
// ============================================
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// Project details data
const projectDetails = {
    gamearly: {
        title: 'Gamearly – AI-Powered Game Finder',
        description: 'A sophisticated web application that leverages artificial intelligence to provide personalized game recommendations. Built with modern web technologies and integrated with OpenAI\'s GPT API for intelligent content analysis and recommendations.',
        features: [
            'AI-driven game recommendations using OpenAI GPT API',
            'Responsive and intuitive user interface',
            'Full-stack implementation with Express.js backend',
            'MongoDB database for user preferences and game data',
            'Real-time search and filtering capabilities',
            'User-friendly design with smooth animations'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'MongoDB', 'OpenAI GPT API', 'Node.js'],
        status: 'Completed'
    },
    horror: {
        title: '3D Horror Game (Slenderman-Inspired)',
        description: 'An immersive 3D horror game that creates a tense and atmospheric experience. Inspired by the Slenderman mythos, this game features dynamic lighting, sound design, and interactive environments that keep players on edge.',
        features: [
            '3D environment with realistic lighting and shadows',
            'Atmospheric sound design and music',
            'Interactive gameplay mechanics',
            'Smooth character movement and controls',
            'Dynamic enemy AI behavior',
            'Immersive horror atmosphere'
        ],
        technologies: ['Unity', 'C#', '3D Game Development', 'Game Design'],
        status: 'Completed'
    },
    snake: {
        title: 'Snake Game',
        description: 'A classic Snake game implementation showcasing clean code architecture and object-oriented programming principles. Built with modular design for easy maintenance and extensibility.',
        features: [
            'Classic Snake gameplay mechanics',
            'Modular and object-oriented design',
            'Score tracking system',
            'Smooth game loop and controls',
            'Clean code architecture',
            'Cross-platform compatibility'
        ],
        technologies: ['C++', 'Object-Oriented Programming', 'Game Development'],
        status: 'Completed'
    },
    platformer: {
        title: '2D Platformer Game',
        description: 'A side-scrolling platformer game featuring smooth character movement, engaging level design, and polished gameplay mechanics. Demonstrates proficiency in 2D game development and Unity engine.',
        features: [
            'Smooth character movement and physics',
            'Multiple levels with increasing difficulty',
            'Collectible items and power-ups',
            'Polished animations and sprite work',
            'Intuitive controls and gameplay',
            'Level progression system'
        ],
        technologies: ['Unity', 'C#', '2D Game Development', 'Sprite Animation'],
        status: 'Completed'
    },
    'dog-tinder': {
        title: 'Dog Tinder',
        description: 'A fun and interactive front-end web application that mimics a dating app interface for dogs. Built with modern CSS frameworks and responsive design principles.',
        features: [
            'Interactive card-based matching interface',
            'Responsive design for all devices',
            'Smooth animations and transitions',
            'Modern UI/UX design',
            'Bootstrap framework integration',
            'User-friendly navigation'
        ],
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Front-end Development'],
        status: 'Completed'
    }
};

// Open modal when project card is clicked
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectDetails[projectId];

        if (project) {
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                <p style="color: var(--blue); font-weight: 600; margin-bottom: 1rem;">Status: ${project.status}</p>
                <p>${project.description}</p>
                <h3 style="margin-top: 1.5rem; margin-bottom: 1rem; color: var(--dark-navy);">Key Features:</h3>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
                    ${project.features.map(feature => `<li style="color: var(--navy); margin-bottom: 0.5rem;">${feature}</li>`).join('')}
                </ul>
                <h3 style="margin-bottom: 1rem; color: var(--dark-navy);">Technologies Used:</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${project.technologies.map(tech => `<span style="padding: 0.3rem 0.8rem; background: rgba(0, 168, 232, 0.1); color: var(--blue); border-radius: 15px; font-size: 0.8rem; font-weight: 500;">${tech}</span>`).join('')}
                </div>
            `;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link (you can replace this with actual form submission)
    const mailtoLink = `mailto:mcs200005@utdallas.edu?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message (optional)
    alert('Thank you for your message! Your email client should open shortly.');

    // Reset form
    contactForm.reset();
});

// ============================================
// Download Resume Button
// ============================================
// The download button now works directly via the HTML link
// No additional JavaScript needed - the browser handles the download

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================
// You can add a scroll-to-top button if desired

// ============================================
// Intersection Observer for Additional Animations
// ============================================
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

// Observe skill badges for additional animation
document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(20px)';
    badge.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(badge);
});

// ============================================
// Page Load Animation
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    });

    // Ensure all grid items are visible on load
    const skillCategories = document.querySelectorAll('.skill-category');
    const projectCards = document.querySelectorAll('.project-card');

    skillCategories.forEach(category => {
        gsap.set(category, { opacity: 1, visibility: 'visible' });
    });

    projectCards.forEach(card => {
        gsap.set(card, { opacity: 1, visibility: 'visible' });
    });
});

// ============================================
// Smooth Scroll Polyfill for Older Browsers
// ============================================
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js';
    document.head.appendChild(script);
}
