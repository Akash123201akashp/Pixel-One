// ===================================
// PIXEL ONE - MAIN JAVASCRIPT
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // NAVIGATION SCROLL EFFECT
    // ===================================
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    
    // ===================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ===================================
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    
    // ===================================
    // PRODUCT CAROUSEL
    // ===================================
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselDots = document.querySelectorAll('.carousel-dots .dot');
    
    let currentSlide = 0;
    const totalSlides = 4;
    
    function updateCarousel() {
        const offset = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        carouselDots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    // Event listeners for carousel
    if (carouselNext) {
        carouselNext.addEventListener('click', nextSlide);
    }
    
    if (carouselPrev) {
        carouselPrev.addEventListener('click', prevSlide);
    }
    
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Auto-play carousel (optional)
    let autoPlayInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-play on hover
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        carouselWrapper.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    }
    
    
    // ===================================
    // COLOR SELECTION
    // ===================================
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
        });
    });
    
    
    // ===================================
    // ORDER NOW BUTTONS
    // ===================================
    const heroOrderBtn = document.getElementById('heroOrderBtn');
    const navOrderBtn = document.getElementById('navOrderBtn');
    const orderNowBtn = document.getElementById('orderNowBtn');
    
    function scrollToBuySection() {
        const buySection = document.getElementById('buy');
        if (buySection) {
            buySection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    if (heroOrderBtn) {
        heroOrderBtn.addEventListener('click', scrollToBuySection);
    }
    
    if (navOrderBtn) {
        navOrderBtn.addEventListener('click', scrollToBuySection);
    }
    
    if (orderNowBtn) {
        orderNowBtn.addEventListener('click', function() {
            // Get selected color
            const selectedColor = document.querySelector('.color-option.active');
            const colorName = selectedColor ? selectedColor.querySelector('.color-name').textContent : 'Neon';
            
            // Create WhatsApp message
            const message = `*New PixelOne Order* 🎮\n\n` +
                `*Product Details:*\n` +
                `Color: ${colorName}\n` +
                `Price: ₹3,756\n\n` +
                `*Total Amount: ₹3,756*\n` +
                `(Free Shipping India Wide)\n\n` +
                `I would like to place an order for the PixelOne console.`;
            
            // WhatsApp number
            const phoneNumber = '917975653922';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    }
    
    
    // ===================================
    // SCROLL TO TOP BUTTON
    // ===================================
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.pointerEvents = 'none';
            }
        });
        
        // Initially hide the button
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.pointerEvents = 'none';
        scrollToTopBtn.style.transition = 'opacity 0.3s ease';
    }
    
    
    // ===================================
    // FOOTER LINKS SMOOTH SCROLL
    // ===================================
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    
    // ===================================
    // SET CURRENT YEAR IN FOOTER
    // ===================================
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    
    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .product-console');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    
    // ===================================
    // PRODUCT SHOWCASE BUTTON HANDLERS
    // ===================================
    const productButtons = document.querySelectorAll('.product-btn');
    
    productButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the product name from the parent slide
            const slide = this.closest('.carousel-slide');
            const productName = slide.querySelector('.product-name').textContent;
            
            // Scroll to buy section
            const buySection = document.getElementById('buy');
            if (buySection) {
                buySection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Optionally, you could also select the corresponding color
                // This would require matching the product name to the color option
            }
        });
    });
    
    
    // ===================================
    // KEYBOARD NAVIGATION FOR CAROUSEL
    // ===================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    
    // ===================================
    // TOUCH SWIPE FOR CAROUSEL (Mobile)
    // ===================================
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carouselTrack) {
        carouselTrack.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carouselTrack.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    }
    
    
    // ===================================
    // LOADING ANIMATION (Optional)
    // ===================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Add a subtle entrance animation to the hero section
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.style.opacity = '0';
            heroSection.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                heroSection.style.opacity = '1';
                heroSection.style.transform = 'translateY(0)';
            }, 100);
        }
    });
    
    
    // ===================================
    // CONSOLE LOG (Development)
    // ===================================
    console.log('%c🎮 PixelOne Website Loaded Successfully! 🎮', 'color: #FF9B8A; font-size: 16px; font-weight: bold;');
    console.log('%cPlay the Past. Power the Present.', 'color: #4A7C7E; font-size: 12px;');
    
});


// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll handler with throttle
window.addEventListener('scroll', throttle(function() {
    // Any additional scroll-based animations can go here
}, 100));
