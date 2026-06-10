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
        'Ring of Spiritual Power': 'assets/services/bangles-rings-crystals-1.jpeg',
        'Elephant Materials': 'assets/services/Elephant Materials.jpeg',
        'Monkey Bones': 'assets/services/monkey bones.jpeg',
        'Bats': 'assets/services/bats.jpeg',
        'Black Cat': 'assets/services/Black Cat.jpeg',
        'Bird Skulls': 'assets/services/bird skulls.jpeg',
        'Scorpions': 'assets/services/Scorpions.jpeg',
        'Turtles': 'assets/services/Turtles.jpeg'
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

    // ==================== SERVICE SEARCH ====================

    const serviceSearch = document.getElementById('serviceSearch');
    const serviceSearchClear = document.getElementById('serviceSearchClear');
    const serviceSearchCount = document.getElementById('serviceSearchCount');
    const serviceSearchResults = document.getElementById('serviceSearchResults');
    const serviceItems = document.querySelectorAll('.service-item');

    if (serviceSearch && serviceItems.length > 0) {
        serviceItems.forEach((item, index) => {
            const title = item.querySelector('h4')?.textContent || '';
            const description = item.querySelector('p')?.textContent || '';
            const price = item.querySelector('.current-price')?.textContent || '';
            const image = item.querySelector('.service-image')?.getAttribute('src') || serviceImages[title] || 'PHOTO-2026-04-24-17-01-25.jpg';
            item.dataset.serviceIndex = String(index);
            item.dataset.title = title;
            item.dataset.description = description;
            item.dataset.price = price;
            item.dataset.image = image;
            item.dataset.searchText = `${title} ${description}`.toLowerCase();
        });

        serviceSearch.addEventListener('input', filterServices);
        serviceSearch.addEventListener('focus', filterServices);

        if (serviceSearchClear) {
            serviceSearchClear.addEventListener('click', function() {
                serviceSearch.value = '';
                serviceSearch.focus();
                filterServices();
            });
        }

        if (serviceSearchResults) {
            serviceSearchResults.addEventListener('click', function(e) {
                const result = e.target.closest('.service-search-result');
                if (!result) {
                    return;
                }

                const serviceItem = document.querySelector(`.service-item[data-service-index="${result.dataset.serviceIndex}"]`);
                if (!serviceItem) {
                    return;
                }

                closeServiceSearchResults();
                serviceItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                serviceItem.classList.add('search-highlight');
                setTimeout(() => serviceItem.classList.remove('search-highlight'), 1400);
            });
        }

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.service-search')) {
                closeServiceSearchResults();
            }
        });
    }

    function filterServices() {
        const query = serviceSearch.value.trim().toLowerCase();
        const matches = query ? Array.from(serviceItems).filter(item => item.dataset.searchText.includes(query)) : [];

        if (serviceSearchClear) {
            serviceSearchClear.classList.toggle('visible', query.length > 0);
        }

        if (serviceSearchCount) {
            if (!query) {
                serviceSearchCount.textContent = '';
            } else if (matches.length === 0) {
                serviceSearchCount.textContent = 'No services found';
            } else {
                serviceSearchCount.textContent = `${matches.length} service${matches.length === 1 ? '' : 's'} found`;
            }
        }

        renderServiceSearchResults(matches, query);
    }

    function renderServiceSearchResults(matches, query) {
        if (!serviceSearchResults) {
            return;
        }

        serviceSearchResults.innerHTML = '';
        serviceSearchResults.classList.toggle('active', query.length > 0);

        if (!query) {
            return;
        }

        if (matches.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'service-search-empty';
            empty.textContent = 'No matching services found';
            serviceSearchResults.appendChild(empty);
            return;
        }

        matches.forEach(item => {
            const result = document.createElement('button');
            result.type = 'button';
            result.className = 'service-search-result';
            result.dataset.serviceIndex = item.dataset.serviceIndex;

            const image = document.createElement('img');
            image.src = item.dataset.image;
            image.alt = item.dataset.title;
            image.loading = 'lazy';

            const content = document.createElement('span');
            content.className = 'service-search-result-content';

            const title = document.createElement('strong');
            title.textContent = item.dataset.title;

            const description = document.createElement('span');
            description.textContent = item.dataset.description;

            const price = document.createElement('b');
            price.textContent = item.dataset.price;

            content.append(title, description);
            result.append(image, content, price);
            serviceSearchResults.appendChild(result);
        });
    }

    function closeServiceSearchResults() {
        if (serviceSearchResults) {
            serviceSearchResults.classList.remove('active');
        }
    }

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
    const payNowBtn = document.getElementById('payNowBtn');
    const clearCart = document.getElementById('clearCart');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const paymentModal = document.getElementById('paymentModal');
    const paymentClose = document.getElementById('paymentClose');
    const paymentBack = document.getElementById('paymentBack');
    const paymentMethodsView = document.getElementById('paymentMethodsView');
    const paymentDetailsView = document.getElementById('paymentDetailsView');
    const selectedPaymentMethod = document.getElementById('selectedPaymentMethod');
    const selectedPaymentLogo = document.getElementById('selectedPaymentLogo');
    const paymentTotal = document.getElementById('paymentTotal');
    const paymentReceiptLink = document.querySelector('.payment-receipt-link');
    const paymentMethodBtns = document.querySelectorAll('.payment-method-pay');
    const whatsappPhone = '256767598926';
    
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

    if (requestBtn) {
        requestBtn.addEventListener('click', function(e) {
            e.preventDefault();

            if (cart.length === 0) {
                cartModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                return;
            }

            const whatsappUrl = buildWhatsAppUrl();
            requestBtn.href = whatsappUrl;

            const openedWindow = window.open(whatsappUrl, '_blank', 'noopener');
            if (!openedWindow) {
                window.location.href = whatsappUrl;
            }
        });
    }

    if (payNowBtn) {
        payNowBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                cartModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                return;
            }

            openPaymentModal();
        });
    }

    if (paymentClose) {
        paymentClose.addEventListener('click', closePaymentModal);
    }

    if (paymentBack) {
        paymentBack.addEventListener('click', showPaymentMethods);
    }

    if (paymentModal) {
        paymentModal.addEventListener('click', function(e) {
            if (e.target === paymentModal) {
                closePaymentModal();
            }
        });
    }

    paymentMethodBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showPaymentDetails(this.dataset.method, this.dataset.logo);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && paymentModal && paymentModal.classList.contains('active')) {
            closePaymentModal();
        }
    });

    function openPaymentModal() {
        if (!paymentModal || !paymentMethodsView || !paymentDetailsView) {
            return;
        }

        showPaymentMethods();
        paymentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePaymentModal() {
        if (!paymentModal) {
            return;
        }

        paymentModal.classList.remove('active');
        document.body.style.overflow = cartModal && cartModal.classList.contains('active') ? 'hidden' : '';
    }

    function showPaymentMethods() {
        if (!paymentMethodsView || !paymentDetailsView) {
            return;
        }

        paymentMethodsView.classList.add('active');
        paymentDetailsView.classList.remove('active');
    }

    function showPaymentDetails(method, logo) {
        if (!selectedPaymentMethod || !selectedPaymentLogo || !paymentMethodsView || !paymentDetailsView) {
            return;
        }

        selectedPaymentMethod.textContent = method;
        selectedPaymentLogo.src = logo;
        selectedPaymentLogo.alt = method;
        updatePaymentDetails();
        paymentMethodsView.classList.remove('active');
        paymentDetailsView.classList.add('active');
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
        updatePaymentDetails();
        
        // Update WhatsApp link
        updateWhatsAppLink();
    }
    
    // Global function for remove button
    window.removeCartItem = function(index) {
        removeFromCart(index);
    };
    
    function buildWhatsAppMessage() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        let message = 'Hello Africa Healing Network,\n\nI am interested in the following services:\n\n';

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - $${item.price}\n`;
        });

        message += `\nTotal: $${total}\n\nPlease contact me to proceed.`;
        return message;
    }

    function buildReceiptWhatsAppMessage() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        let message = 'Hello Africa Healing Network,\n\nI have made payment for the following services:\n\n';

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - $${item.price}\n`;
        });

        message += `\nTotal Paid: $${total}\n\nI will send the proof of payment / receipt here.`;
        return message;
    }

    function buildWhatsAppUrl() {
        return `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(buildWhatsAppMessage())}`;
    }

    function buildReceiptWhatsAppUrl() {
        return `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(buildReceiptWhatsAppMessage())}`;
    }

    function updatePaymentDetails() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);

        if (paymentTotal) {
            paymentTotal.textContent = '$' + total;
        }

        if (paymentReceiptLink) {
            paymentReceiptLink.href = cart.length === 0 ? `https://api.whatsapp.com/send?phone=${whatsappPhone}` : buildReceiptWhatsAppUrl();
        }
    }

    // Update WhatsApp Request Link
    function updateWhatsAppLink() {
        if (!requestBtn) {
            return;
        }

        if (cart.length === 0) {
            requestBtn.href = '#';
            requestBtn.style.opacity = '0.5';
        } else {
            requestBtn.href = buildWhatsAppUrl();
            requestBtn.style.opacity = '1';
        }
    }
    
    // Initialize cart
    updateCart();
});
