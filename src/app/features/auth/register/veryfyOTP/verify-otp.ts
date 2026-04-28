import { Component } from '@angular/core';

@Component({
  selector: 'app-verify-otp',
  imports: [],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOTP {

  submitOtp() {
    console.log('OTP Submitted');
  };

  resendOtp(){
    console.log('OTP has been sent again')
  }

}
