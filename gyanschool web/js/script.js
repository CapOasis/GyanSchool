// Basic interactvity

document.addEventListener('DOMContentLoaded', () => {
    // Improved Header scroll effect for Educavo style
    const header = document.getElementById('header');

    // Smoother sticky effect detector
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky-header', window.scrollY > 10);
    }, { passive: true });

    // Mobile menu toggle (simple version)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Optional: stop observing once revealed
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            // Close all open items
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                openItem.classList.remove('open');
                openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Toggle clicked item
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Reusable Slider Function (Auto-slide disabled)
    const initSlider = (sliderId, prevBtnId, nextBtnId, dotContainerId, cardClass) => {
        const slider = document.getElementById(sliderId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        const dotContainer = document.getElementById(dotContainerId);
        const cards = slider ? slider.querySelectorAll(`.${cardClass}`) : [];

        if (slider && cards.length > 0) {
            const getCardWidth = () => cards[0].offsetWidth + 32; // card + gap

            const updateSlider = () => {
                const cardWidth = getCardWidth();
                const visibleCards = Math.round(slider.offsetWidth / cardWidth) || 1;
                const totalPages = Math.ceil(cards.length / visibleCards);

                if (dotContainer) {
                    dotContainer.innerHTML = '';
                    for (let i = 0; i < totalPages; i++) {
                        const dot = document.createElement('div');
                        dot.classList.add('dot');
                        if (i === 0) dot.classList.add('active');
                        dot.addEventListener('click', () => {
                            slider.scrollTo({
                                left: i * visibleCards * cardWidth,
                                behavior: 'smooth'
                            });
                        });
                        dotContainer.appendChild(dot);
                    }
                }
            };

            updateSlider();

            slider.addEventListener('scroll', () => {
                const cardWidth = getCardWidth();
                const visibleCards = Math.round(slider.offsetWidth / cardWidth) || 1;
                const activePage = Math.round(slider.scrollLeft / (visibleCards * cardWidth));

                if (dotContainer) {
                    const dots = dotContainer.querySelectorAll('.dot');
                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === activePage);
                    });
                }
            }, { passive: true });

            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    const cardWidth = getCardWidth();
                    if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth - 10) {
                        slider.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
                    }
                });
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    const cardWidth = getCardWidth();
                    if (slider.scrollLeft <= 10) {
                        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
                    } else {
                        slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                    }
                });
            }

            window.addEventListener('resize', updateSlider);
        }
    };

    // Initialize Sliders
    initSlider('testimonial-slider', 'prev-test', 'next-test', 'slider-dots', 'testimonial-card');
    initSlider('trainer-slider', 'prev-trainer', 'next-trainer', 'trainer-dots', 'trainer-card');

    // ScrollSpy: Update active nav-links as you scroll
    const sections = document.querySelectorAll('main > section[id]');
    const navItems = document.querySelectorAll('.nav-links a:not(.btn)');

    const scrollSpyOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -40% 0px" // Trigger when section is in top half
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, scrollSpyOptions);

    sections.forEach(sec => scrollSpyObserver.observe(sec));

    // Special case for top of page (Home)
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            navItems.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#hero');
            });
        }
    }, { passive: true });

    // AI Orbital Rotation logic removed as per request.

});




