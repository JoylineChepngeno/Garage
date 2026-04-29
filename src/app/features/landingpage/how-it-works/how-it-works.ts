import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  imports: [],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {

  carOwnerSteps = [
    {
      title: 'Create your account',
      description: 'Sign up and add your car details — make, model, mileage and more.'
    },
    {
      title: 'Find a garage',
      description: 'Search nearby garages, check reviews and select the right one for your job.'
    },
    {
      title: 'Book and track',
      description: 'Book your slot and follow the job live until your car is ready.'
    }
  ];

  garageOwnerSteps = [
    {
      title: 'Register your garage',
      description: 'Add your garage details, location, services offered and working hours.'
    },
    {
      title: 'Add your mechanics',
      description: 'Invite your team, assign roles and manage who handles what.'
    },
    {
      title: 'Start receiving bookings',
      description: 'Go live and let customers find and book your garage directly.'
    }
  ];
}
