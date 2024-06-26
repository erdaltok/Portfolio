import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";

  onMouseEnter() {
  this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-green.png";
  }


  onMouseLeave() {
   this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";
  }
}
