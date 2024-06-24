import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  menuValue: boolean = false;
  menuIcon: string = '';
  currentImgSrc = "../../../assets/img/icons/burger-icon-open.png";



  openMenu() {
    this.menuValue = !this.menuValue;
    if (this.menuValue) {
      this.currentImgSrc = "../../../assets/img/icons/burger-icon-close.png";
    } else {
      this.currentImgSrc = "../../../assets/img/icons/burger-icon-open.png";
    }
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.menuValue = false;
    this.currentImgSrc = "../../../assets/img/icons/burger-icon-open.png"
    document.body.style.overflow = 'auto';

}

}
