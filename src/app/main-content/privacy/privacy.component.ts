import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { HttpClientModule } from '@angular/common/http';

import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule, HttpClientModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

   constructor(public translateService: TranslateService, private languageService: LanguageService) { }

  currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";

    onMouseEnter() {
    this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-green.png";
  }

  onMouseLeave() {
    this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";
  }
}
