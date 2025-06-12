import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WeatherApp';
  private router = inject(Router);
  showLogoutBtn = toSignal(
    this.router.events.pipe(
      map(() => this.router.url !== '/landing')
    ),
    { initialValue: false }
  );

  constructor(public auth: AuthService){}

  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
