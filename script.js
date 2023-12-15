// script.js
document.addEventListener('DOMContentLoaded', () => {
    // JavaScript to set the current year dynamically
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  });  

  // Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      if (link.hash !== '') {
        event.preventDefault();
        const hash = link.hash;
        const target = document.querySelector(hash);
        const targetOffsetTop = target.offsetTop;
        const scrollOptions = {
          top: targetOffsetTop - 100,
          behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
      }
    });
  });
});

// Smooth scroll to top
// Smooth scroll to top
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    scrollToTop();
  });
  
  function scrollToTop() {
    const startPosition = window.scrollY;
    const targetPosition = 0;
    const startTime = performance.now();
    const duration = 500; // Adjust the animation duration as needed
  
    function animateScroll(currentTime) {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const easeProgress = easeOutCubic(progress);
        const newPosition = startPosition - (startPosition * easeProgress);
        window.scrollTo(0, newPosition);
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, targetPosition);
      }
    }
  
    function easeOutCubic(t) {
      return (t -= 1) * t * t + 1;
    }
  
    requestAnimationFrame(animateScroll);
  }
});
