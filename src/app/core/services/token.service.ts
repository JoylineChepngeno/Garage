import { Injectable } from '@angular/core';
import { JwtPayload } from '../models/user.model';


const ACCESS_TOKEN_KEY = 'garage_access_token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {



  // ── Save ──────────────────────────────────────────────────────────
  // rememberMe true  → localStorage  (survives browser close)
  // rememberMe false → sessionStorage (dies when tab closes)
  save(token: string, rememberMe: boolean): void {
    //clear both first to avoid stale conflicts
    this.remove();
    if (rememberMe) {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    } else {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
  }

  // ── Get ───────────────────────────────────────────────────────────
  // Check localStorage first, then sessionStorage
  // User might have logged in with rememberMe true in a previous session
  // and false in the current one — check both to be safe
  get(): string | null {
    return (
      localStorage.getItem(ACCESS_TOKEN_KEY) ??
      sessionStorage.getItem(ACCESS_TOKEN_KEY)
    );
  }

  // ── Remove ────────────────────────────────────────────────────────
  // Clear from both — we do not know which one holds the token
  remove(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  // ── Decode ────────────────────────────────────────────────────────
  // Returns the payload or null if anything goes wrong
  decode(): JwtPayload | null {
    const token = this.get();
    if (!token) return null;

    try {
      const payloadBase64 = token.split('.')[1];
      const payloadJson   = atob(payloadBase64);
      return JSON.parse(payloadJson) as JwtPayload;
    } catch {
      // Token is malformed — treat as if no token exists
      return null;
    }
  }

  // ── Is Expired ────────────────────────────────────────────────────
  // exp in JWT is in seconds, Date.now() is in milliseconds
  isExpired(): boolean {
    const payload = this.decode();
    if (!payload) return true;
    return payload.exp * 1000 < Date.now();
  }

  // ── Is Valid ──────────────────────────────────────────────────────
  // Convenience method — token exists AND is not expired
  // This is what restoreSession() and guards will call
  isValid(): boolean {
    return !!this.get() && !this.isExpired();
  }

}
