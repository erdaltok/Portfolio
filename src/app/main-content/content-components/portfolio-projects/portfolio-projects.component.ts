import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {


  projects = [
    {
      name: 'Join',
      skills: 'JavaScript | HTML | CSS | Git',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '../../../../assets/img/project-images/join-img2.png',
      liveTestLink: '',
      gitLink: 'https://github.com/erdaltok/Join-753'
    },

    {
      name: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS | Git',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
      image: '../../../../assets/img/project-images/el-pollo-loco-img.png',
      liveTestLink: '',
      gitLink: 'https://github.com/erdaltok/El-pollo-loco'
    }
    
  ]
  

openLiveTestProject(url:string) {
  window.open(url, '_blank')
}
openGitProject(url:string) {
  window.open(url, '_blank')
}







}
