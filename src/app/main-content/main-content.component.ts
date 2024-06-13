import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponentsComponent } from './content-components/content-components.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, ContentComponentsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
