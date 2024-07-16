import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './main-content/header/header.component';
import { FooterComponent } from './main-content/footer/footer.component';
import AOS from 'aos';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  currentLanguage: string = 'EN';

  ngOnInit(): void {
    AOS.init();
    this.renderer.listen('window', 'load', () => {
      this.fadeOutPreloader();
    });

     // Fallback
    setTimeout(() => {
      this.hidePreloader();
    }, 1500);
  }

  fadeOutPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); 
    }
  }


 hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.display = 'none';
    }
  }

    constructor(public translate: TranslateService, private languageService: LanguageService, private renderer: Renderer2) {
    translate.setDefaultLang('en');
  }

  onLanguageChanged(language: string) {
    this.languageService.setLanguage(language);
  }
}
