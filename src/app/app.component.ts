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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, HeaderComponent, FooterComponent, PrivacyComponent, ImprintComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    AOS.init();
  }

   constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
