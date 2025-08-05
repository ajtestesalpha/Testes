// MMORPG Central - JavaScript
// Projeto SIMM - MVP v1.0

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização
    initializeHeader();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeAnimations();
    initializeAdBanners();
    initializeNewsletterForm();
    initializeTooltips();
    initializeKeyboardNavigation();

    console.log('MMORPG Central - Site carregado com sucesso!');
});

// Header com scroll effect
function initializeHeader() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.style.background = 'rgba(10, 14, 26, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(10, 14, 26, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }

        // Auto-hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });
}

// Menu mobile
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    let isMenuOpen = false;

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                nav.style.display = 'flex';
                nav.style.position = 'fixed';
                nav.style.top = '70px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'rgba(10, 14, 26, 0.98)';
                nav.style.backdropFilter = 'blur(20px)';
                nav.style.flexDirection = 'column';
                nav.style.padding = '2rem';
                nav.style.borderBottom = '1px solid var(--border-color)';
                nav.style.zIndex = '999';

                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            } else {
                nav.style.display = 'none';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        // Fechar menu ao clicar em link
        nav.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link') && !e.target.classList.contains('disabled')) {
                nav.style.display = 'none';
                isMenuOpen = false;
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        // Fechar menu ao redimensionar para desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                nav.style.display = '';
                nav.style.position = '';
                nav.style.top = '';
                nav.style.left = '';
                nav.style.right = '';
                nav.style.background = '';
                nav.style.backdropFilter = '';
                nav.style.flexDirection = '';
                nav.style.padding = '';
                nav.style.borderBottom = '';
                nav.style.zIndex = '';
                isMenuOpen = false;
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
}

// Efeitos de scroll
function initializeScrollEffects() {
    // Smooth scroll para links internos
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

    // Parallax effect para hero particles
    const particles = document.querySelectorAll('.particle');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.3;
            particle.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Animações de entrada
function initializeAnimations() {
    // Intersection Observer para animações
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

    // Elementos para animar
    const animatedElements = document.querySelectorAll(`
        .mode-card,
        .game-card,
        .article-card,
        .stat-card,
        .cta-card
    `);

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Banners de anúncio
function initializeAdBanners() {
    const adCloseButtons = document.querySelectorAll('.ad-close');

    adCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const adBanner = button.closest('.ad-banner');
            if (adBanner) {
                adBanner.style.opacity = '0';
                adBanner.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    adBanner.style.display = 'none';
                }, 300);
            }
        });
    });
}

// Formulário de newsletter
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitButton = newsletterForm.querySelector('button[type="submit"]');

            if (emailInput && submitButton) {
                const email = emailInput.value.trim();

                if (validateEmail(email)) {
                    // Simular envio
                    submitButton.textContent = 'Enviando...';
                    submitButton.disabled = true;

                    setTimeout(() => {
                        submitButton.textContent = 'Inscrito!';
                        submitButton.style.background = '#10b981';
                        emailInput.value = '';

                        setTimeout(() => {
                            submitButton.textContent = 'Inscrever-se';
                            submitButton.disabled = false;
                            submitButton.style.background = '';
                        }, 2000);
                    }, 1500);
                } else {
                    showNotification('Por favor, insira um email válido.', 'error');
                }
            }
        });
    }
}

// Tooltips para elementos bloqueados
function initializeTooltips() {
    const disabledElements = document.querySelectorAll('.disabled[title]');

    disabledElements.forEach(element => {
        let tooltip = null;

        element.addEventListener('mouseenter', (e) => {
            tooltip = createTooltip(e.target.getAttribute('title'));
            document.body.appendChild(tooltip);
            positionTooltip(tooltip, e);
        });

        element.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.remove();
                tooltip = null;
            }
        });

        element.addEventListener('mousemove', (e) => {
            if (tooltip) {
                positionTooltip(tooltip, e);
            }
        });
    });
}

// Navegação por teclado
function initializeKeyboardNavigation() {
    // Melhorar navegação por tab
    const focusableElements = document.querySelectorAll(`
        a[href]:not(.disabled),
        button:not([disabled]):not(.disabled),
        input:not([disabled]),
        [tabindex]:not([tabindex="-1"]):not(.disabled)
    `);

    focusableElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                    e.preventDefault();
                    element.click();
                }
            }
        });
    });

    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
        // Esc para fechar menu mobile
        if (e.key === 'Escape') {
            const nav = document.querySelector('.nav');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

            if (nav && nav.style.display === 'flex') {
                nav.style.display = 'none';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }

        // Ctrl/Cmd + K para busca
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchBtn = document.querySelector('.btn-search');
            if (searchBtn) {
                searchBtn.focus();
                searchBtn.click();
            }
        }
    });
}

// Funções utilitárias
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function createTooltip(text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        white-space: nowrap;
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease;
    `;

    setTimeout(() => {
        tooltip.style.opacity = '1';
    }, 10);

    return tooltip;
}

function positionTooltip(tooltip, event) {
    const x = event.clientX;
    const y = event.clientY;
    const tooltipRect = tooltip.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let left = x + 10;
    let top = y - tooltipRect.height - 10;

    // Ajustar se sair da tela
    if (left + tooltipRect.width > windowWidth) {
        left = x - tooltipRect.width - 10;
    }

    if (top < 0) {
        top = y + 10;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Lazy loading para imagens
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Performance monitoring
function initializePerformanceMonitoring() {
    // Monitorar Core Web Vitals
    if ('web-vital' in window) {
        // Implementar métricas de performance se necessário
        console.log('Performance monitoring ativo');
    }
}

// Inicializar funcionalidades adicionais quando necessário
window.addEventListener('load', () => {
    initializeLazyLoading();
    initializePerformanceMonitoring();
});

// Exportar funções para uso global se necessário
window.MMORPGCentral = {
    showNotification,
    validateEmail
};
