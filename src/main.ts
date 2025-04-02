import type { Webflow as WebflowType } from '@finsweet/ts-utils';

import { initFadeAnimations } from './components/scrollReveal';

if (!window.Webflow) {
  const callbacks: Array<() => void> = [];
  const originalPush = callbacks.push.bind(callbacks);
  
  callbacks.push = (callback: () => void) => {
    callback();
    return originalPush(callback);
  };
  
  window.Webflow = callbacks;
}

export const Webflow = window.Webflow as WebflowType;

document.addEventListener('DOMContentLoaded', () => {
  if (window.Webflow) {
    window.Webflow.push(() => {
      initFadeAnimations('.fade-in', {
        startY: 50,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }
});
