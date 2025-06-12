import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  imports: [],
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  private router = inject(Router);

  constructor(public auth: AuthService) {
    this.auth.isAuthenticated$.pipe(take(1)).subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/home']);
      }
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }
}
