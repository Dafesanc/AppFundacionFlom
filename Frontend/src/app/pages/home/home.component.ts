import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private slideInterval: any;
  private partnersInterval: any;
  currentSlide = 0;
  currentTestimonial = 0;
  currentPartnerSlide = 0;
  isBrowser: boolean;
  imagesLoaded = false;
  loadedImagesCount = 0;
  foundationSectionVisible = false;
  galleryImagesLoaded = false;
  loadedGalleryImagesCount = 0;
  mapLoaded = false;
  mapError = false;

  // Array de imágenes para el slider de fondo
  heroImages = [
    '/hero-slides/1.png',
    '/hero-slides/2.png',
    '/hero-slides/3.png',
    '/hero-slides/4.png',
    '/hero-slides/5.png'
  ];
  galery = [
    '/galery/1.jpg',
    '/galery/2.jpg',
    '/galery/3.jpg',
    '/galery/4.jpg',
    '/galery/5.jpg',
    '/galery/6.jpg',
    '/galery/7.jpg'
  ];

  // Array de logos de aliados educativos
  partnerLogos = [
    '/edu-logos/beneficencia-senoras.png',
    '/edu-logos/cees.jpg',
    '/edu-logos/cen.png',
    '/edu-logos/copei.png',
    '/edu-logos/emerson.png',
    '/edu-logos/gente-gestion.png',
    '/edu-logos/hispanoamericano.jpg',
    '/edu-logos/idiu-pacifico.png',
    '/edu-logos/jeferson.png',
    '/edu-logos/jorligroup.png',
    '/edu-logos/letras-vida.png',
    '/edu-logos/lexa.png',
    '/edu-logos/liceo-cristiano.png',
    '/edu-logos/medikal.jpg',
    '/edu-logos/pinturas-unidas.png',
    '/edu-logos/republica-francia.jpg',
    '/edu-logos/rocnarf.png',
    '/edu-logos/san-luis-francia.png',
    '/edu-logos/spirit.png',
    '/edu-logos/taurus.png',
    '/edu-logos/tes.png',
    '/edu-logos/u-pacifico.png',
    '/edu-logos/ucg.png',
    '/edu-logos/ucsg.png',
    '/edu-logos/uees.png',
    '/edu-logos/uelt.png',
    '/edu-logos/uide-1.png',
    '/edu-logos/varso.png'
  ];

  // Configuración del mapa de Google
  mapCenter: google.maps.LatLngLiteral = {
    lat: -2.1894191, // Coordenadas de Guayaquil, Ecuador (puedes cambiar por la ubicación de la fundación)
    lng: -79.8890104
  };
  mapZoom = 15;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    disableDefaultUI: false,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  // Marcador en el mapa
  markerPosition: google.maps.LatLngLiteral = {
    lat: -2.1894191,
    lng: -79.8890104
  };

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    title: 'Fundación Leonidas Ortega Moreira'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Solo ejecutar en el navegador, no en el servidor
    if (this.isBrowser) {
      this.preloadImages();
      this.preloadGalleryImages();
      this.preloadProgramImages();
      this.checkGoogleMapsAvailability();
      this.startPartnersCarousel();
      // Activar animación después de un pequeño delay
      setTimeout(() => {
        this.foundationSectionVisible = true;
      }, 500);
    }
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    if (this.partnersInterval) {
      clearInterval(this.partnersInterval);
    }
  }

  preloadImages() {
    this.heroImages.forEach((imageSrc, index) => {
      const img = new Image();
      img.onload = () => {
        this.loadedImagesCount++;
        if (this.loadedImagesCount === this.heroImages.length) {
          this.imagesLoaded = true;
          setTimeout(() => {
            this.startSlideshow();
          }, 500);
        }
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${imageSrc}`);
        this.loadedImagesCount++;
        if (this.loadedImagesCount === this.heroImages.length) {
          this.imagesLoaded = true;
          this.startSlideshow();
        }
      };
      img.src = imageSrc;
    });
  }

  preloadGalleryImages() {
    if (!this.isBrowser) {
      this.galleryImagesLoaded = true;
      return;
    }

    this.galery.forEach((imageSrc, index) => {
      const img = new Image();
      img.onload = () => {
        this.loadedGalleryImagesCount++;
        if (this.loadedGalleryImagesCount === this.galery.length) {
          this.galleryImagesLoaded = true;
          console.log('Gallery images loaded successfully');
        }
      };
      img.onerror = () => {
        console.warn(`Failed to load gallery image: ${imageSrc}`);
        this.loadedGalleryImagesCount++;
        if (this.loadedGalleryImagesCount === this.galery.length) {
          this.galleryImagesLoaded = true;
        }
      };
      img.src = imageSrc;
    });
  }

  preloadProgramImages() {
    if (!this.isBrowser) return;

    this.programs.forEach((program, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Program image ${index + 1} loaded successfully: ${program.img}`);
      };
      img.onerror = () => {
        console.warn(`Failed to load program image: ${program.img}`);
      };
      img.src = '/' + program.img;
    });
  }

  startSlideshow() {
    if (this.isBrowser && this.imagesLoaded) {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Cambiar cada 5 segundos
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroImages.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  // Datos de la sección "Conoce más sobre la Fundación"
  foundationInfo = [
    {
      icon: 'calendar',
      title: 'NOTICIAS',
      description: '"El lenguaje visual dice más que 1000 palabras". Compartimos con la comunidad las noticias más relevantes de las actividades, cuyas imágenes cuentan nuestro accionar.'
    },
    {
      icon: 'star',
      title: 'PROGRAMA LIDERAZGO',
      description: 'Los Becarios y sus familias acceden al Programa de Liderazgo, que promueve la formación de líderes colaborativos, y gestores de un cambio social.'
    },
    {
      icon: 'heart-hand',
      title: 'CAMPAÑAS SOLIDARIAS',
      description: 'La trascendencia del ser humano está en el ayudar a otros. Los invitamos a comprometerse en las campañas solidarias.'
    },
    {
      icon: 'briefcase',
      title: 'PORTAFOLIO DE TALENTOS',
      description: '¿Busca su empresa jóvenes profesionales capacitados y solidarios, que aporten a su cultura organizacional? Aquí lo encontrará.'
    }
  ];
  testimonials = [
    {
      id: 1,
      name: 'DIANA RAMÍREZ',
      title: 'Ex becaria Flom – Graduada en la UCSG',
      subtitle: 'Propietaria de Geronto, centro de Terapia Física para adultos mayores',
      text: 'Gracias a la beca que logré en la Fundación Leonidas Ortega Moreira pude estudiar en la Universidad Católica de Guayaquil y obtener la Licenciatura en Terapia Física. Tuve la oportunidad de realizar mi acción comunitaria en diferentes proyectos como: Flomnet, biblioteca, en la organización del Bingo Educación y en el departamento de Becas.',
      image: '/testimonios/3.jpg'
    },
    {
      id: 2,
      name: 'DIEGO GONZÁLEZ',
      title: 'Ex becario FLOM - Graduado en la UEES',
      subtitle: 'Empresario',
      text: 'Desde que estaba en el colegio yo sabía exactamente qué quería, me gustaban mucho los negocios y viajar. Gracias a la beca estudié en la UEES en la carrera de Gestión Empresarial. La Flom ha sido una parte esencial e importante de quien soy ahora porque me enseñó a ser más humano.',
      image: '/testimonios/8.png'
    },
    {
      id: 3,
      name: 'GIULIANA VILLAVICENCIO',
      title: 'Ex becaria FLOM – Graduada en la UEES',
      subtitle: 'Empresaria',
      text: 'Haber llegado a la Fundación Leonidas Ortega Moreira (Flom) fue una bendición, llegué en el momento perfecto. En la Flom conocí personas maravillosas. La Fundación me ayudó a ser más humana a través del contacto con la gente, con los niños, con los adolescentes.',
      image: '/testimonios/2.jpg'
    },
    {
      id: 4,
      name: 'JAIME COELLO',
      title: 'Ex becario FLOM - Graduado en la UEES',
      subtitle: 'Ganador del Concurso Nacional de Jueces del Consejo de la Judicatura',
      text: 'Hablar de la Fundación me trae una serie de recuerdos. Siempre he dicho que la Flom transforma vidas, no solo de las personas que llegan a acceder a una beca sino de todo el entorno. A mí me transformó la vida definitivamente. En cualquier espacio en el que me encuentro comparto esta experiencia.',
      image: '/testimonios/5.jpg'
    },
    {
      id: 5,
      name: 'NERY SAENZ',
      title: 'Ex becaria FLOM – Graduada en la UCSG',
      subtitle: 'Asesora legal en temas societarios, de tránsito y aduanero',
      text: 'Hubo un tiempo que tuvimos dificultades económicas en la casa porque a mi papá lo separaron del trabajo. Mis papás siempre tuvieron la visión de que el estudio es primero. Una de las enseñanzas que me dió la Flom fue el valor de la familia, el trabajo en equipo y saber que siempre hay alguien que te puede apoyar.',
      image: '/testimonios/4.jpg'
    },
    {
      id: 6,
      name: 'SARA CARREÑO',
      title: 'Ex becaria FLOM - Graduada en la UESS',
      subtitle: 'Ejecutiva de ventas en CMA-CGM',
      text: 'Recuerdo la primera entrevista en la Fundación como si fuera ayer. Para mí, un profesional Flom se diferencia de otro porque somos más comprometidos, más conscientes de cuánto nos costó llegar a donde estamos. Eso nos hace valorar más el hecho de estar en una posición de trabajo.',
      image: '/testimonios/6.jpg'
    },
    {
      id: 7,
      name: 'WILLIAM VITERI',
      title: 'Ex becario FLOM - Graduado en la UEES',
      subtitle: 'Docente universitario, Guía y Consultor turístico',
      text: 'Mi experiencia en la Fundación Leonidas Ortega Moreira (Flom) fue la mejor. Fue una época de mi vida muy gratificante desde el punto de vista social. Conocí gente muy interesante, humana ante todo, que contribuyó a mi desarrollo como persona.',
      image: '/testimonios/7.jpg'
    }
  ];

  // Funciones para navegación de testimonios
  previousTestimonial() {
    this.currentTestimonial = this.currentTestimonial === 0
      ? this.testimonials.length - 1
      : this.currentTestimonial - 1;
  }

  nextTestimonial() {
    this.currentTestimonial = this.currentTestimonial === this.testimonials.length - 1
      ? 0
      : this.currentTestimonial + 1;
  }

  getCurrentTestimonial() {
    return this.testimonials[this.currentTestimonial];
  }

  // Método para verificar si la galería está lista para mostrar
  isGalleryReady(): boolean {
    return this.galleryImagesLoaded || !this.isBrowser;
  }

  // Métodos para el carrusel de aliados
  startPartnersCarousel() {
    if (this.isBrowser) {
      this.partnersInterval = setInterval(() => {
        this.nextPartnersSlide();
      }, 6000); // Cambiar cada 6 segundos
    }
  }

  nextPartnersSlide() {
    // Calcular cuántos grupos de 5 logos hay
    const totalSlides = Math.ceil(this.partnerLogos.length / 5);
    this.currentPartnerSlide = (this.currentPartnerSlide + 1) % totalSlides;
  }

  getCurrentPartnerLogos() {
    const startIndex = this.currentPartnerSlide * 5;
    return this.partnerLogos.slice(startIndex, startIndex + 5);
  }

  getPartnerGroups() {
    const groups = [];
    for (let i = 0; i < this.partnerLogos.length; i += 5) {
      groups.push(this.partnerLogos.slice(i, i + 5));
    }
    return groups;
  }

  programs = [
    {
      title: 'Programa de Becas',
      description: 'Becas para estudiantes talentosos con necesidades económicas',
      img: 'testimonios/foto-home-1.jpg',
      icon: 'graduation-cap',
      link: '/educacion'
    },
    {
      title: 'Programa de Liderazgo y Voluntariado',
      description: 'Formación integral para líderes comunitarios',
      img: 'testimonios/foto-home-3.jpg',
      icon: 'users',
      link: '/liderazgo'
    },
    {
      title: 'Educacion Continua',
      description: 'Actividades de actualización profesional',
      img: 'testimonios/foto-home-2.jpg',
      icon: 'users',
      link: '/liderazgo'
    }
  ];

  onContactSubmit(event: Event) {
    event.preventDefault();
    console.log('Contact form submitted');
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  }

  // Método para manejar errores de carga de imágenes de testimonios
  onTestimonialImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';
  }

  // Método para verificar la disponibilidad de Google Maps
  checkGoogleMapsAvailability() {
    if (this.isBrowser) {
      // Verificar si Google Maps está disponible
      setTimeout(() => {
        if (typeof google !== 'undefined' && google.maps) {
          this.mapLoaded = true;
          console.log('Google Maps cargado correctamente');
        } else {
          this.mapError = true;
          console.warn('Google Maps API no está disponible. Mostrando fallback.');
        }
      }, 3000); // Dar más tiempo para que cargue la API
    } else {
      // En SSR, siempre mostrar el fallback
      this.mapError = true;
    }
  }
}
