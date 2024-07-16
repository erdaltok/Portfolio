import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {

  constructor(public translateService: TranslateService) {}

projects = [
    {
      name: 'Join',
      skills: 'JavaScript | HTML | CSS | Git',
      descriptionKey: 'portfolio.description_join',
      image: '../../../../assets/img/project-images/join-img2.png',
      liveTestLink: '',
      gitLink: 'https://github.com/erdaltok/Join-753'
    },
    {
      name: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS | Git',
      descriptionKey: 'portfolio.description_el_pollo_loco',
      image: '../../../../assets/img/project-images/el-pollo-loco-img.png',
      liveTestLink: 'https://polloloco.erdal.dev/',
      gitLink: 'https://github.com/erdaltok/El-pollo-loco'
    }
  ];
  

openLiveTestProject(url:string) {
  window.open(url, '_blank')
}
openGitProject(url:string) {
  window.open(url, '_blank')
}







}
