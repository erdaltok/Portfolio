import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './main-content/header/header.component';
import { FooterComponent } from './main-content/footer/footer.component';
import { PrivacyComponent } from './main-content/privacy/privacy.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, HeaderComponent, FooterComponent, PrivacyComponent, ImprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
