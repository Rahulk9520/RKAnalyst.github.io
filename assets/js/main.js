// Main JavaScript file - Enhanced with Pagination
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initParticles();
    initNavigation();
    initTypewriter();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initCounters();
    initScrollToNext();
    
    // 🆕 NEW: Initialize pagination with your existing projects
    initProjectsPagination();
    initProjectFilter(); // Enhanced version
});

// 🆕 ADD THIS SECTION HERE - EmailJS Configuration
// Initialize EmailJS (replace with your actual public key)
(function(){
    emailjs.init("Rekuuxq-Hk1MdVRx3");
})();

// 🆕 NEW: Project data array (convert your existing cards to this format)
const projectsData = [
    {
        id: 1,
        title: "Speech Emotion Recognition",
        description: "Speech emotion classification using SVM and AdaBoost",
        category: "machine-learning",
        tags: ["Librosa", "MFCC", "SVM", "AdaBoost"],
        icon: "fas fa-microphone-alt",
        github: "https://github.com/Rahulk9520/CV-Speech-Processing/tree/main/Speech%20Emotion%20Recognition%20(CV-11)",
        demo: "https://github.com/Rahulk9520/CV-Speech-Processing/tree/main/Speech%20Emotion%20Recognition%20(CV-11)",
        demoLabel: "View Results",
        achievements: [
            "Extracted MFCC features using librosa.feature.mfcc",
            "Achieved 64.8% accuracy with SVM classifier",
            "Compared SVM vs AdaBoost performance metrics",
            "Analyzed 4 emotions: Calm, Happy, Sad, Angry",
            "Optimized MFCC parameters (12-30 features)"
        ]
    },
    {
        id: 2,
        title: "Inventory Optimization – Gala Groceries",
        description: "End-to-end Grocery stock-forecasting ML pipeline",
        category: "machine-learning",
        tags: ["Python", "Random Forest", "EDA", "MLOps"],
        icon: "fas fa-shopping-basket",
        github: "https://github.com/Rahulk9520/Cognizant-AI-Virtual-Experience-Program",
        demo: "https://github.com/Rahulk9520/Cognizant-AI-Virtual-Experience-Program/tree/main/Task-2",
        demoLabel: "Case Study",
        achievements: [
            "Unified data wrangling across transactions, stock, and temperature",
            "Feature engineering (time, price, category) with k-fold validation",
            "Random Forest Regressor with MAE evaluation and feature importance",
            "Production-ready training module and QA checks"
        ]
    },
    {
        id: 3,
        title: "Pedestrian Monitoring & Wi-Fi Prediction",
        description: "Suburb-level dashboard tracking pedestrian flows and predicting daily Wi-Fi usage to inform urban planning decisions",
        category: "visualization",
        tags: ["Geo-spatial Analytics", "Clustering", "LSTM", "Tableau"],
        icon: "fas fa-wifi",
        github: "https://github.com/Rahulk9520/D2I-Geelong-City",
        demo: "https://github.com/Rahulk9520/D2I-Geelong-City/tree/main/Presentations",
        demoLabel: "Client Presentations",
        achievements: [
            "Tracked pedestrian foot-counts across public locations using Wi-Fi data",
            "Mapped and visualized movement patterns and Wi-Fi usage by suburb",
            "Applied geo-spatial clustering for location-based segmentation",
            "Developed and optimized multiclass ML models for accurate predictions"
        ]
    },
    {
        id: 4,
        title: "Smart Recycling using Deep Learning",
        description: "Deep learning-powered image classification system for automated waste sorting and recycling",
        category: "machine-learning",
        tags: ["Keras", "ResNet50", "Transfer Learning", "Web App"],
        icon: "fas fa-recycle",
        github: "https://github.com/Rahulk9520/Deep-Learning/tree/main/Garbage%20Classification",
        demo: "https://github.com/Rahulk9520/Deep-Learning/tree/main/Garbage%20Classification",
        demoLabel: "Try Demo",
        achievements: [
            "Deployed CNN architectures (VGG16, ResNet50) with transfer learning for multi-class garbage classification",
            "Applied data augmentation to improve robustness and generalisability across diverse waste domains",
            "Evaluated model strengths and weaknesses through test accuracy and cross-domain validation",
            "Developed an end-to-end recycling prototype as a web application using Python and Keras"
        ]
    },
    {
        id: 5,
        title: "Hepatitis Recommendation System",
        description: "AI-powered Telegram chatbot for hepatitis diagnosis using machine learning and Azure deployment",
        category: "machine-learning",
        tags: ["Telegram Bot", "Azure ML", "Python", "Healthcare AI"],
        icon: "fas fa-user-md",
        github: "https://github.com/Rahulk9520/Hepatitis-Reccomendation-System",
        demo: "https://github.com/Rahulk9520/Hepatitis-Reccomendation-System/tree/main/Hepatitis%20Recommendation%20System",
        demoLabel: "Try Bot",
        achievements: [
            "Interactive Telegram chatbot for patient symptom assessment",
            "ML model deployed on Azure with REST API integration",
            "16-parameter diagnostic questionnaire for hepatitis prediction",
            "Label encoding and data preprocessing for accurate predictions"
        ]
    },
    {
        id: 6,
        title: "Cyber-Security Data Analytics",
        description: "ML-powered intrusion detection for IoT networks",
        category: "machine-learning",
        tags: ["Random Forest", "NSL-KDD", "TON_IoT", "IDS"],
        icon: "fas fa-shield-alt",
        github: "https://github.com/Rahulk9520/Cyber-Security-Data-Analytics-Project",
        demo: "https://github.com/Rahulk9520/Cyber-Security-Data-Analytics-Project",
        demoLabel: "View Report",
        achievements: [
            "86.98% accuracy with Random Forest on IoT data",
            "Analyzed 9 attack types (DoS, ransomware, XSS, MITM)",
            "Processed 400K+ IoT telemetry records",
            "Compared 5 ML algorithms across 2 datasets",
            "Multi-class attack classification system"
        ]
    },
    {
        id: 7,
        title: "Heart Failure Survival Prediction",
        description: "ML system predicting patient survival using clinical biomarkers",
        category: "machine-learning",
        tags: ["Neural Networks", "Medical AI", "SMOTE", "Biomarkers"],
        icon: "fas fa-heartbeat",
        github: "https://github.com/Rahulk9520/Heart-Failure-Survival-Prediction-System",
        demo: "https://github.com/Rahulk9520/Heart-Failure-Survival-Prediction-System/tree/master/Report",
        demoLabel: "View Analysis",
        achievements: [
            "Achieved 87% prediction accuracy with Random Forest",
            "Key predictors: serum creatinine & ejection fraction",
            "Applied advanced techniques: GridSearchCV, stratified sampling and cross-validation",
            "Evaluated 10 ML algorithms including RF, DL Models, Gradient Boosting",
            "Optimized two-feature clinical model with 84.2% ROC-AUC",
        ]
    },
    {
        id: 8,
        title: "COVID SQL Data Wrangling",
        description: "SQL analysis of global COVID-19 data for pandemic insights",
        category: "data-analysis",
        tags: ["SQL Server", "Data Analysis", "COVID-19", "ETL"],
        icon: "fas fa-database",
        github: "https://github.com/Rahulk9520/COVID-SQL-Data-Wrangling",
        demo: "https://github.com/Rahulk9520/COVID-SQL-Data-Wrangling",
        demoLabel: "View Analysis",
        achievements: [
            "Analyzed 3+ years of global COVID data (2020-2023)",
            "Calculated death rates, infection percentages, vaccination progress by country/continent",
            "Used JOINs, CTEs, temp tables for complex queries",
            "Created vaccination progress tracking with rolling sums",
            "Built reusable database views for data visualization and reporting"
        ]
    }
];

// 🆕 NEW: Pagination Configuration
const projectsPerPage = 4;
let currentPage = 1;
let currentFilter = 'all';

// 🆕 UPDATED: Generate project card HTML with customizable demo button label
function createProjectCard(project, demoLabel = "Live Demo") {
    const buttonLabel = project.demoLabel || demoLabel; // ✅ ADD THIS LINE
    
    return `
        <article class="project-card reveal-animation stagger-animation" data-category="${project.category}">
            <div class="flip-card">
                <div class="flip-card-front">
                    <div class="project-image">
                        <div class="project-placeholder" aria-hidden="true">
                            <i class="${project.icon}"></i>
                        </div>
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="${project.github}" class="project-link" target="_blank" rel="noopener">
                                    <i class="fab fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="${project.demo}" class="project-link">
                                    <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="back-content">
                        <h3>Key Features</h3>
                        <ul>
                            ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                        <div class="back-buttons">
                            <a href="${project.github}" class="btn btn-small" target="_blank" rel="noopener">View Code</a>
                            <a href="${project.demo}" class="btn btn-small btn-secondary">${buttonLabel}</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// 🆕 NEW: Render projects for current page
function renderProjectsPage(page, filterCategory = 'all') {
    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    
    // Filter projects by category
    let filteredProjects = filterCategory === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filterCategory);
    
    const paginatedProjects = filteredProjects.slice(start, end);
    const projectsContainer = document.getElementById('projectsGrid');
    projectsContainer.innerHTML = '';

    paginatedProjects.forEach(project => {
        projectsContainer.insertAdjacentHTML('beforeend', createProjectCard(project));
    });
    
    // Trigger animations
    const cards = projectsContainer.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('revealed');
    });
}

// 🆕 NEW: Generate pagination buttons
function renderPagination(filterCategory = 'all') {
    let filteredProjects = filterCategory === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filterCategory);
    
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';

    // Only show pagination if more than 1 page
    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }
    
    paginationContainer.style.display = 'flex';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.add('pagination-btn');
        btn.classList.toggle('active', i === currentPage);
        
        btn.addEventListener('click', () => {
            if (currentPage !== i) {
                currentPage = i;
                renderProjectsPage(currentPage, filterCategory);
                renderPagination(filterCategory);
                
                // Smooth scroll to projects section
                document.getElementById('projectsGrid').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        paginationContainer.appendChild(btn);
    }
}

// 🆕 NEW: Initialize projects with pagination
function initProjectsPagination() {
    renderProjectsPage(currentPage, currentFilter);
    renderPagination(currentFilter);
}

// 🔄 ENHANCED: Project filter functionality (updated to work with pagination)
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            currentFilter = filterValue;
            currentPage = 1; // Reset to first page when filtering
            
            // Render filtered projects and pagination
            renderProjectsPage(currentPage, filterValue);
            renderPagination(filterValue);
        });
    });
}

// Particles.js initialization
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ff6b6b'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4ecdc4',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
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
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Enhanced navbar scroll effect - UPDATED
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Triggers earlier for better responsiveness
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// Typewriter effect
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    const texts = [
        'Data Scientist',
        'Machine Learning Engineer',
        'Python Developer',
        'Analytics Expert',
        'AI Enthusiast'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all elements with reveal-animation class
    document.querySelectorAll('.reveal-animation').forEach(el => {
        observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        const progress = item.querySelector('.skill-progress');
                        const percentage = item.getAttribute('data-skill');
                        progress.style.width = percentage + '%';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skills-container').forEach(container => {
        skillObserver.observe(container);
    });
}

// 🔄 UPDATED: Contact form functionality with EmailJS
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const formInputs = form.querySelectorAll('.form-control');
    
    // Add floating label effect
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
    
    // 🆕 NEW: EmailJS form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.querySelector('.btn-submit');
        const statusDiv = document.getElementById('submitStatus');
        const btnText = document.querySelector('.btn-text');
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        statusDiv.innerHTML = '';
        statusDiv.className = 'form-status';
        
        // Prepare template parameters
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            current_date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        
        // Send email (replace with your actual service and template IDs)
        emailjs.send('service_gvz9ejh', 'template_bt3gidt', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                statusDiv.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
                statusDiv.className = 'form-status success';
                form.reset();
                
                // Remove focused class from form groups
                formInputs.forEach(input => {
                    input.parentElement.classList.remove('focused');
                });
            }, function(error) {
                console.log('FAILED...', error);
                statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed to send message. Please try again.';
                statusDiv.className = 'form-status error';
            })
            .finally(function() {
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
            });
        
        // Add ripple effect
        addRippleEffect(e, submitBtn);
    });
}

// Counter animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const increment = target / 50;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Ripple effect helper function
function addRippleEffect(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.classList.add('btn-ripple');
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Smooth scrolling for navigation links
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

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Smooth scroll to next section functionality
function initScrollToNext() {
    const scrollButton = document.getElementById('scrollToNext');
    const sections = ['about', 'skills', 'projects', 'contact'];
    
    if (!scrollButton) return;
    
    scrollButton.addEventListener('click', () => {
        const currentScrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        let targetSection = null;
        
        // Find the next section to scroll to
        for (let sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section && section.offsetTop > currentScrollPosition + windowHeight * 0.3) {
                targetSection = section;
                break;
            }
        }
        
        // If no next section found, scroll to first section (about)
        if (!targetSection) {
            targetSection = document.getElementById('about');
        }
        
        // Smooth scroll to target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add click animation
            scrollButton.style.transform = 'scale(0.9)';
            setTimeout(() => {
                scrollButton.style.transform = 'scale(1)';
            }, 150);
        }
    });
    
    // Hide arrow when reaching contact section
    window.addEventListener('scroll', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const contactTop = contactSection.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            
            if (scrollPosition >= contactTop + contactSection.offsetHeight * 0.7) {
                scrollButton.style.opacity = '0.3';
                scrollButton.style.pointerEvents = 'none';
            } else {
                scrollButton.style.opacity = '1';
                scrollButton.style.pointerEvents = 'auto';
            }
        }
    });
}
