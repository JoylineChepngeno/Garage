import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  imports: [RouterLink],
  templateUrl: './forgotpassword.html',
  styleUrl: './forgotpassword.css',
})
export class Forgotpassword {
  private router = inject(Router);
showmessage = false;

  onSendResetLink(){
    console.log("clicked")
  
    this.showmessage = true;
  
  }
  checkNextPage(){
    console.log("clicked")
    debugger;
    this.router.navigate(['/reset'])
    

  }


}
