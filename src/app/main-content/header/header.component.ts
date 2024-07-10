import { Component, AfterViewInit, HostListener, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
  
  
export class HeaderComponent implements AfterViewInit {
  menuValue: boolean = false;
  currentImgSrc: string = '../../../assets/img/icons/burger-icon-open.png';
  currentSection: string = '';
  currentLanguage: string = 'EN'; // Default language

  @Output() languageChanged = new EventEmitter<string>();

  constructor(public translateService: TranslateService, private cdr: ChangeDetectorRef) { }

  
  changeLanguage(language: string) {
     const currentScrollPosition = window.pageYOffset; // Speichern der aktuellen Scrollposition
    console.log(`Changing language to: ${language}`);
    this.currentLanguage = language;
    this.languageChanged.emit(language);
    console.log(`Language emitted: ${language}`);

    if (this.currentLanguage === 'DE') {
      this.translateService.setDefaultLang('de');
    } else {
      this.translateService.setDefaultLang('en');
    }
    this.cdr.detectChanges(); 
     window.scrollTo(0, currentScrollPosition); // Wiederherstellen der Scrollposition
  }

  openMenu() {
    this.menuValue = !this.menuValue;
    this.currentImgSrc = this.menuValue
      ? '../../../assets/img/icons/burger-icon-close.png'
      : '../../../assets/img/icons/burger-icon-open.png';
    document.body.style.overflow = this.menuValue ? 'hidden' : 'auto';
    this.cdr.detectChanges();

  }

  closeMenu() {
    this.menuValue = false;
    this.currentImgSrc = '../../../assets/img/icons/burger-icon-open.png';
    document.body.style.overflow = 'auto';
    this.cdr.detectChanges();

  }

  ngAfterViewInit(): void {
    this.onScroll();
  }

 @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('app-about-me, app-skills, app-portfolio-projects, app-contact');
    const landingPage = document.getElementById('landingPage');
    let scrollPosition = window.pageYOffset;

    if (landingPage) {
      const rect = landingPage.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        this.currentSection = '';
        this.cdr.detectChanges();
        return;
      }
    }

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - 150;
      const offsetBottom = offsetTop + rect.height;
      const id = section.getAttribute('id');

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        this.currentSection = id || "";
        this.cdr.detectChanges();
      }
    });
  }
}
