import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

import { ContentComponentsComponent } from './content-components/content-components.component';
import { ImprintComponent } from './imprint/imprint.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from '../language.service';
import { PrivacyComponent } from './privacy/privacy.component';



@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, ContentComponentsComponent, ImprintComponent, TranslateModule, HttpClientModule, PrivacyComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
  
export class MainContentComponent implements OnInit {
  
  currentLanguage: string = 'EN';

  constructor(public translateService: TranslateService, private languageService: LanguageService) { }

    ngOnInit() {
      this.languageService.language$.subscribe(language => {
        this.currentLanguage = language;
      });
    }
  }
