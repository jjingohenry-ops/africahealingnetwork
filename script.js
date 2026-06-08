// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const serviceImages = {
        'Marriage Spell': 'assets/services/marriage-spell.jpg',
        'Lost Lover Return Kits': 'assets/services/lost-lover-return-kit.jpg',
        'Attraction Spell': 'assets/services/attraction-spell.jpg',
        'Marital Bliss Enhancers': 'assets/services/marital-bliss-enhancers.jpg',
        'Peace in Marriage Rituals': 'assets/services/peace-in-marriage-rituals.jpg',
        'Cheating Partner Materials': 'assets/services/cheating-partner-materials.jpg',
        'Third Party Removal Spell': 'assets/services/third-party-removal-spell.jpg',
        'Bind Us Forever Spell Kit': 'assets/services/bind-us-forever-spell-kit.jpg',
        'Money Spell': 'assets/services/money-spell.jpg',
        'Money Bag': 'assets/services/money-bag.jpg',
        'Money & Wealth Flow Bungle': 'assets/services/money-wealth-flow-bundle.jpeg',
        'Lotto Winning Charms': 'assets/services/lotto-winning-charms.jpg',
        'Success Spell': 'assets/services/success-spell.jpg',
        'Job Spell': 'assets/services/job-spell.jpg',
        'Powerful Treasure Boxes': 'assets/services/powerful-treasure-boxes.jpeg',
        'Spirit of Forced Payment Kit': 'assets/services/spirit-of-forced-payment-kit.jpg',
        'Protection Spell': 'assets/services/protection-spell.jpg',
        'Protection and Peace Bungle': 'assets/services/protection-and-peace-bundle.jpg',
        'Cleansing Spell': 'assets/services/cleansing-spell.jpg',
        'Family Cleansing (Family)': 'assets/services/family-cleansing-family.jpg',
        'Break Generational Curse Bangle': 'assets/services/break-generational-curse-bangle.jpg',
        'Enemy Exposure Bungle': 'assets/services/enemy-exposure-bundle.jpg',
        'Binding Spell': 'assets/services/binding-spell.jpeg',
        'Spiritual Bulletproof Spell': 'assets/services/spiritual-bulletproof-spell.jpg',
        'Court Case Spells': 'assets/services/court-case-spells.jpg',
        'Courtcase & Justice Bungle': 'assets/services/courtcase-justice-bundle.jpg',
        'Fast Case Resolution Spell': 'assets/services/fast-case-resolution-spell.jpg',
        'Barreness Solutions': 'assets/services/barreness-solutions.jpg',
        'Womb Blessing Bangle': 'assets/services/womb-blessing-spell.jpg',
        'Manhood Enhancement Materials': 'assets/services/manhood-enhancement-materials.jpg',
        'Manhood Essence': 'assets/services/manhood-essence.jpg',
        'Impotency Essence': 'assets/services/impotency-essence.jpg',
        'Ring of Protection': 'assets/services/bangles-rings-crystals-1.jpeg',
        'Ring of Wisdom': 'assets/services/bangles-rings-crystals-2.jpeg',
        'Ring of Wealth': 'assets/services/bangles-rings-crystals-1.jpeg',
        'Ring of Courage': 'assets/services/bangles-rings-crystals-2.jpeg',
        'Ring of Love': 'assets/services/bangles-rings-crystals-1.jpeg',
        'Ring of Success': 'assets/services/bangles-rings-crystals-2.jpeg',
        'Ring of Spiritual Power': 'assets/services/bangles-rings-crystals-1.jpeg'
    };

    document.querySelectorAll('.service-item').forEach(serviceItem => {
        const title = serviceItem.querySelector('h4');
        if (!title || !serviceImages[title.textContent]) {
            return;
        }

        const image = document.createElement('img');
        image.className = 'service-image';
        image.src = serviceImages[title.textContent];
        image.alt = title.textContent;
        image.loading = 'lazy';
        image.decoding = 'async';
        serviceItem.prepend(image);
    });

    if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mainNav.classList.toggle('active');
            this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // Hero Slider Dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') {
                return;
            }

            const target = document.querySelector(targetId);
            if (target) {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Animate elements on scroll
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

    // Observe feature boxes, category cards, and testimonial cards
    const animatedElements = document.querySelectorAll('.feature-box, .category-card, .testimonial-card, .calendar-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // ==================== CART FUNCTIONALITY ====================
    
    // Cart State
    let cart = [];
    
    // DOM Elements
    const cartModal = document.getElementById('cartModal');
    const cartToggle = document.getElementById('cartToggle');
    const cartClose = document.getElementById('cartClose');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    const requestBtn = document.getElementById('requestBtn');
    const clearCart = document.getElementById('clearCart');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    // Open Cart
    if (cartToggle) {
        cartToggle.addEventListener('click', function() {
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close Cart
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    // Close cart when clicking outside
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                closeCart();
            }
        });
    }
    
    function closeCart() {
        cartModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Add to Cart
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceItem = this.closest('.service-item');
            const serviceName = serviceItem.querySelector('h4').textContent;
            const priceText = serviceItem.querySelector('.current-price').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            
            // Check if item already in cart
            const existingItem = cart.find(item => item.name === serviceName);
            
            if (existingItem) {
                // Item already in cart - show feedback
                showAddedFeedback(this, 'Already in Cart!');
            } else {
                // Add to cart
                cart.push({
                    name: serviceName,
                    price: price
                });
                
                updateCart();
                showAddedFeedback(this, 'Added to Cart!');
            }
        });
    });
    
    function showAddedFeedback(btn, message) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> ' + message;
        btn.classList.add('added');
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('added');
        }, 1500);
    }
    
    // Remove from Cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }
    
    // Clear Cart
    if (clearCart) {
        clearCart.addEventListener('click', function() {
            cart = [];
            updateCart();
        });
    }
    
    // Update Cart Display
    function updateCart() {
        // Update count
        cartCount.textContent = cart.length;
        
        // Update items display
        if (cart.length === 0) {
            cartItems.classList.remove('has-items');
            cartEmpty.style.display = 'block';
        } else {
            cartItems.classList.add('has-items');
            cartEmpty.style.display = 'none';
            
            // Render cart items
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">$${item.price}</div>
                    </div>
                    <button class="cart-item-remove" onclick="window.removeCartItem(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');
        }
        
        // Update total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = '$' + total;
        
        // Update WhatsApp link
        updateWhatsAppLink();
    }
    
    // Global function for remove button
    window.removeCartItem = function(index) {
        removeFromCart(index);
    };
    
    // Update WhatsApp Request Link
    function updateWhatsAppLink() {
        if (cart.length === 0) {
            requestBtn.href = '#';
            requestBtn.style.opacity = '0.5';
            requestBtn.style.pointerEvents = 'none';
        } else {
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            let message = 'Hello Africa Healing Network,\n\nI am interested in the following services:\n\n';
            
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} - $${item.price}\n`;
            });
            
            message += `\nTotal: $${total}\n\nPlease contact me to proceed.`;
            
            const encodedMessage = encodeURIComponent(message);
            requestBtn.href = `https://wa.me/256767598926?text=${encodedMessage}`;
            requestBtn.style.opacity = '1';
            requestBtn.style.pointerEvents = 'auto';
        }
    }
    
    // Initialize cart
    updateCart();
});
