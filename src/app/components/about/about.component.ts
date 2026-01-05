import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  message = '';
  claimGift() {
    this.message = "Voucher Code: SWISS-CHOCO-2026";
  }
}
