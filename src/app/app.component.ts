import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './main-content/header/header.component';
import { FooterComponent } from './main-content/footer/footer.component';
import { PrivacyComponent } from './main-content/privacy/privacy.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';
import AOS from 'aos';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LandingPageComponent } from './main-content/content-components/landing-page/landing-page.component';

import { LanguageService } from './language.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, HeaderComponent, FooterComponent, PrivacyComponent, ImprintComponent, TranslateModule, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  currentLanguage: string = 'EN';

  ngOnInit(): void {
    AOS.init();
  }

    constructor(public translate: TranslateService, private languageService: LanguageService) {
    translate.setDefaultLang('en');
  }

  onLanguageChanged(language: string) {
    this.languageService.setLanguage(language);
    console.log(`Language changed in AppComponent to: ${language}`);
  }
}
