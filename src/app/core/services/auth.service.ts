import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { AuthStore } from '../store/auth.store';
import { CurrentUser, SignInResponse, SignUpResponse, UserRole } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../environments/environment';


const ROLE_ROUTES: Record<UserRole, string> = {
  'car-owner':    '/dashboard/owner',
  'garage-admin': '/dashboard/garage',
  'mechanic':     '/dashboard/mechanic',
  'system-admin': '/admin',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)
  private router = inject(Router)
  private tokenservice = inject(AuthStore)
  //private apiUrl = environment.apiBaseUrl

}
