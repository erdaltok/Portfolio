import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule, HttpClientModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public translateService: TranslateService) {}

  currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";

  onMouseEnter() {
  this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-green.png";
  }


  onMouseLeave() {
   this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";
  }
}
