import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  mission = {
    title: 'Nuestra Misión',
    description: 'Promover la educación y la cultura a través de programas de becas y formación integral para jóvenes talentosos con necesidades económicas, contribuyendo al desarrollo social del país.'
  };

  vision = {
    title: 'Nuestra Visión',
    description: 'Ser la fundación líder en el Ecuador en la promoción de la educación y cultura, reconocida por su compromiso con la excelencia académica y la formación de líderes transformadores.'
  };

  values = [
    {
      name: 'Excelencia',
      description: 'Buscamos siempre la calidad en todos nuestros programas y servicios.'
    },
    {
      name: 'Compromiso',
      description: 'Estamos dedicados al éxito educativo de nuestros beneficiarios.'
    },
    {
      name: 'Solidaridad',
      description: 'Trabajamos juntos para crear oportunidades para quienes más lo necesitan.'
    },
    {
      name: 'Transparencia',
      description: 'Actuamos con honestidad y apertura en todas nuestras acciones.'
    },
    {
      name: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de mejorar nuestros programas.'
    },
    {
      name: 'Responsabilidad Social',
      description: 'Contribuimos activamente al desarrollo de la sociedad ecuatoriana.'
    }
  ];

  history = {
    title: 'Nuestra Historia',
    content: [
      'La Fundación Leonidas Ortega Moreira fue creada en honor a un visionario que dedicó su vida a la educación y al desarrollo social del Ecuador.',
      'Desde 1992, hemos estado comprometidos con la formación de líderes a través de nuestros programas de becas educativas.',
      'A lo largo de más de 30 años, hemos beneficiado a más de 1,500 estudiantes, quienes hoy son profesionales exitosos que contribuyen al desarrollo del país.',
      'Nuestro enfoque integral no solo incluye el apoyo económico, sino también la formación en valores y liderazgo a través de nuestro Programa de Liderazgo y Voluntariado.'
    ]
  };

  achievements = [
    {
      number: '1,500+',
      description: 'Estudiantes beneficiados'
    },
    {
      number: '32+',
      description: 'Años de experiencia'
    },
    {
      number: '15+',
      description: 'Instituciones aliadas'
    },
    {
      number: '90%',
      description: 'Tasa de graduación'
    }
  ];
}
