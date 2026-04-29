import { Component } from '@angular/core';
@Component({
  selector: 'app-car-details',
  imports: [],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails {



  currentStep = 1;
  totalSteps = 4;

  // Step metadata - drives the banner and progress
  steps = [
    { number: 1, title: 'Basic Information',        subtitle: 'Tell us about your car'            },
    { number: 2, title: 'Engine & Transmission',    subtitle: 'Technical details of your car'     },
    { number: 3, title: 'Registration & Mileage',   subtitle: 'Your car\'s registration details'  },
    { number: 4, title: 'Service & Insurance',      subtitle: 'Keep track of important dates'     }
  ];

  get currentStepData() {
    return this.steps[this.currentStep - 1];
  }

  get progressPercent(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }
}
