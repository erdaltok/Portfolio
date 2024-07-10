import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, HostListener} from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goUpBtn: HTMLElement | null = null;
  currentImgSrc = "../../../../assets/img/icons/go-up-btn-white.png";

  isChecked: boolean = false;
  showPrivacyWarning: boolean = false;
  // showSuccessMailMessage: boolean = false;

  constructor(private router: Router, public translateService: TranslateService) {}

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

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  // ORIGINAL
  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response) => {
  //           // here place what ever you want
  //           ngForm.resetForm();
  //         },
  //         error: (error) => {
  //           console.error(error);
  //         },
  //         complete: () => console.info('send post complete'),
  //       });
  //   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

  //     // here place what ever you want for testing
  //     ngForm.resetForm();
  //   }
  // }

onSubmit(ngForm: NgForm) {
    // Checkbox privacy policy activated?
    if (!this.isChecked) {
      this.showPrivacyWarning = true; 
    } else {
      this.showPrivacyWarning = false;

      // logic, if form-submit activated after checkbox is checked
      if (ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
             
              // here code of your choise, what should be happen after...
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (ngForm.form.valid && this.mailTest) {

        setTimeout(() => {
          this.translateService.get('contact.toastr_messageFirst').subscribe((toastrMessageFirst: string) => {
          this.translateService.get('contact.toastr_messageSecond').subscribe((toastrMessageSecond: string) => {
            this.toastr.success(toastrMessageSecond, toastrMessageFirst);
          });
        });

          // this.showSuccessMailMessage = true;
        }, 1500);
        
       
  
        ngForm.resetForm();
      }
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
    
  checkCheckBoxValue(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.showPrivacyWarning = false;
    }
  }

}


