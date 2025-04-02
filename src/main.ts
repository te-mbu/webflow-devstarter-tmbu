import { initFadeAnimations } from './components/scrollReveal';

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Default fade-in animation
  // initFadeAnimations();

  // Example: Custom animation for specific elements
  initFadeAnimations('.fade-in', {
    startY: 50,
    duration: 1.2,
    ease: 'power3.out',
  });
}); 