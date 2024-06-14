import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReferencesComponent } from './references/references.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-content-components',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, ReferencesComponent, AboutMeComponent, SkillsComponent],
  templateUrl: './content-components.component.html',
  styleUrl: './content-components.component.scss'
})
export class ContentComponentsComponent {

}
