import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import './styles.scss';

/**
 * Main Application Class
 * Gestiona todos los componentes interactivos y animaciones.
 */
class GradiwebApp {
  constructor() {
    this.init();
  }

  /**
   * Inicializar la aplicación
   */
  init() {
    console.log('Gradiweb App Inicializado');

    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupApp();
      });
    } else {
      this.setupApp();
    }
  }

  /**
   * Configurar todas las funciones de la aplicación
   */
  setupApp() {
    this.setupAnimations();
    this.setupInteractivity();
  }

  /**
   * Configurar animaciones GSAP
   */
  setupAnimations() {
    console.log('⚡ Configurando animaciones...');

    // Animación básica de fundido para secciones
    for (const section of gsap.utils.toArray('.section')) {
      gsap.fromTo(section,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }

  /**
   * Configurar componentes interactivos
   */
  setupInteractivity() {
    console.log('🎯 Configurando interactividad...');

    // Añadir desplazamiento suave para enlaces de anclaje
    this.setupSmoothScroll();
  }

  /**
   * Configurar desplazamiento suave para la navegación
   */
  setupSmoothScroll() {
    for (const link of document.querySelectorAll('a[href^="#"]')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
          gsap.to(window, {
            scrollTo: { y: target, offsetY: 80 },
            duration: 1,
            ease: 'power2.inOut'
          });
        }
      });
    }
  }
}

// Inicializar la aplicación
new GradiwebApp();
