
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-d7c6k384dc10f17y.us.auth0.com',
      clientId: 'Uc9CmwLr12dxQ8PfB4JMVtdzYXCAOK3C',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
}).catch((err) => console.error(err));
