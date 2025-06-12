import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  user: any;
  userName = '';
  userGithubUrl = '';
  cityControl = new FormControl('');

  constructor(public auth: AuthService, private router: Router) {
  this.auth.user$.subscribe(profile => {
    if (profile) {
      this.userName = profile['nickname'] ?? profile['name'] ?? 'Unknown';
      this.userGithubUrl = `https://github.com/${profile['nickname']}`;
    }
  });
}

  viewWeather() {
    const city = this.cityControl.value;
    if (city) {
      this.router.navigate(['/weather'], { queryParams: { city } });
    }
  }
}
