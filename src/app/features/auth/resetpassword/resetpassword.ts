import { Component, inject } from '@angular/core';
import { Router, RouterLink,  } from "@angular/router";

@Component({
  selector: 'app-resetpassword',
  imports: [],
  templateUrl: './resetpassword.html',
  styleUrl: './resetpassword.css',
})

export class Resetpassword {
   private router = inject(Router);

   onResetPassword(){
    //API Logic
     this.router.navigate(['/login']);
   }
}
