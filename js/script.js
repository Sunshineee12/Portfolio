document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // 1. Custom Cursor Logic
    const cursor = document.querySelector('.custom-cursor');
    const hoverTargets = document.querySelectorAll('a, button, .project-column, .hero-avatar');

    if (window.innerWidth >= 768 && cursor) {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        });

        // Add hover effects
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                cursor.classList.add('hover-active');
            });
            target.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover-active');
            });
        });
    }

    // 2. Hero Scattered Text Animation
    const scatterLetters = document.querySelectorAll('.scatter-letter');
    
    // Initial animation for letters "falling" into their scattered positions
    gsap.from(scatterLetters, {
        y: -100,
        opacity: 0,
        rotation: () => gsap.utils.random(-45, 45),
        duration: 1.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.2
    });

    // 3. Avatar Animation
    const avatar = document.querySelector('.hero-avatar-container');
    if (avatar) {
        gsap.from(avatar, {
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 1
        });
    }

    // 4. Project Columns Staggered Reveal
    const projectColumns = document.querySelectorAll('.project-column');
    
    if (projectColumns.length > 0) {
        gsap.from(projectColumns, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".project-columns-container",
                start: "top 80%", // Trigger when top of container is 80% down the viewport
                toggleActions: "play none none reverse"
            }
        });
    }

    // 5. Parallax effect for the ID Badge
    const idBadge = document.querySelector('.id-badge-wrapper');
    if (idBadge && window.innerWidth >= 1024) {
        gsap.to(idBadge, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: idBadge,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }

});
