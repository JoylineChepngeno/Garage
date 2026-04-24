import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-type',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-type.html',
  styleUrl: './user-type.css',
})
export class UserType {

  // A used a use a simple boolean signal to track the outlet's status.

   // A generic signal that works for any parent-child route
  hasActiveChild = signal(false);

  // Called when a child component is loaded
  onChildLoaded() {
    this.hasActiveChild.set(true);
  }

  // Called when the user goes back and the child is removed
  onChildRemoved() {
    this.hasActiveChild.set(false);
  }

}
