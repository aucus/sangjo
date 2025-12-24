document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const body = document.body;
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('site-nav');
    
    // Scroll effect for header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active link handling
    const currentPath = window.location.pathname.replace(/\/$/, '');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        // 상대/절대 href 모두 현재 pathname 기준으로 비교
        const linkPath = new URL(href, window.location.href).pathname.replace(/\/$/, '');

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // Mobile nav toggle
    function closeNav() {
        body.classList.remove('nav-open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        if (navToggle) navToggle.setAttribute('aria-label', '메뉴 열기');
    }

    function openNav() {
        body.classList.add('nav-open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
        if (navToggle) navToggle.setAttribute('aria-label', '메뉴 닫기');
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = body.classList.contains('nav-open');
            if (isOpen) closeNav();
            else openNav();
        });

        // Close when selecting a link
        navMenu.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.tagName === 'A') closeNav();
        });

        // Close on ESC
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeNav();
        });

        // Close when clicking outside header
        document.addEventListener('click', (e) => {
            if (!body.classList.contains('nav-open')) return;
            const target = e.target;
            if (target instanceof Node && header && !header.contains(target)) closeNav();
        });

        // Close when switching to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeNav();
        });
    }
});
