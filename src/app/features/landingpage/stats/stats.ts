import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {

  stats = [
    { value: '500+',  label: 'Garages listed'  },
    { value: '10k+',  label: 'Car owners'       },
    { value: '4.8 ★', label: 'Average rating'   },
    { value: '24/7',  label: 'Support'           }
  ];
}
