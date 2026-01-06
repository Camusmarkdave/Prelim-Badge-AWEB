import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  heroImage = "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1350&q=80";

  giftMessage = "";

  claimGift() {
    this.giftMessage = "Congratulations! You've unlocked a free Swiss Chocolate box voucher code: CH-CHOCO-2026";
  }
}
