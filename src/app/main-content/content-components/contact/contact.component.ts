import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, HostListener} from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, HttpClientModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goUpBtn: HTMLElement | null = null;
  currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";
  isChecked: boolean = false;
  showPrivacyWarning: boolean = false;  
  toastrAudio: HTMLAudioElement;

  constructor(private router: Router, public translateService: TranslateService) {
    this.toastrAudio = new Audio('../../../../assets/audio/toastr-success.mp3');
  }

   ngOnInit() {
     this.goUpBtn = document.getElementById("goUpBtn");     
  }

  http = inject(HttpClient);
  toastr = inject(ToastrService);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false; // Set to false for production
  isSubmitting = false;  // Prevents duplicate submissions

  post = {
    endPoint: 'https://erdal.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

 
 onSubmit(ngForm: NgForm) {
    if (!this.isChecked) {
      this.showPrivacyWarning = true; 
    } else {
      this.showPrivacyWarning = false;
      if (ngForm.form.valid && !this.isSubmitting) {
        this.isSubmitting = true;
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response: any) => {
              this.showSuccessMessage();
              ngForm.resetForm();
              this.isSubmitting = false;
            },
            error: (error) => {
              console.error(error);
              this.isSubmitting = false;
            },
            complete: () => console.info('send post complete'),
          });
      }
    }
  }

  showSuccessMessage() {
    setTimeout(() => {
      this.translateService.get(['contact.toastr_messageFirst', 'contact.toastr_messageSecond']).subscribe(translations => {
        this.toastr.success(translations['contact.toastr_messageSecond'], translations['contact.toastr_messageFirst'], { closeButton: true });
      });
      this.toastrAudio.play();
    }, 1500);
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
    this.router.navigateByUrl('/privacy').then(() => {
      window.scrollTo(0, 0);
    }); 
  }
    
  checkCheckBoxValue(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.showPrivacyWarning = false;
    }
  }

}


