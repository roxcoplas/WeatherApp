import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private router = inject(Router);
  showLogoutBtn = toSignal(
    this.router.events.pipe(
      map(() => ['/home', '/weather'].includes(this.router.url))
    ),
    { initialValue: false }
  );

  logout() {
    this.router.navigate(['/landing']);
  }
}
