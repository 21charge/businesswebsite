// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Animate each line as it scrolls into view
gsap.utils.toArray('.fade-in-line').forEach((line, index) => {
    gsap.to(line, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: line,
            start: "top 80%", // Trigger when 80% of the viewport height is reached
            toggleActions: "play none none none", // Play the animation once
            markers: false // Disable markers for clean display
        },
    });
});


// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Animate each line as it scrolls into view (bubbles & heading)
gsap.utils.toArray('.fade-in-line').forEach((line, index) => {
    gsap.to(line, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: index * 0.2, // Stagger effect
        ease: 'power2.out',
        scrollTrigger: {
            trigger: line,
            start: "top 85%", // Trigger when 85% visible
            toggleClass: 'visible',
        },
    });
});

// Detect when bubbles are in view and fade them in
document.addEventListener('scroll', function () {
  const bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(bubble => {
      const rect = bubble.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
          bubble.classList.add('visible');
      }
  });
});


// GSAP ScrollTrigger for Sticky Effect
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#services-section",
    start: "top top",
    end: "+=100%",
    pin: true, // Pins the section
    scrub: true, // Smoothly scrolls through the pinned section
});
