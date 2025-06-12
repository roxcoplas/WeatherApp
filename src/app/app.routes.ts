import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: LandingComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'weather',
        component: WeatherComponent,
    },
];
