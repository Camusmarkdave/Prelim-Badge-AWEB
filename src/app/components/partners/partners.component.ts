import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  // Background image for the top banner
  heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1350&q=80";

  partners = [
    {
      name: 'Rolex',
      type: 'Platinum',
      website: 'https://rolex.com',
      logo: 'https://cdn.freebiesupply.com/logos/large/2x/rolex-logo-black-and-white.png'
    },
    {
      name: 'Lindt & Sprüngli',
      type: 'Gold',
      website: 'https://lindt.com',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswjnBxLOEncAFgM-Tz-Gir-8YbXEApq2fYg&s'
    },
    {
      name: 'UBS Bank',
      type: 'Silver',
      website: 'https://ubs.com',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTED-VKXdP4EATezz2CV_JBtNwS20IEcPd5Q&s'
    },
    {
      name: 'Swatch',
      type: 'Bronze',
      website: 'https://swatch.com',
      logo: 'https://1000logos.net/wp-content/uploads/2017/06/Swatch-Logo.png'
    }
  ];
}
