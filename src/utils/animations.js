import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Hero Section Animations
export const heroAnimations = () => {
  const tl = gsap.timeline();
  
  // Stagger the hero elements in
  tl.from('.hero-title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    skewY: 7
  })
  .from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.8')
  .from('.hero-cta', {
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    ease: 'back.out(1.7)'
  }, '-=0.4')
  .from('.hero-image', {
    duration: 1.2,
    x: 100,
    opacity: 0,
    ease: 'power3.out',
    rotation: 5
  }, '-=1.2');
};

// Text reveal animation
export const textReveal = (element, delay = 0) => {
  gsap.from(element, {
    duration: 1.2,
    y: 60,
    opacity: 0,
    ease: 'power3.out',
    delay: delay,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Stagger children animation
export const staggerChildren = (parent, children, delay = 0.1) => {
  gsap.from(children, {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    stagger: delay,
    scrollTrigger: {
      trigger: parent,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Floating animation for cards
export const floatingCards = () => {
  gsap.to('.floating-card', {
    y: -20,
    duration: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.2
  });
};

// Parallax effect
export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};

// Morphing background shapes
export const morphingShapes = () => {
  const shapes = document.querySelectorAll('.morph-shape');
  if (shapes.length === 0) return;
  
  gsap.to(shapes, {
    duration: 3,
    morphSVG: 'M0,0 C100,0 100,100 0,100 Z',
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.5
  });
};

// Counter animation
export const animateCounter = (element, target, duration = 2) => {
  gsap.to(element, {
    duration: duration,
    innerHTML: target,
    ease: 'power2.out',
    snap: { innerHTML: 1 },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Magnetic effect for buttons
export const magneticEffect = (element) => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      duration: 0.3,
      x: x * 0.3,
      y: y * 0.3,
      ease: 'power2.out'
    });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      duration: 0.3,
      x: 0,
      y: 0,
      ease: 'power2.out'
    });
  });
};

// Glitch text effect
export const glitchText = (element) => {
  const text = element.textContent;
  element.innerHTML = `
    <span class="glitch-base">${text}</span>
    <span class="glitch-layer-1">${text}</span>
    <span class="glitch-layer-2">${text}</span>
  `;
  
  gsap.to('.glitch-layer-1', {
    duration: 0.1,
    x: 2,
    y: -2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.1
  });
  
  gsap.to('.glitch-layer-2', {
    duration: 0.1,
    x: -2,
    y: 2,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1,
    stagger: 0.15
  });
};

// Particle system animation
export const particleSystem = (container) => {
  const particles = [];
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: #3B82F6;
      border-radius: 50%;
      pointer-events: none;
    `;
    container.appendChild(particle);
    particles.push(particle);
  }
  
  particles.forEach((particle, index) => {
    gsap.set(particle, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.5 + 0.5
    });
    
    gsap.to(particle, {
      duration: Math.random() * 3 + 2,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: 0,
      ease: 'power2.out',
      repeat: -1,
      delay: index * 0.1
    });
  });
};

// Smooth scroll reveal
export const smoothReveal = (elements) => {
  gsap.from(elements, {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Initialize all animations
export const initAnimations = () => {
  // Hero animations
  heroAnimations();
  
  // Add floating class to cards
  document.querySelectorAll('.feature-card, .service-card').forEach(card => {
    card.classList.add('floating-card');
  });
  
  // Start floating animation
  floatingCards();
  
  // Add magnetic effect to CTA buttons
  document.querySelectorAll('.cta-button, .book-call-btn').forEach(btn => {
    magneticEffect(btn);
  });
  
  // Initialize particle system
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    particleSystem(heroSection);
  }
  
  // Add morphing shapes to background
  const backgroundShapes = document.querySelectorAll('.background-shape');
  if (backgroundShapes.length > 0) {
    morphingShapes();
  }
  
  // Smooth reveal for sections
  const sections = document.querySelectorAll('section, .section');
  sections.forEach((section, index) => {
    const elements = section.querySelectorAll('h2, h3, p, .card, .feature');
    if (elements.length > 0) {
      smoothReveal(elements);
    }
  });
};

// Export default function for easy import
export default initAnimations;

