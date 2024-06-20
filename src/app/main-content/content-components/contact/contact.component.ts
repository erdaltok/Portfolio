import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, HostListener } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goUpBtn: HTMLElement | null = null;
  currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";


  constructor(private router: Router) {}

   ngOnInit() {
    this.goUpBtn = document.getElementById("goUpBtn");
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // here place what ever you want
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      // here place what ever you want for testing
      ngForm.resetForm();
    }
  }


  scrollUpPage() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.goUpBtn) {
      if (window.pageYOffset > 50) {
        this.goUpBtn.style.display = "block";
      } else {
        this.goUpBtn.style.display = "none";
      }
    }
  }
  
  onMouseEnter() {
    this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-green.png";
  }

  onMouseLeave() {
    this.currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";
  }

    scrollToTopPrivacy(){ 
    this.router.navigate(['/privacy']); 
  }

}


