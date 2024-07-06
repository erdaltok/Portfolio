import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslateModule, HttpClientModule ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(public translateService: TranslateService) { }



}
