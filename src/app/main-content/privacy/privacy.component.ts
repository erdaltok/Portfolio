import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";

    onMouseEnter() {
    this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-green.png";
  }

  onMouseLeave() {
    this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";
  }
}
