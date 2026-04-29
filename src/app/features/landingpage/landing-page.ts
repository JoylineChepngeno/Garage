import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Stats } from './stats/stats';
import { Features } from './features/features';
import { HowItWorks } from './how-it-works/how-it-works';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-landing-page',
  imports: [Navbar,Hero, Stats, Features,HowItWorks, Contact, Footer],
  template: ` 
<app-navbar></app-navbar>
<app-hero></app-hero>
<app-stats></app-stats>
<app-features></app-features>
<app-how-it-works></app-how-it-works>
<app-contact></app-contact>
<app-footer></app-footer> `,
  styles: ``,
})
export class LandingPage {}
