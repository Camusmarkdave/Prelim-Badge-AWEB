import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mainTitle = "Experience Switzerland!";
  subTitle = "Join our exclusive tours through the heart of Europe.";
  heroImage = "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  destinations = [
    {
      name: 'Zermatt',
      description: 'Home of the famous Matterhorn.',
      image: 'https://images.winalist.com/blog/wp-content/uploads/2025/07/22155120/adobestock-270362997-1500x1000.jpeg'
    },
    {
      name: 'Lucerne',
      description: 'The gateway to central Switzerland.',
      image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Geneva',
      description: 'Global hub for diplomacy.',
      image: 'https://hips.hearstapps.com/hmg-prod/images/why-geneva-is-perfect-for-country-lovers-646df373e46c2.jpg?crop=1xw:1xh;center,top'
    },
    {
      name: 'Bern',
      description: 'The medieval capital city.',
      image: 'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/035/483/medium/a9f5b6e8e5589d29067b96c0bafebe5b/article-switzerland-bern-streets.jpg'
    }
  ];
}
