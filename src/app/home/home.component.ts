import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cityControl = new FormControl('');

  constructor( private router: Router) {}

  viewWeather() {
    const city = this.cityControl.value;
    if (city) {
      this.router.navigate(['/weather'], { queryParams: { city } });
    }
  }
}
