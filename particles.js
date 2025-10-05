// ===================================
// PIXEL PARTICLES ANIMATION
// ===================================

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initParticles);
    } else {
        initParticles();
    }
    
    function initParticles() {
        const canvas = document.getElementById('pixelCanvas');
        
        if (!canvas) {
            console.warn('Pixel canvas element not found');
            return;
        }
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        
        // Particle configuration
        const config = {
            particleCount: 50,
            colors: ['#FF9B8A', '#4A7C7E'],
            minSize: 1,
            maxSize: 4,
            minSpeed: 0.1,
            maxSpeed: 0.5
        };
        
        // Particle class
        class Particle {
            constructor() {
                this.reset();
                // Start at random position
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
            }
            
            reset() {
                this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
                this.speedX = (Math.random() - 0.5) * (config.maxSpeed - config.minSpeed) + config.minSpeed;
                this.speedY = (Math.random() - 0.5) * (config.maxSpeed - config.minSpeed) + config.minSpeed;
                this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
                this.opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1.0
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Wrap around edges
                if (this.x > canvas.width) {
                    this.x = 0;
                } else if (this.x < 0) {
                    this.x = canvas.width;
                }
                
                if (this.y > canvas.height) {
                    this.y = 0;
                } else if (this.y < 0) {
                    this.y = canvas.height;
                }
            }
            
            draw() {
                ctx.save();
                
                // Set shadow for glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                
                // Set fill style with opacity
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                
                // Draw square particle (pixel style)
                ctx.fillRect(
                    Math.floor(this.x),
                    Math.floor(this.y),
                    Math.ceil(this.size),
                    Math.ceil(this.size)
                );
                
                ctx.restore();
            }
        }
        
        // Create particles array
        const particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        let animationFrameId;
        
        function animate() {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Continue animation
            animationFrameId = requestAnimationFrame(animate);
        }
        
        // Start animation
        animate();
        
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                resizeCanvas();
                
                // Reposition particles that are now off-screen
                particles.forEach(particle => {
                    if (particle.x > canvas.width) particle.x = canvas.width;
                    if (particle.y > canvas.height) particle.y = canvas.height;
                });
            }, 250);
        });
        
        // Pause animation when page is not visible (performance optimization)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
            } else {
                animate();
            }
        });
        
        // Optional: Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let isMouseMoving = false;
        let mouseTimeout;
        
        canvas.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isMouseMoving = true;
            
            clearTimeout(mouseTimeout);
            mouseTimeout = setTimeout(() => {
                isMouseMoving = false;
            }, 100);
            
            // Optional: Add particles near mouse
            if (Math.random() > 0.95) {
                const particle = new Particle();
                particle.x = mouseX + (Math.random() - 0.5) * 50;
                particle.y = mouseY + (Math.random() - 0.5) * 50;
                particles.push(particle);
                
                // Remove oldest particle to maintain count
                if (particles.length > config.particleCount * 1.5) {
                    particles.shift();
                }
            }
        });
        
        // Optional: Touch interaction for mobile
        canvas.addEventListener('touchmove', function(e) {
            if (e.touches.length > 0) {
                mouseX = e.touches[0].clientX;
                mouseY = e.touches[0].clientY;
                
                // Add particles on touch
                if (Math.random() > 0.9) {
                    const particle = new Particle();
                    particle.x = mouseX + (Math.random() - 0.5) * 50;
                    particle.y = mouseY + (Math.random() - 0.5) * 50;
                    particles.push(particle);
                    
                    if (particles.length > config.particleCount * 1.5) {
                        particles.shift();
                    }
                }
            }
        }, { passive: true });
        
        console.log('✨ Pixel particles initialized');
    }
    
})();
