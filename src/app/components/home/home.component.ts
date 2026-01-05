import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mainTitle = "Experience the Alps 2026";
  subTitle = "Join our exclusive tours through the heart of Europe.";
  heroImage = "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
}
