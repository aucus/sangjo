document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
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
});
