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


// Initialize EmailJS with your public API key
emailjs.init("HFrTW31on5VXmTsEX");

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const rating = document.getElementById('rating').value || 'No rating provided';

    const emailParams = {
        name: name,
        email: email,
        message: message,
        rating: rating
    };

    emailjs.send('service_1obxdwm', 'template_4clgfc6', emailParams)
        .then(function(response) {
            alert("Thank you for your submission!");
        }, function(error) {
            alert("There was an issue, please try again.");
            console.log(error);
        });
});




let currentIndex = 0;

function rotateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + 1) % totalItems;

    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

setInterval(rotateCarousel, 3000);
