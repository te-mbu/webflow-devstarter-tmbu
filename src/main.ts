declare const Webflow: {
  push: (callback: () => void) => void;
};

import { initFadeAnimations } from './components/scrollReveal';

// Wrap all code in Webflow.push() for compatibility
Webflow.push(() => {
  // Demo log
  console.log('Hello Webflow!');

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
});
