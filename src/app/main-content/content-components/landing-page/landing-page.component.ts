import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslateModule, HttpClientModule ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnChanges{

  @Input() currentLanguage: string = 'EN';
  
  constructor(public translateService: TranslateService) {}
  
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentLanguage']) {
      console.log(`Language changed to: ${this.currentLanguage}`);
    }
  }



 

}
