import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for Two-Way Binding

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  heroImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  institution: string = "";
}
