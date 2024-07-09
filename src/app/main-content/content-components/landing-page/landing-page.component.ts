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

   @Input() language: string = 'EN';
  
  constructor(public translateService: TranslateService) {}
   
  ngOnChanges(changes: SimpleChanges) {
    if (changes['language']) {
      console.log(`Language input changed: ${changes['language'].currentValue}`);
      this.updateLanguageStyle();
    }
  }

  updateLanguageStyle() {
    console.log(`Updating language style for: ${this.language}`);
    const h3Element = document.querySelector('h3');
    if (h3Element) {
      if (this.language === 'DE') {
        h3Element.classList.add('styleGerman');
        console.log('Added class: styleGerman');
      } else {
        h3Element.classList.remove('styleGerman');
        console.log('Removed class: styleGerman');
      }
    }
  } 

}
