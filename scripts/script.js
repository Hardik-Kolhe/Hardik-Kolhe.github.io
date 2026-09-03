// script.js

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button
    const navToggle = document.createElement('button');
    navToggle.className = 'mobile-menu-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    navToggle.setAttribute('aria-label', 'Toggle menu');
    
    const header = document.querySelector('header');
    const nav = document.querySelector('header nav ul');
    
    // Insert toggle button
    header.insertBefore(navToggle, header.querySelector('nav'));
    
    // Toggle menu
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Particles.js Background
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('Particles.js loaded successfully!');
        });
    } else {
        console.error('Particles.js is not loaded. Make sure you have included particles.js library.');
    }

    // Typed.js for tagline
    if (typeof Typed !== 'undefined') {
        const taglineTyped = new Typed('.tagline', {
            strings: [
                "Turning Raw Data into Actionable Intelligence.",
                "Empowering Decisions with the Power of Data.",
                "Transforming Data into Stories That Drive Change."
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '',
        });
    } else {
        console.error('Typed.js is not loaded. Make sure you have included typed.js library.');
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth scrolling for down-arrow
    const downArrow = document.querySelector('.down-arrow');
    if (downArrow) {
        downArrow.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            let isValid = true;
            const form = this;
            
            // Validate name
            if(form.name.value.length < 2) {
                showError(form.name, 'Name must be at least 2 characters');
                isValid = false;
            }
            
            // Validate email
            if(!/^\S+@\S+\.\S+$/.test(form.email.value)) {
                showError(form.email, 'Please enter a valid email');
                isValid = false;
            }
            
            // Validate message
            if(form.message.value.length < 10) {
                showError(form.message, 'Message must be at least 10 characters');
                isValid = false;
            }
            
            if(isValid) {
                // Submit form via AJAX
                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if(response.ok) {
                        document.getElementById('form-success').style.display = 'block';
                        form.reset();
                        setTimeout(() => {
                            document.getElementById('form-success').style.display = 'none';
                        }, 5000);
                    }
                });
            }
        });

        function showError(field, message) {
            const errorElement = field.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.textContent = message;
                field.classList.add('error');
            }
        }
    }

    // Project card hover effect for touch devices
    const projectCards = document.querySelectorAll('.project-card-link');
    projectCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.querySelector('.project-card').style.transform = 'scale(1.05)';
            this.querySelector('.project-card').style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            this.querySelector('.project-details').style.top = '0';
            this.querySelector('.project-details').style.opacity = '1';
        });
        
        // Reset other cards when one is touched
        card.addEventListener('touchstart', function() {
            projectCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.querySelector('.project-card').style.transform = '';
                    otherCard.querySelector('.project-card').style.boxShadow = '';
                    otherCard.querySelector('.project-details').style.top = '';
                    otherCard.querySelector('.project-details').style.opacity = '';
                }
            });
        });
    });
});

// Function to handle scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}