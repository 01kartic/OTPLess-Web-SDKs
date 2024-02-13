import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import e from 'express';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Demo';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
//@ts-ignore
      window.otpless = (otplessUser) => {
        localStorage.setItem('otplessUser', JSON.stringify(otplessUser));
        
        if (otplessUser.email) {
          console.log(otplessUser);
          alert('Token: ' + otplessUser.token + ', Name: ' + otplessUser.email.name + ', Email: ' + otplessUser.email.email);
        } else if (otplessUser.mobile) {
          console.log(otplessUser);
          alert('Token: ' + otplessUser.token + ', Name: ' + otplessUser.mobile.name + ', Number: ' + otplessUser.mobile.waNumber);
        } else {
          alert('Error in getting user data. Please try again.');
        }

       };
  }

  }
}
