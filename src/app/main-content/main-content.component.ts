import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContentComponentsComponent } from './content-components/content-components.component';
import { ImprintComponent } from './imprint/imprint.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, ContentComponentsComponent, ImprintComponent, TranslateModule, HttpClientModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnChanges{
  @Input() currentLanguage: string = 'EN';
  
  constructor(public translateService: TranslateService) {}

  

 ngOnChanges(changes: SimpleChanges) {
    if (changes['currentLanguage']) {
      console.log(`Language received in MainContentComponent: ${this.currentLanguage}`);
    }
  }
}
