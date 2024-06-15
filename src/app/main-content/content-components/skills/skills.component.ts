import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

ngOnInit(): void {
  
   
  } 





logos = [
  {
    name: 'Angular',
    path: '../../../../assets/img/icons/Angular.png'
  },
  {
    name: 'TypeScript',
    path: '../../../../assets/img/icons/Typescript.png'
  },
  {
    name: 'JavaScript',
    path: '../../../../assets/img/icons/Javascript.png'
  }, 
  {
    name: 'HTML',
    path: '../../../../assets/img/icons/html.png'
  },
  {
    name: 'Firebase',
    path: '../../../../assets/img/icons/Firebase.png'
  },
  {
    name: 'GIT',
    path: '../../../../assets/img/icons/Git.png'
  },
  {
    name: 'CSS',
    path: '../../../../assets/img/icons/CSS.png'
  },
  {
    name: 'Rest-Api',
    path: '../../../../assets/img/icons/Api.png'
  },
  {
    name: 'Scrum',
    path: '../../../../assets/img/icons/scrum.png'
  },
  {
    name: 'Material design',
    path: '../../../../assets/img/icons/Material-design.png'
  }
]







}
