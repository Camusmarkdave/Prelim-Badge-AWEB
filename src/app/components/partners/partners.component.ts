import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partners = [
    { name: 'Rolex', type: 'Platinum', website: 'https://rolex.com' },
    { name: 'Lindt', type: 'Gold', website: 'https://lindt.com' },
    { name: 'UBS', type: 'Silver', website: 'https://ubs.com' }
  ];
}
