import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  scholarshipProgram = {
    title: 'Programa de Becas Alianza para el Futuro',
    description: 'La Fundación Leonidas Ortega Moreira para la Educación y la Cultura comprometida con su misión institucional y alineada a los (ODS) Objetivos de Desarrollo Sostenibles, en su cuarto objetivo, ha gestionado recursos para financiar becas para estudiantes talentosos, con necesidades de apoyo para culminar sus estudios y ha firmado convenios de cooperación con importantes instituciones educativas, con un alto sentido de Responsabilidad Social Educativa.',
    beneficiaries: 'Al momento el Programa de becas ha beneficiado a más de 1.500 estudiantes con el acceso y permanencia en el sistema educativo, de niños, adolescentes y jóvenes talentosos, que han recibido no solo una formación académica, sino que además recibieron un acompañamiento y formación integral a través del Programa Liderazgo y Voluntariado.'
  };

  scholarshipTypes = [
    { percentage: '50%', description: 'Beca parcial para estudiantes destacados' },
    { percentage: '60%', description: 'Beca parcial para estudiantes con alto rendimiento' },
    { percentage: '70%', description: 'Beca mayor para estudiantes excepcionales' },
    { percentage: '80%', description: 'Beca completa para casos especiales' }
  ];

  institutions = [
    'Centro de Estudios Espíritu Santo - CEES',
    'Colegio Hispanoamericano',
    'Unidad Educativa Almirante Lord Thomas',
    'Unidad Educativa República de Francia',
    'Unidad Educativa Letras y Vida',
    'Tecnológico Universitario Espíritu Santo - TES',
    'LEXA Tecnológico Latinoaméricano de Expresiones Artísticas',
    'Instituto Superior Tecnológico TECLEMAS',
    'Universidad Internacional del Ecuador - UIDE (sede Guayaquil)'
  ];

  requirements = [
    'Alto promedio académico (mínimo 8,5 nivel superior y 9 escuelas y colegios)',
    'Actitud comprometida para el servicio social',
    'Situación económica que justifique la necesidad de la beca',
    'Compromiso de participar en el Programa Liderazgo y Voluntariado',
    'Documentación completa según los requisitos específicos'
  ];

  applicationSteps = [
    {
      step: 1,
      title: 'Ver video tutorial',
      description: 'Escucha atentamente el video tutorial de la convocatoria de becas'
    },
    {
      step: 2,
      title: 'Llenar formulario',
      description: 'Completa el formulario de postulación con toda la información solicitada'
    },
    {
      step: 3,
      title: 'Entregar documentos',
      description: 'Presenta la carpeta con todos los documentos requeridos'
    },
    {
      step: 4,
      title: 'Participar en tutorías',
      description: 'Asiste a las tutorías de Comunicación asertiva y Proyecto de Vida (nivel superior)'
    }
  ];

  faqs = [
    {
      question: '¿En esta convocatoria de Becas, en qué período ingresaré a estudiar?',
      answer: 'El proceso de admisión, selección y adjudicación de becas dura tres meses, inicias a estudiar en el curso de nivelación que se inicie una vez concluido el proceso de postulación.'
    },
    {
      question: '¿Cuáles son los requisitos para acceder a una beca?',
      answer: 'Entre los principales requisitos tenemos: alto promedio académico, mínimo 8.5 para el caso de aspirantes de becas de nivel superior y 9 puntos en el caso de aspirantes para becas de escuelas y colegios. Además de comprometerse a participar activamente en el Programa Liderazgo y Voluntariado.'
    },
    {
      question: '¿Puedo solicitar una beca para una Institución o carrera que no consta en la Convocatoria de becas?',
      answer: 'Solo se puede postular a las instituciones y carreras que se indica como disponibles en cada convocatoria.'
    },
    {
      question: '¿Si tengo un título profesional y quiero estudiar otra carrera, puedo aplicar?',
      answer: 'Las becas de nivel superior, solo están dirigidas a estudiantes bachilleres con el objetivo que accedan a su primer título de tercer nivel y a los tecnólogos titulados que deseen obtener la licenciatura en la misma carrera.'
    }
  ];

  testimonials = [
    {
      name: 'DIEGO GONZÁLEZ',
      title: 'Empresario',
      text: 'Desde que estaba en el colegio yo sabía exactamente qué quería, me gustaban mucho los números y me veía trabajando en el área financiera...'
    }
  ];

  openFaq: number | null = null;

  toggleFaq(index: number) {
    this.openFaq = this.openFaq === index ? null : index;
  }

  onContactSubmit(event: Event) {
    event.preventDefault();
    console.log('Contact form submitted');
  }
}
