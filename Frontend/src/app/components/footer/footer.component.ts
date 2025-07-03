import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlowbiteService } from '../../services/Flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private flowbiteService = inject(FlowbiteService);
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
        initFlowbite();
      });
  }
  currentYear = new Date().getFullYear();

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    // Implementar lógica de newsletter aquí
    console.log('Newsletter subscription submitted');
  }
}
