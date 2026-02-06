// Enhanced Cybersecurity Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize EmailJS with proper error handling
    try {
        emailjs.init('DBx76ugOZtRxGslO9');
        console.log('✅ EmailJS initialized successfully');
    } catch (error) {
        console.error('❌ EmailJS initialization failed:', error);
    }
    
    // Initialize all components
    init();
    
    function init() {
        initParticles();
        initTypingAnimation();
        initNavigation();
        initMobileMenu();
        initScrollAnimations();
        initCounters();
        initSkillBars();
        initContactForm();
        initParallaxEffects();
        initProjectAnimations();
        initPerformanceOptimizations();
    }

    // Particles.js Configuration for Cybersecurity Theme
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: ['#00f5ff', '#0066cc', '#ffffff']
                    },
                    shape: {
                        type: ['circle', 'triangle', 'edge'],
                        stroke: {
                            width: 1,
                            color: '#00f5ff'
                        }
                    },
                    opacity: {
                        value: 0.6,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.5,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#00f5ff',
                        opacity: 0.3,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 0.8
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });

            // Add matrix-style falling characters overlay
            createMatrixOverlay();
        }
    }

    // Matrix-style falling characters
    function createMatrixOverlay() {
        const canvas = document.createElement('canvas');
        canvas.id = 'matrix-overlay';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.pointerEvents = 'none';
        canvas.style.opacity = '0.1';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 12;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(0).map(() => Math.random() * canvas.height / fontSize);

        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00f5ff';
            ctx.font = `${fontSize}px 'Courier New', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const matrixInterval = setInterval(drawMatrix, 100);
        
        // Store for cleanup if needed
        window.matrixInterval = matrixInterval;
    }

    // Advanced Typing Animation
    function initTypingAnimation() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const roles = [
            'Network Defense Specialist',
            'Ethical Hacker',
            'Digital Forensics Expert',
            'Python Developer',
            'Security Analyst',
            'Penetration Tester'
        ];

        let currentRoleIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typeSpeed = 120;
        let pauseTime = 2000;

        function typeText() {
            const currentRole = roles[currentRoleIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                typeSpeed = 50;
            } else {
                typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                typeSpeed = 120 + Math.random() * 100; // Varying speed for realism
            }

            // Add glow effect during typing
            typingElement.style.textShadow = `0 0 ${10 + Math.random() * 10}px rgba(0, 245, 255, 0.8)`;

            if (!isDeleting && currentCharIndex === currentRole.length) {
                typeSpeed = pauseTime;
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(typeText, typeSpeed);
        }

        // Start typing after a short delay
        setTimeout(typeText, 1000);
    }

    // Enhanced Navigation with Active State Management
    function initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');
        
        // Smooth scroll to sections
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Update active navigation state on scroll
        function updateActiveNav() {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                
                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(`a[href="#${section.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }

        // Throttled scroll listener for performance
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveNav();
                    handleNavbarBackground();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Dynamic Navbar Background
    function handleNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.backdropFilter = 'blur(30px)';
            navbar.style.borderBottom = '1px solid rgba(0, 245, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(30px)';
            navbar.style.borderBottom = '1px solid rgba(0, 245, 255, 0.1)';
        }
    }

    // Mobile Menu with Enhanced Animations
    function initMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
                
                // Prevent body scroll when menu is open
                if (navMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });

            // Close menu when clicking on links
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Close menu on outside click
            document.addEventListener('click', function(e) {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    // Advanced Scroll Animations with Intersection Observer
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, observerOptions);

        // Elements to animate
        const animatedElements = document.querySelectorAll(`
            .glass,
            .experience-item,
            .project-card,
            .skill-category,
            .education-card,
            .certifications-section
        `);

        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px) scale(0.95)';
            element.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s, 
                                       transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
            observer.observe(element);
        });
    }

    // Animated Counters for Statistics
    function initCounters() {
        const statItems = document.querySelectorAll('.stat-item');
        
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statItem = entry.target;
                    const numberElement = statItem.querySelector('.stat-number');
                    const target = parseInt(statItem.getAttribute('data-target')) || 0;
                    const suffix = statItem.getAttribute('data-suffix') || '';
                    const text = statItem.getAttribute('data-text');
                    
                    if (text) {
                        // Handle text-based stats like "Available"
                        let charIndex = 0;
                        function typeText() {
                            if (charIndex < text.length) {
                                numberElement.textContent = text.substring(0, charIndex + 1);
                                charIndex++;
                                setTimeout(typeText, 100);
                            }
                        }
                        typeText();
                    } else {
                        // Handle numeric stats
                        let current = 0;
                        const increment = target / 60; // 60 frames for smooth animation
                        const duration = 2000;
                        const startTime = performance.now();

                        function updateCounter(currentTime) {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            
                            // Easing function for smooth animation
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                            current = target * easeOutQuart;
                            
                            numberElement.textContent = Math.floor(current) + suffix;
                            
                            // Add pulse effect during counting
                            const scale = 1 + Math.sin(progress * Math.PI * 4) * 0.1;
                            numberElement.style.transform = `scale(${scale})`;
                            
                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            } else {
                                numberElement.textContent = target + suffix;
                                numberElement.style.transform = 'scale(1)';
                            }
                        }
                        
                        requestAnimationFrame(updateCounter);
                    }
                    
                    counterObserver.unobserve(statItem);
                }
            });
        }, { threshold: 0.7 });

        statItems.forEach(item => counterObserver.observe(item));
    }

    // Skill Bar Animations with Glow Effects
    function initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.getAttribute('data-width');
                    const skillGlow = skillBar.querySelector('.skill-glow');
                    
                    // Animate the skill bar
                    setTimeout(() => {
                        skillBar.style.width = width + '%';
                        
                        // Add pulsing glow effect
                        if (skillGlow) {
                            skillGlow.style.width = width + '%';
                            skillGlow.style.animation = 'pulse 2s ease-in-out infinite';
                        }
                        
                        // Add sparkle effects for high skill levels
                        if (parseInt(width) > 80) {
                            addSparkleEffect(skillBar);
                        }
                    }, Math.random() * 500); // Staggered animation
                    
                    skillObserver.unobserve(skillBar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // Add sparkle effect for high skill levels
    function addSparkleEffect(element) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'absolute';
                sparkle.style.width = '4px';
                sparkle.style.height = '4px';
                sparkle.style.background = '#00f5ff';
                sparkle.style.borderRadius = '50%';
                sparkle.style.top = '50%';
                sparkle.style.left = Math.random() * 80 + '%';
                sparkle.style.transform = 'translateY(-50%)';
                sparkle.style.animation = 'sparkle 1s ease-out forwards';
                sparkle.style.boxShadow = '0 0 10px #00f5ff';
                element.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1000);
            }, i * 200);
        }
    }

    // Enhanced Contact Form with Validation and Animations
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');
        const formInputs = contactForm.querySelectorAll('.form-control');
        const subjectSelect = document.getElementById('subject');
        
        // Initialize timezone display
        initTimeZoneDisplay();
        
        // Initialize character counter
        initCharacterCounter();
        
        // Enhanced subject field functionality
        if (subjectSelect) {
            subjectSelect.addEventListener('change', function() {
                const selectedOption = this.options[this.selectedIndex];
                const subjectGroup = this.closest('.subject-group');
                
                if (this.value) {
                    // Add visual feedback for selection
                    subjectGroup.classList.add('selected');
                    this.style.borderColor = 'var(--color-primary)';
                    this.style.boxShadow = '0 0 15px rgba(0, 245, 255, 0.3)';
                    
                    // Show priority indicator
                    const priority = getPriorityLevel(this.value);
                    showPriorityIndicator(subjectGroup, priority);
                    
                    // Animate selection
                    this.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 200);
                    
                    console.log(`📧 Subject selected: ${this.value} (${priority})`);
                } else {
                    subjectGroup.classList.remove('selected');
                    this.style.borderColor = '';
                    this.style.boxShadow = '';
                    removePriorityIndicator(subjectGroup);
                }
            });
            
            // Add hover effects
            subjectSelect.addEventListener('mouseenter', function() {
                if (!this.value) {
                    this.style.borderColor = 'rgba(0, 245, 255, 0.4)';
                }
            });
            
            subjectSelect.addEventListener('mouseleave', function() {
                if (!this.value) {
                    this.style.borderColor = 'rgba(0, 245, 255, 0.2)';
                }
            });
        }

        // Add focus animations to form inputs
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.2)';
            });

            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '';
            });

            // Real-time validation
            input.addEventListener('input', function() {
                validateField(this);
            });
        });

        if (contactForm) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                console.log('📧 Form submission started');
                
                // Get form data
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');

                // Validate all fields
                if (!validateForm(name, email, subject, message)) {
                    return;
                }

                // Animate submit button
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.disabled = true;
                submitButton.style.background = 'rgba(0, 245, 255, 0.5)';

                // Send email using EmailJS with fallback
                try {
                    console.log('📤 Attempting to send email...');
                    
                    // First, check if EmailJS is available
                    if (typeof emailjs === 'undefined') {
                        throw new Error('EmailJS not loaded');
                    }
                    
                    // Enhanced template parameters
                    const templateParams = {
                        from_name: name,
                        from_email: email,
                        subject: subject,
                        message: message,
                        to_name: 'Ashish Gupta',
                        reply_to: email,
                        timestamp: new Date().toLocaleString(),
                        inquiry_type: subject,
                        contact_source: 'Portfolio Website Contact Form',
                        priority: getPriorityLevel(subject)
                    };
                    
                    console.log('📋 Template params:', templateParams);
                    
                    // Try primary EmailJS configuration
                    let response;
                    try {
                        response = await emailjs.send(
                            'service_kz8sep6',
                            'template_1jpvwkb',
                            templateParams
                        );
                        console.log('✅ Primary EmailJS succeeded:', response);
                    } catch (primaryError) {
                        console.warn('⚠️ Primary EmailJS failed, trying alternative...');
                        
                        // Try alternative configuration
                        response = await emailjs.send(
                            'default_service',
                            'template_contact',
                            templateParams
                        );
                        console.log('✅ Alternative EmailJS succeeded:', response);
                    }
                    
                    // Success handling
                    showFormMessage('✅ Message sent successfully! I\'ll respond within 24 hours.', 'success');
                    this.reset();
                    
                    // Reset character counter
                    const charCount = document.getElementById('char-count');
                    if (charCount) charCount.textContent = '0';
                    
                    // Reset subject field styling
                    const subjectGroup = document.querySelector('.subject-group');
                    if (subjectGroup) {
                        subjectGroup.classList.remove('selected');
                        removePriorityIndicator(subjectGroup);
                    }
                    
                    // Celebration animation
                    createCelebrationEffect();
                    
                } catch (error) {
                    console.error('❌ All email methods failed:', error);
                    
                    // Enhanced error handling with specific solutions
                    let errorMessage = '';
                    let actionButton = '';
                    
                    if (error.message?.includes('not loaded') || error.message?.includes('undefined')) {
                        errorMessage = '⚠️ Email service temporarily unavailable. ';
                        actionButton = createDirectContactButton('Contact via Email', `mailto:agupta38160@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Ashish,\n\n${message}\n\nBest regards,\n${name}\n${email}`)}`);
                    } else if (error.status === 400) {
                        errorMessage = '⚠️ Invalid form data. Please check all fields and try again.';
                    } else if (error.status === 401 || error.status === 403) {
                        errorMessage = '🔒 Authentication issue with email service. ';
                        actionButton = createDirectContactButton('Send Direct Email', `mailto:agupta38160@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Ashish,\n\n${message}\n\nBest regards,\n${name}\n${email}`)}`);
                    } else if (error.status === 413) {
                        errorMessage = '📝 Message too long. Please reduce the message length and try again.';
                    } else if (error.text?.includes('rate limit')) {
                        errorMessage = '⏰ Too many requests. Please wait 2 minutes and try again.';
                    } else {
                        errorMessage = '📧 Email service temporarily down. ';
                        actionButton = createDirectContactButton('Send Direct Email', `mailto:agupta38160@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Ashish,\n\n${message}\n\nBest regards,\n${name}\n${email}`)}`);
                    }
                    
                    // Show error with alternative contact options
                    showFormMessage(errorMessage, 'error');
                    
                    // Add direct contact button if needed
                    if (actionButton) {
                        const formMessage = document.getElementById('form-message');
                        formMessage.appendChild(actionButton);
                    }
                    
                    // Add WhatsApp and LinkedIn options
                    addAlternativeContactOptions();
                    
                } finally {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }
            });
        }

        function validateField(field) {
            const value = field.value.trim();
            const fieldType = field.type;
            const fieldName = field.name;

            field.classList.remove('error', 'success');

            if (!value) {
                if (field.hasAttribute('required')) {
                    field.classList.add('error');
                    return false;
                }
                return true;
            }

            if (fieldType === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    field.classList.add('error');
                    return false;
                }
            }

            field.classList.add('success');
            return true;
        }

        function validateForm(name, email, subject, message) {
            let isValid = true;

            if (!name || name.length < 2) {
                showFormMessage('Please enter a valid name (at least 2 characters).', 'error');
                isValid = false;
            }

            if (!email || !isValidEmail(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                isValid = false;
            }

            if (!subject) {
                showFormMessage('Please select a subject.', 'error');
                isValid = false;
            }

            if (!message || message.length < 10) {
                showFormMessage('Please enter a message (at least 10 characters).', 'error');
                isValid = false;
            }

            return isValid;
        }

        function showFormMessage(text, type) {
            formMessage.textContent = text;
            formMessage.className = `form-message ${type}`;
            formMessage.classList.remove('hidden');
            
            // Animate message appearance
            formMessage.style.opacity = '0';
            formMessage.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                formMessage.style.opacity = '1';
                formMessage.style.transform = 'translateY(0)';
            }, 100);
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                formMessage.style.opacity = '0';
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 300);
            }, 5000);
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Send email to Gmail using EmailJS
        async function sendEmailToGmail(name, email, subject, message) {
            // Extract emoji and clean subject for better formatting
            const subjectEmoji = subject.split(' ')[0];
            const subjectText = subject.substring(2).trim();
            
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                subject_emoji: subjectEmoji,
                subject_text: subjectText,
                message: message,
                to_name: 'Ashish Gupta',
                reply_to: email,
                timestamp: new Date().toLocaleString(),
                inquiry_type: subjectText,
                contact_source: 'Portfolio Website Contact Form',
                priority: getPriorityLevel(subject)
            };

            return emailjs.send(
                'service_kz8sep6',     // Your EmailJS service ID
                'template_1jpvwkb',    // Your EmailJS template ID
                templateParams
            );
        }

        // Helper function to determine priority level based on subject
        function getPriorityLevel(subject) {
            const highPriority = ['Job Opportunity', 'Internship Opportunity', 'Speaking Engagement'];
            const mediumPriority = ['Cybersecurity Project', 'Collaboration Proposal', 'Freelance Work'];
            
            if (highPriority.some(priority => subject.includes(priority))) {
                return 'High Priority';
            } else if (mediumPriority.some(priority => subject.includes(priority))) {
                return 'Medium Priority';
            }
            return 'Normal Priority';
        }
        
        // Helper functions for subject field enhancements
        function showPriorityIndicator(subjectGroup, priority) {
            // Remove existing indicator
            removePriorityIndicator(subjectGroup);
            
            const indicator = document.createElement('div');
            indicator.className = 'priority-indicator';
            indicator.innerHTML = `
                <span class="priority-badge priority-${priority.toLowerCase().replace(' ', '-')}">
                    ${getPriorityIcon(priority)} ${priority}
                </span>
            `;
            
            const hint = subjectGroup.querySelector('.subject-hint');
            if (hint) {
                hint.after(indicator);
            }
        }
        
        function removePriorityIndicator(subjectGroup) {
            const existing = subjectGroup.querySelector('.priority-indicator');
            if (existing) {
                existing.remove();
            }
        }
        
        function getPriorityIcon(priority) {
            switch (priority) {
                case 'High Priority': return '🔥';
                case 'Medium Priority': return '⚡';
                default: return '📝';
            }
        }
        
        // Helper function to create direct contact button
        function createDirectContactButton(text, href) {
            const button = document.createElement('a');
            button.href = href;
            button.className = 'direct-contact-btn';
            button.innerHTML = `<i class="fas fa-envelope"></i> ${text}`;
            button.style.cssText = `
                display: inline-flex;
                align-items: center;
                gap: 8px;
                margin-top: 10px;
                padding: 10px 20px;
                background: linear-gradient(135deg, #00f5ff 0%, #0066cc 100%);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 14px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 245, 255, 0.3);
            `;
            
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 8px 25px rgba(0, 245, 255, 0.4)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 4px 15px rgba(0, 245, 255, 0.3)';
            });
            
            return button;
        }
        
        // Add alternative contact options
        function addAlternativeContactOptions() {
            const formMessage = document.getElementById('form-message');
            
            // Remove existing alternatives
            const existing = formMessage.querySelector('.alternative-contacts');
            if (existing) existing.remove();
            
            const alternatives = document.createElement('div');
            alternatives.className = 'alternative-contacts';
            alternatives.style.cssText = `
                margin-top: 15px;
                padding: 15px;
                background: rgba(0, 245, 255, 0.05);
                border: 1px solid rgba(0, 245, 255, 0.2);
                border-radius: 10px;
                text-align: center;
            `;
            
            alternatives.innerHTML = `
                <div style="color: #00f5ff; font-weight: 600; margin-bottom: 10px;">
                    <i class="fas fa-phone-alt"></i> Alternative Contact Methods:
                </div>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <a href="https://www.linkedin.com/in/ashish-gupta-037973259/" target="_blank" 
                       class="alt-contact-link" style="color: #0077b5; text-decoration: none; padding: 5px 10px; border-radius: 5px; background: rgba(0, 119, 181, 0.1);">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/bitcodeAShishcloud" target="_blank" 
                       class="alt-contact-link" style="color: #333; text-decoration: none; padding: 5px 10px; border-radius: 5px; background: rgba(51, 51, 51, 0.1);">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="tel:+918303511792" 
                       class="alt-contact-link" style="color: #25d366; text-decoration: none; padding: 5px 10px; border-radius: 5px; background: rgba(37, 211, 102, 0.1);">
                        <i class="fas fa-phone"></i> Call
                    </a>
                    <button onclick="openWhatsAppFromForm()" 
                       class="alt-contact-link" style="color: #25d366; text-decoration: none; padding: 5px 10px; border-radius: 5px; background: rgba(37, 211, 102, 0.1); border: none; cursor: pointer;">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            `;
            
            formMessage.appendChild(alternatives);
        }

        function createCelebrationEffect() {
            const colors = ['#00f5ff', '#0066cc', '#ffffff'];
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.position = 'fixed';
                    confetti.style.width = '10px';
                    confetti.style.height = '10px';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '-10px';
                    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                    confetti.style.animation = `fall ${2 + Math.random() * 2}s ease-out forwards`;
                    confetti.style.zIndex = '9999';
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 4000);
                }, i * 50);
            }
        }
        
        // Initialize timezone display
        function initTimeZoneDisplay() {
            const timeElement = document.getElementById('local-time');
            if (timeElement) {
                function updateTime() {
                    const now = new Date();
                    const timeString = now.toLocaleTimeString('en-IN', {
                        timeZone: 'Asia/Kolkata',
                        hour12: true,
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    timeElement.textContent = timeString + ' IST';
                }
                
                updateTime();
                setInterval(updateTime, 60000); // Update every minute
            }
        }
        
        // Initialize character counter
        function initCharacterCounter() {
            const messageTextarea = document.getElementById('message');
            const charCountElement = document.getElementById('char-count');
            
            if (messageTextarea && charCountElement) {
                messageTextarea.addEventListener('input', function() {
                    const currentLength = this.value.length;
                    const maxLength = 1000;
                    
                    charCountElement.textContent = currentLength;
                    
                    // Change color based on character count
                    if (currentLength > maxLength * 0.9) {
                        charCountElement.style.color = '#ff5459';
                    } else if (currentLength > maxLength * 0.7) {
                        charCountElement.style.color = '#f39c12';
                    } else {
                        charCountElement.style.color = '#00f5ff';
                    }
                    
                    // Prevent exceeding max length
                    if (currentLength > maxLength) {
                        this.value = this.value.substring(0, maxLength);
                        charCountElement.textContent = maxLength;
                    }
                });
            }
        }
    }

    // Parallax Effects for Enhanced Depth
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero-content, .about-content');
        
        function updateParallax() {
            const scrolled = window.scrollY;
            
            parallaxElements.forEach((element, index) => {
                const rate = scrolled * -0.5;
                const yPos = rate / (index + 1);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }

        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Project Card Hover Animations
    function initProjectAnimations() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) rotateY(5deg)';
                this.style.boxShadow = '0 25px 50px rgba(0, 245, 255, 0.4)';
                
                // Add floating animation to project links
                const links = this.querySelectorAll('.project-link');
                links.forEach((link, index) => {
                    setTimeout(() => {
                        link.style.transform = 'translateY(-5px) scale(1.1)';
                    }, index * 100);
                });
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateY(0deg)';
                this.style.boxShadow = '';
                
                // Reset project links
                const links = this.querySelectorAll('.project-link');
                links.forEach(link => {
                    link.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Add click ripple effect
            card.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.width = '0';
                ripple.style.height = '0';
                ripple.style.background = 'rgba(0, 245, 255, 0.5)';
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Performance Optimizations
    function initPerformanceOptimizations() {
        // Lazy load images when they exist
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));

        // Optimize animations for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--duration-fast', '0ms');
            document.documentElement.style.setProperty('--duration-normal', '0ms');
        }

        // Debounced resize handler
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Handle responsive updates
                handleResponsiveUpdates();
            }, 250);
        });
    }

    function handleResponsiveUpdates() {
        // Update particles.js on resize
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
        
        // Update any responsive calculations
        updateTypingTextWidth();
    }

    function updateTypingTextWidth() {
        const typingText = document.getElementById('typing-text');
        if (typingText && window.innerWidth < 768) {
            typingText.style.minWidth = '250px';
        } else if (typingText) {
            typingText.style.minWidth = '350px';
        }
    }

    // Add custom CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% { opacity: 1; transform: translateY(-50%) scale(0); }
            50% { transform: translateY(-50%) scale(1); }
            100% { opacity: 0; transform: translateY(-50%) scale(0); }
        }
        
        @keyframes ripple {
            to { width: 200px; height: 200px; opacity: 0; }
        }
        
        @keyframes fall {
            to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        .form-control.error {
            border-color: #ff5459;
            box-shadow: 0 0 10px rgba(255, 84, 89, 0.3);
        }
        
        .form-control.success {
            border-color: #00f5ff;
            box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
        }
        
        .animate-in {
            animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(50px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Initialize tooltips
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = this.getAttribute('data-tooltip');
                tooltip.style.position = 'absolute';
                tooltip.style.background = 'rgba(0, 0, 0, 0.9)';
                tooltip.style.color = 'white';
                tooltip.style.padding = '8px 12px';
                tooltip.style.borderRadius = '6px';
                tooltip.style.fontSize = '14px';
                tooltip.style.zIndex = '10000';
                tooltip.style.pointerEvents = 'none';
                tooltip.style.opacity = '0';
                tooltip.style.transition = 'opacity 0.3s ease';
                
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
                
                setTimeout(() => tooltip.style.opacity = '1', 10);
                
                this._tooltip = tooltip;
            });
            
            element.addEventListener('mouseleave', function() {
                if (this._tooltip) {
                    this._tooltip.style.opacity = '0';
                    setTimeout(() => {
                        if (this._tooltip && this._tooltip.parentNode) {
                            this._tooltip.parentNode.removeChild(this._tooltip);
                        }
                    }, 300);
                }
            });
        });
    }

    initTooltips();

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Loading completion
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.classList.add('animate-in');
            }
        }, 300);
    });

    console.log('🚀 Cybersecurity Portfolio initialized successfully!');
    console.log('✨ All systems operational and secure!');
    
    // Comprehensive EmailJS configuration checker
    window.checkEmailJSConfig = function() {
        console.log('🔍 Checking EmailJS configuration...');
        
        // Check if EmailJS is loaded
        if (typeof emailjs === 'undefined') {
            console.error('❌ EmailJS not loaded! Check if the script is included.');
            return false;
        }
        
        console.log('✅ EmailJS library loaded');
        
        // Test basic functionality
        const testParams = {
            from_name: 'Config Test',
            from_email: 'test@example.com',
            subject: '🔧 Configuration Test',
            message: 'Testing EmailJS configuration...',
            to_name: 'Ashish Gupta',
            reply_to: 'test@example.com',
            timestamp: new Date().toLocaleString()
        };
        
        return emailjs.send('service_kz8sep6', 'template_1jpvwkb', testParams)
            .then(response => {
                console.log('✅ EmailJS configuration is working!', response);
                alert('✅ EmailJS is properly configured and working!');
                return true;
            })
            .catch(error => {
                console.error('❌ EmailJS configuration error:', error);
                
                // Provide specific solutions
                if (error.status === 401 || error.status === 403) {
                    console.log('💡 Solution: Check your public key in emailjs.init()');
                } else if (error.status === 404) {
                    console.log('💡 Solution: Check your service ID and template ID');
                } else {
                    console.log('💡 Solution: Verify your EmailJS account setup');
                }
                
                alert(`❌ EmailJS Error: ${error.text || error.message}\nCheck console for solutions.`);
                return false;
            });
    };
    
    // Auto-detect and fix common EmailJS issues
    window.autoFixEmailJS = function() {
        console.log('🔧 Attempting to auto-fix EmailJS configuration...');
        
        // Common service IDs to try
        const commonConfigs = [
            { service: 'service_kz8sep6', template: 'template_1jpvwkb' },
            { service: 'default_service', template: 'template_contact' },
            { service: 'gmail', template: 'contact_form' },
            { service: 'service_gmail', template: 'template_portfolio' }
        ];
        
        const testParams = {
            from_name: 'Auto-Fix Test',
            from_email: 'test@example.com',
            subject: '🔧 Auto-Fix Test',
            message: 'Testing different configurations...',
            to_name: 'Ashish Gupta',
            reply_to: 'test@example.com',
            timestamp: new Date().toLocaleString()
        };
        
        async function tryConfig(config) {
            try {
                const response = await emailjs.send(config.service, config.template, testParams);
                console.log(`✅ Working config found: ${config.service}/${config.template}`, response);
                return config;
            } catch (error) {
                console.log(`❌ Config failed: ${config.service}/${config.template}`, error.text);
                return null;
            }
        }
        
        // Try each configuration
        Promise.all(commonConfigs.map(tryConfig))
            .then(results => {
                const workingConfig = results.find(config => config !== null);
                if (workingConfig) {
                    console.log('🎉 Found working configuration!', workingConfig);
                    alert(`🎉 Auto-fix successful!\nUse: Service ID: ${workingConfig.service}\nTemplate ID: ${workingConfig.template}`);
                } else {
                    console.log('❌ No working configuration found');
                    alert('❌ Auto-fix failed. Manual setup required.');
                }
            });
    };
    
    // Simple contact form fallback
    window.useSimpleContact = function(name, email, subject, message) {
        const mailtoLink = `mailto:agupta38160@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`
Hi Ashish,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent from: Portfolio Contact Form
Date: ${new Date().toLocaleString()}
        `)}`;
        
        window.location.href = mailtoLink;
    };
    
    console.log('💡 Available debugging commands:');
    console.log('   - checkEmailJSConfig() : Test current configuration');
    console.log('   - autoFixEmailJS() : Try to find working configuration');
    console.log('   - testEmailJS() : Send test email');
});

// Global utility functions for contact actions
function downloadResume() {
    // Convert Google Drive view link to direct download link
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1rwPbTUc2Tie5C5xsDDjVMbdTAoc8LKtQ';
    
    // Create a sophisticated notification for resume download
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 102, 204, 0.1) 100%);
        border: 1px solid rgba(0, 245, 255, 0.3);
        backdrop-filter: blur(15px);
        color: #00f5ff;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transform: translateX(400px);
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: 320px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-file-pdf" style="color: #00f5ff; font-size: 18px;"></i>
            <div>
                <div style="font-weight: 600; margin-bottom: 4px;">Downloading Resume...</div>
                <div style="font-size: 12px; opacity: 0.8;">Ashish Gupta - Cybersecurity Resume</div>
            </div>
            <i class="fas fa-times" onclick="this.parentElement.parentElement.remove()" style="cursor: pointer; opacity: 0.6; margin-left: auto;"></i>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Create download link and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ashish_Gupta_Cybersecurity_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Auto remove notification after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Enhanced social media functions
function openLinkedIn() {
    window.open('https://www.linkedin.com/in/ashish-gupta-037973259/', '_blank');
}

function openGitHub() {
    window.open('https://github.com/bitcodeAShishcloud', '_blank');
}

function viewResume() {
    // Open resume in Google Drive viewer
    window.open('https://drive.google.com/file/d/1rwPbTUc2Tie5C5xsDDjVMbdTAoc8LKtQ/view', '_blank');
}

function sendEmail() {
    window.location.href = 'mailto:agupta38160@gmail.com?subject=Professional Inquiry&body=Hello Ashish,%0D%0A%0D%0AI am interested in discussing...';
}

// Enhanced instant contact methods
function sendViaEmail(name, email, subject, message) {
    const mailtoLink = `mailto:agupta38160@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Ashish,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent from: Portfolio Contact Form
Date: ${new Date().toLocaleString()}

Best regards,
${name}`)}`;
    
    window.open(mailtoLink, '_blank');
    
    // Show success message
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = '<div style="color: #00f5ff; text-align: center; padding: 10px;"><i class="fas fa-check-circle"></i> Email client opened! Please send the email from there.</div>';
}

function copyToClipboard(name, email, subject, message) {
    const contactInfo = `Contact Details:
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Contact Ashish at: agupta38160@gmail.com
Date: ${new Date().toLocaleString()}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(contactInfo).then(() => {
            showCopySuccess();
        }).catch(() => {
            fallbackCopy(contactInfo);
        });
    } else {
        fallbackCopy(contactInfo);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        console.error('Copy failed:', err);
        alert('Copy failed. Please manually save the contact details.');
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccess() {
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = '<div style="color: #00f5ff; text-align: center; padding: 10px;"><i class="fas fa-check-circle"></i> Contact details copied! Paste them in your email client.</div>';
}

function openWhatsApp(name, email, subject, message) {
    const whatsappMessage = `Hi Ashish! 👋

I'm ${name} (${email}) reaching out regarding: ${subject}

${message}

Looking forward to connecting with you!

Sent from your portfolio website. ✨`;
    
    const whatsappURL = `https://wa.me/918303511792?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = '<div style="color: #00f5ff; text-align: center; padding: 10px;"><i class="fab fa-whatsapp"></i> WhatsApp opened! Send the message from there.</div>';
}

function openWhatsAppFromForm() {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const subject = document.querySelector('select[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value.trim();
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all form fields before using WhatsApp.');
        return;
    }
    
    openWhatsApp(name, email, subject, message);
}