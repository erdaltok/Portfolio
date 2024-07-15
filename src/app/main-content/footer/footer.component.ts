import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  constructor(private router: Router) {
      
    }

    scrollToTopImprint(){ 
    this.router.navigateByUrl('/imprint').then(() => {
      window.scrollTo(0, 0);
    }); 
  }

}
