import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('EN');
  language$ = this.languageSubject.asObservable();

    
    constructor(private translate: TranslateService) {}

  setLanguage(language: string) {
    this.languageSubject.next(language);
    this.translate.use(language.toLowerCase()); 
  }

  changeLanguage(language: string) {
    this.setLanguage(language);
  }
}
    
    
