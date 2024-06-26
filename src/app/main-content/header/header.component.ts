import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  menuValue: boolean = false;
  currentImgSrc: string = '../../../assets/img/icons/burger-icon-open.png';
  currentSection: string = '';
  currentLanguage: string = 'EN'; // Default language

  changeLanguage(language: string) {
    this.currentLanguage = language;
    // here logic for choosing language... for later.... 
  }


  openMenu() {
    this.menuValue = !this.menuValue;
    this.currentImgSrc = this.menuValue
      ? '../../../assets/img/icons/burger-icon-close.png'
      : '../../../assets/img/icons/burger-icon-open.png';
    document.body.style.overflow = this.menuValue ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.menuValue = false;
    this.currentImgSrc = '../../../assets/img/icons/burger-icon-open.png';
    document.body.style.overflow = 'auto';
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
      }
    });
  }
}
