import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReferencesComponent } from './references/references.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';

@Component({
  selector: 'app-content-components',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, ReferencesComponent, AboutMeComponent, SkillsComponent, PortfolioProjectsComponent],
  templateUrl: './content-components.component.html',
  styleUrl: './content-components.component.scss'
})
export class ContentComponentsComponent {

}
