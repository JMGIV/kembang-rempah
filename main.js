// Indonesian Spice Export Website - Main JavaScript
// Handles all interactive functionality and animations

// Global variables
let selectedSpices = [];
let totalQuote = 0;

// Spice data for products page
const spiceData = [
    {
        id: 1,
        name: "Premium Cloves",
        type: "cloves",
        origin: "Sulawesi",
        grade: "Premium",
        form: "Whole",
        price: 12.50,
        image: "resources/cloves-1.jpg",
        description: "Hand-picked cloves from South Sulawesi with essential oil content above 19%",
        moq: 100
    },
    {
        id: 2,
        name: "Cinnamon Sticks",
        type: "cinnamon",
        origin: "Sumatra",
        grade: "Premium",
        form: "Whole",
        price: 8.75,
        image: "resources/cinnamon-sticks.jpg",
        description: "Aromatic cassia cinnamon from West Sumatra, 3-6 inch quills",
        moq: 50
    },
    {
        id: 3,
        name: "Cardamom Pods",
        type: "cardamom",
        origin: "Java",
        grade: "Standard",
        form: "Whole",
        price: 22.30,
        image: "resources/cardamom-pods.jpg",
        description: "Green cardamom pods with intense aroma and flavor",
        moq: 75
    },
    {
        id: 4,
        name: "Turmeric Powder",
        type: "turmeric",
        origin: "Java",
        grade: "Premium",
        form: "Powder",
        price: 5.20,
        image: "resources/ginger-dried.jpg",
        description: "High curcumin content turmeric powder (3-6%)",
        moq: 100
    },
    {
        id: 5,
        name: "Nutmeg Whole",
        type: "nutmeg",
        origin: "Maluku",
        grade: "Premium",
        form: "Whole",
        price: 15.80,
        image: "resources/cumin-seeds.jpg",
        description: "Whole nutmeg from the legendary Spice Islands",
        moq: 50
    },
    {
        id: 6,
        name: "Black Pepper",
        type: "pepper",
        origin: "Sumatra",
        grade: "Standard",
        form: "Whole",
        price: 7.90,
        image: "resources/saffron-threads.jpg",
        description: "Bold and fragrant black peppercorns from Lampung",
        moq: 100
    },
    {
        id: 7,
        name: "Ginger Powder",
        type: "ginger",
        origin: "Java",
        grade: "Standard",
        form: "Powder",
        price: 6.50,
        image: "resources/ginger-dried.jpg",
        description: "Spicy and aromatic ginger powder for culinary use",
        moq: 100
    },
    {
        id: 8,
        name: "Cinnamon Bark",
        type: "cinnamon",
        origin: "Sumatra",
        grade: "Standard",
        form: "Chips",
        price: 5.80,
        image: "resources/cinnamon-bark.jpg",
        description: "Cinnamon bark chips for extraction and brewing",
        moq: 150
    },
    {
        id: 9,
        name: "Green Cardamom",
        type: "cardamom",
        origin: "Sumatra",
        grade: "Premium",
        form: "Whole",
        price: 25.60,
        image: "resources/cardamom-green.jpg",
        description: "Premium grade green cardamom with superior aroma",
        moq: 50
    },
    {
        id: 10,
        name: "Cumin Seeds",
        type: "cumin",
        origin: "Java",
        grade: "Standard",
        form: "Whole",
        price: 4.80,
        image: "resources/cumin-seeds.jpg",
        description: "Aromatic cumin seeds for spice blends",
        moq: 100
    },
    {
        id: 11,
        name: "Fennel Seeds",
        type: "fennel",
        origin: "Java",
        grade: "Standard",
        form: "Whole",
        price: 3.90,
        image: "resources/cumin-seeds.jpg",
        description: "Sweet fennel seeds for culinary and medicinal use",
        moq: 100
    },
    {
        id: 12,
        name: "Coriander Seeds",
        type: "coriander",
        origin: "Java",
        grade: "Standard",
        form: "Whole",
        price: 4.20,
        image: "resources/cumin-seeds.jpg",
        description: "Citrusy coriander seeds for spice blends",
        moq: 100
    },
    {
        id: 13,
        name: "Premium Nutmeg",
        type: "nutmeg",
        origin: "Maluku",
        grade: "Premium",
        form: "Whole",
        price: 18.50,
        image: "resources/cumin-seeds.jpg",
        description: "Select grade nutmeg from Banda Islands",
        moq: 25
    },
    {
        id: 14,
        name: "Mace Blades",
        type: "mace",
        origin: "Maluku",
        grade: "Premium",
        form: "Whole",
        price: 32.00,
        image: "resources/saffron-threads.jpg",
        description: "Premium mace blades with intense aroma",
        moq: 25
    },
    {
        id: 15,
        name: "White Pepper",
        type: "pepper",
        origin: "Sumatra",
        grade: "Standard",
        form: "Whole",
        price: 9.20,
        image: "resources/saffron-threads.jpg",
        description: "Mild white peppercorns for light-colored dishes",
        moq: 100
    }
];

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializePageSpecificFeatures();
});

// Animation initialization
function initializeAnimations() {
    // Scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Counter animations for statistics
    animateCounters();
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
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

    // Active navigation highlighting
    updateActiveNavigation();
    window.addEventListener('scroll', updateActiveNavigation);
}

// Page-specific feature initialization
function initializePageSpecificFeatures() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'products.html':
            initializeProductsPage();
            break;
        case 'about.html':
            initializeAboutPage();
            break;
        case 'contact.html':
            initializeContactPage();
            break;
    }
}

// Home page initialization
function initializeHomePage() {
    initializeHeroAnimations();
    initializeProductCarousel();
    initializeParticleEffect();
}

// Hero animations
function initializeHeroAnimations() {
    // Hero text animations
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1200
    })
    .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [60, 0],
        delay: 300
    })
    .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [40, 0],
        delay: 200
    }, '-=800')
    .add({
        targets: '.hero-cta',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: 100
    }, '-=600');
}

// Product carousel initialization
function initializeProductCarousel() {
    const carousel = document.querySelector('.product-carousel');
    if (carousel) {
        // Initialize Splide carousel
        new Splide(carousel, {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 }
            }
        }).mount();
    }
}

// Particle effect for hero section
function initializeParticleEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && typeof p5 !== 'undefined') {
        // Create particle canvas
        const particleSketch = (p) => {
            let particles = [];
            
            p.setup = () => {
                const canvas = p.createCanvas(heroSection.offsetWidth, heroSection.offsetHeight);
                canvas.parent(heroSection);
                canvas.style('position', 'absolute');
                canvas.style('top', '0');
                canvas.style('left', '0');
                canvas.style('z-index', '1');
                canvas.style('pointer-events', 'none');
                
                // Create particles
                for (let i = 0; i < 50; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        size: p.random(2, 6),
                        speedX: p.random(-0.5, 0.5),
                        speedY: p.random(-0.8, -0.2),
                        opacity: p.random(0.3, 0.8)
                    });
                }
            };
            
            p.draw = () => {
                p.clear();
                
                particles.forEach(particle => {
                    p.fill(184, 134, 11, particle.opacity * 255); // Gold color
                    p.noStroke();
                    p.ellipse(particle.x, particle.y, particle.size);
                    
                    // Move particle
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    
                    // Reset particle if it goes off screen
                    if (particle.y < 0) {
                        particle.y = p.height;
                        particle.x = p.random(p.width);
                    }
                    if (particle.x < 0 || particle.x > p.width) {
                        particle.x = p.random(p.width);
                    }
                });
            };
            
            p.windowResized = () => {
                p.resizeCanvas(heroSection.offsetWidth, heroSection.offsetHeight);
            };
        };
        
        new p5(particleSketch);
    }
}

// Products page initialization
function initializeProductsPage() {
    renderSpiceProducts();
    initializeFilters();
    initializeQuoteCalculator();
}

// Render spice products
function renderSpiceProducts(filteredData = spiceData) {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = filteredData.map(spice => `
        <div class="product-card reveal" data-spice-id="${spice.id}">
            <div class="product-image">
                <img src="${spice.image}" alt="${spice.name}" loading="lazy">
                <div class="product-overlay">
                    <button class="btn-quick-view" onclick="showProductDetails(${spice.id})">
                        Quick View
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${spice.name}</h3>
                <p class="product-origin">${spice.origin}</p>
                <p class="product-grade">${spice.grade} Grade</p>
                <div class="product-price">
                    <span class="price">$${spice.price}</span>
                    <span class="unit">/kg</span>
                </div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="qty-btn minus" onclick="updateQuantity(${spice.id}, -1)">-</button>
                        <input type="number" value="0" min="0" max="1000" 
                               onchange="updateQuoteItem(${spice.id}, this.value)">
                        <button class="qty-btn plus" onclick="updateQuantity(${spice.id}, 1)">+</button>
                    </div>
                    <span class="moq">Min: ${spice.moq}kg</span>
                </div>
            </div>
        </div>
    `).join('');

    // Re-observe new elements for animations
    document.querySelectorAll('.product-card.reveal').forEach(el => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });
        observer.observe(el);
    });
}

// Initialize product filters
function initializeFilters() {
    const filterForm = document.querySelector('.filter-form');
    if (!filterForm) return;

    filterForm.addEventListener('change', applyFilters);
    
    // Reset filters button
    const resetBtn = document.querySelector('.reset-filters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
}

// Apply filters to products
function applyFilters() {
    const formData = new FormData(document.querySelector('.filter-form'));
    const filters = Object.fromEntries(formData.entries());

    let filteredData = spiceData.filter(spice => {
        // Type filter
        if (filters.type && filters.type !== 'all' && spice.type !== filters.type) {
            return false;
        }
        
        // Origin filter
        if (filters.origin && filters.origin !== 'all' && spice.origin !== filters.origin) {
            return false;
        }
        
        // Grade filter
        if (filters.grade && filters.grade !== 'all' && spice.grade !== filters.grade) {
            return false;
        }
        
        // Form filter
        if (filters.form && filters.form !== 'all' && spice.form !== filters.form) {
            return false;
        }
        
        // Price range filter
        const minPrice = parseFloat(filters.minPrice) || 0;
        const maxPrice = parseFloat(filters.maxPrice) || Infinity;
        if (spice.price < minPrice || spice.price > maxPrice) {
            return false;
        }
        
        return true;
    });

    renderSpiceProducts(filteredData);
    updateResultsCount(filteredData.length);
}

// Reset all filters
function resetFilters() {
    document.querySelector('.filter-form').reset();
    renderSpiceProducts();
    updateResultsCount(spiceData.length);
}

// Update results counter
function updateResultsCount(count) {
    const counter = document.querySelector('.results-count');
    if (counter) {
        counter.textContent = `${count} products found`;
    }
}

// Initialize quote calculator
function initializeQuoteCalculator() {
    const quotePanel = document.querySelector('.quote-panel');
    if (!quotePanel) return;

    updateQuoteDisplay();
}

// Update quantity for spice
function updateQuantity(spiceId, change) {
    const input = document.querySelector(`[data-spice-id="${spiceId}"] input[type="number"]`);
    if (input) {
        const newValue = Math.max(0, parseInt(input.value) + change);
        input.value = newValue;
        updateQuoteItem(spiceId, newValue);
    }
}

// Update quote item
function updateQuoteItem(spiceId, quantity) {
    const spice = spiceData.find(s => s.id === spiceId);
    if (!spice) return;

    quantity = parseInt(quantity) || 0;
    
    // Remove existing item if any
    selectedSpices = selectedSpices.filter(item => item.id !== spiceId);
    
    // Add item if quantity > 0 and meets MOQ
    if (quantity > 0 && quantity >= spice.moq) {
        selectedSpices.push({
            ...spice,
            quantity: quantity,
            subtotal: quantity * spice.price
        });
    }
    
    updateQuoteDisplay();
}

// Update quote display
function updateQuoteDisplay() {
    const quoteItems = document.querySelector('.quote-items');
    const quoteTotal = document.querySelector('.quote-total');
    
    if (!quoteItems || !quoteTotal) return;

    if (selectedSpices.length === 0) {
        quoteItems.innerHTML = '<p class="empty-quote">No items selected</p>';
        quoteTotal.textContent = '$0.00';
        return;
    }

    quoteItems.innerHTML = selectedSpices.map(item => `
        <div class="quote-item">
            <span class="item-name">${item.name}</span>
            <span class="item-qty">${item.quantity}kg</span>
            <span class="item-price">$${item.subtotal.toFixed(2)}</span>
        </div>
    `).join('');

    totalQuote = selectedSpices.reduce((sum, item) => sum + item.subtotal, 0);
    quoteTotal.textContent = `$${totalQuote.toFixed(2)}`;
}

// About page initialization
function initializeAboutPage() {
    initializeIndonesiaMap();
    initializeTimeline();
}

// Interactive Indonesia map
function initializeIndonesiaMap() {
    const mapContainer = document.querySelector('.indonesia-map');
    if (!mapContainer) return;

    // Map regions data
    const regions = {
        'sumatra': { name: 'Sumatra', spices: ['Cinnamon', 'Black Pepper'], x: 20, y: 40 },
        'java': { name: 'Java', spices: ['Turmeric', 'Ginger', 'Cardamom'], x: 45, y: 60 },
        'sulawesi': { name: 'Sulawesi', spices: ['Cloves', 'Vanilla'], x: 70, y: 45 },
        'maluku': { name: 'Maluku', spices: ['Nutmeg', 'Mace'], x: 80, y: 55 }
    };

    // Create interactive regions
    Object.entries(regions).forEach(([key, region]) => {
        const regionElement = document.createElement('div');
        regionElement.className = 'map-region';
        regionElement.style.left = `${region.x}%`;
        regionElement.style.top = `${region.y}%`;
        regionElement.innerHTML = `
            <div class="region-marker"></div>
            <div class="region-tooltip">
                <h4>${region.name}</h4>
                <p>Primary Spices:</p>
                <ul>${region.spices.map(spice => `<li>${spice}</li>`).join('')}</ul>
            </div>
        `;
        
        mapContainer.appendChild(regionElement);
    });
}

// Timeline initialization
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Contact page initialization
function initializeContactPage() {
    initializeContactForm();
    initializeFAQ();
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Form validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(form)) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showSuccessMessage();
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Form validation
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = 'This field is required';
        isValid = false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }
    }
    
    // Show/hide error
    showFieldError(field, errorMessage, isValid);
    return isValid;
}

// Show field error
function showFieldError(field, message, isValid) {
    const errorElement = field.parentNode.querySelector('.field-error');
    
    if (!isValid) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    } else {
        field.classList.remove('error');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Show success message
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <div class="success-content">
            <h3>Thank you for your inquiry!</h3>
            <p>We'll get back to you within 24 hours with a detailed quote.</p>
        </div>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// FAQ initialization
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Utility functions

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                
                anime({
                    targets: { value: 0 },
                    value: target,
                    duration: duration,
                    easing: 'easeOutExpo',
                    update: function(anim) {
                        counter.textContent = Math.round(anim.animatables[0].target.value);
                    }
                });
                
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Update active navigation
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Show product details modal
function showProductDetails(spiceId) {
    const spice = spiceData.find(s => s.id === spiceId);
    if (!spice) return;
    
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">&times;</button>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${spice.image}" alt="${spice.name}">
                </div>
                <div class="modal-info">
                    <h2>${spice.name}</h2>
                    <p class="modal-origin">Origin: ${spice.origin}</p>
                    <p class="modal-grade">Grade: ${spice.grade}</p>
                    <p class="modal-form">Form: ${spice.form}</p>
                    <p class="modal-description">${spice.description}</p>
                    <div class="modal-price">
                        <span class="price">$${spice.price}</span>
                        <span class="unit">/kg</span>
                    </div>
                    <div class="modal-actions">
                        <div class="quantity-selector">
                            <button class="qty-btn minus" onclick="updateModalQuantity(${spice.id}, -1)">-</button>
                            <input type="number" id="modal-quantity" value="${spice.moq}" min="${spice.moq}" max="1000">
                            <button class="qty-btn plus" onclick="updateModalQuantity(${spice.id}, 1)">+</button>
                        </div>
                        <button class="btn-add-quote" onclick="addToQuoteFromModal(${spice.id})">
                            Add to Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate modal in
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        anime({
            targets: modal,
            opacity: [1, 0],
            duration: 300,
            easing: 'easeOutQuad',
            complete: () => {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
    }
}

// Update quantity in modal
function updateModalQuantity(spiceId, change) {
    const input = document.getElementById('modal-quantity');
    const spice = spiceData.find(s => s.id === spiceId);
    if (input && spice) {
        const newValue = Math.max(spice.moq, parseInt(input.value) + change);
        input.value = newValue;
    }
}

// Add to quote from modal
function addToQuoteFromModal(spiceId) {
    const quantity = parseInt(document.getElementById('modal-quantity').value);
    updateQuoteItem(spiceId, quantity);
    closeModal();
}

// Export functions for global access
window.updateQuantity = updateQuantity;
window.updateQuoteItem = updateQuoteItem;
window.showProductDetails = showProductDetails;
window.closeModal = closeModal;
window.updateModalQuantity = updateModalQuantity;
window.addToQuoteFromModal = addToQuoteFromModal;