import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReferencesComponent } from './references/references.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-content-components',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, ReferencesComponent, AboutMeComponent, SkillsComponent, PortfolioProjectsComponent, ContactComponent],
  templateUrl: './content-components.component.html',
  styleUrl: './content-components.component.scss'
})
export class ContentComponentsComponent implements OnChanges  {

  @Input() currentLanguage: string = 'EN';

 
 ngOnChanges(changes: SimpleChanges) {
    if (changes['currentLanguage']) { 
      console.log(`Language received in ContentComponentsComponent: ${this.currentLanguage}`);
    }
  }

}


