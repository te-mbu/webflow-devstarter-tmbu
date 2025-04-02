import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Animation configuration type
 */
interface AnimationConfig {
  /** Initial Y position offset */
  startY?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** GSAP easing function */
  ease?: string;
  /** ScrollTrigger configuration */
  scrollTrigger?: {
    /** When to start the animation relative to the viewport */
    start?: string;
    /** When to end the animation */
    end?: string;
    /** ScrollTrigger actions [onEnter, onLeave, onEnterBack, onLeaveBack] */
    toggleActions?: string;
  };
}

/**
 * Default animation configuration
 */
const DEFAULT_CONFIG: AnimationConfig = {
  startY: 30,
  duration: 1,
  ease: 'power4.out',
  scrollTrigger: {
    start: 'top bottom-=100px',
    end: 'bottom top',
    toggleActions: 'play none none reverse',
  },
};

/**
 * Creates a GSAP timeline for an element
 */
const createElementAnimation = (
  element: HTMLElement, 
  config: AnimationConfig = {}
): gsap.core.Timeline => {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  const tl = gsap.timeline({ paused: true });

  // Set initial state
  tl.set(element, {
    opacity: 0,
    y: mergedConfig.startY,
  });

  // Add animation
  tl.to(element, {
    opacity: 1,
    y: 0,
    duration: mergedConfig.duration,
    ease: mergedConfig.ease,
  });

  return tl;
};

/**
 * Initialize fade animations for elements
 * @param selector - CSS selector for target elements
 * @param config - Optional animation configuration
 */
export const initFadeAnimations = (
  selector: string = '.fade-in',
  config: AnimationConfig = {}
): void => {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  
  elements.forEach((element) => {
    const timeline = createElementAnimation(element, config);
    
    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: element,
      start: config.scrollTrigger?.start ?? DEFAULT_CONFIG.scrollTrigger!.start,
      end: config.scrollTrigger?.end ?? DEFAULT_CONFIG.scrollTrigger!.end,
      toggleActions: config.scrollTrigger?.toggleActions ?? DEFAULT_CONFIG.scrollTrigger!.toggleActions,
      animation: timeline,
    });
  });
}; 