import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {

  features = [
    {
      icon: '🔍',
      title: 'Find garages nearby',
      description: 'Search and filter garages by location, service type and customer ratings.'
    },
    {
      icon: '📅',
      title: 'Book appointments',
      description: 'Schedule a service slot directly from your phone, any time of day.'
    },
    {
      icon: '📋',
      title: 'Service history',
      description: 'Full record of every job done on your car, always accessible.'
    },
    {
      icon: '👥',
      title: 'Manage your team',
      description: 'Add mechanics, assign jobs and track performance from a dashboard.'
    },
    {
      icon: '🔔',
      title: 'Reminders and alerts',
      description: 'Get notified when your service is due, insurance expires or job is ready.'
    },
    {
      icon: '📡',
      title: 'Live job tracking',
      description: 'Car owners can follow the progress of their repair in real time.'
    }
  ];
}
