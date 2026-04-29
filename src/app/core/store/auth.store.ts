import { Injectable, signal, computed } from '@angular/core';
import { CurrentUser, UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  //only methods inside these class can call .set() on these
  private _currentUser = signal<CurrentUser | null>(null);
  private _isLoggedIn  = signal<boolean>(false);

  //public read only signals for components, guards etc to subscribe to
  readonly currentUser = this._currentUser.asReadonly();
  readonly isLoggedIn  = this._isLoggedIn.asReadonly();

   // ── Computed signals ──────────────────────────────────────────────
  // Derived automatically — never set manually

  // Reads role from currentUser signal
  // If currentUser is null, returns null
  readonly currentRole = computed<UserRole | null>(
    () => this._currentUser()?.role ?? null
  );

   // Convenience booleans — components can check these directly
  // instead of comparing strings everywhere
  // readonly isCarOwner    = computed(() => this._currentUser()?.role === 'car_owner');
  // readonly isGarageAdmin = computed(() => this._currentUser()?.role === 'garage_admin');
  // readonly isMechanic    = computed(() => this._currentUser()?.role === 'mechanic');
  // readonly isSystemAdmin = computed(() => this._currentUser()?.role === 'system_admin');

readonly isCarOwner = computed(() => {
  const user = this._currentUser();
  return user !== null && user.role === 'car-owner';
});

readonly isGarageAdmin = computed(() => {
  const user = this._currentUser();
  return user !== null && user.role === 'garage-admin';
});

readonly isMechanic = computed(() => {
  const user = this._currentUser();
  return user !== null && user.role === 'mechanic';
});

readonly isSystemAdmin = computed(() => {
  const user = this._currentUser();
  return user !== null && user.role === 'system-admin';
});


  // ── Mutations ─────────────────────────────────────────────────────
  // Only AuthService should call these two methods

  setUser(user: CurrentUser): void {
    this._currentUser.set(user);
    this._isLoggedIn.set(true);
  }

  clearUser(): void {
    this._currentUser.set(null);
    this._isLoggedIn.set(false);
  }

}
