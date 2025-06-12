import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  imports: [CommonModule],
  providers: [DatePipe]

})
export class WeatherComponent implements OnInit {
  city = '';
  weatherData: any;
  latestWeather: any;
  loading = true;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
      if (this.city) {
        this.getWeather();
      }
    });
  }

  getWeather() {
    const apiKey = '06ee6ca4cd0a1bf151a89313385bf8fd';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=imperial&appid=${apiKey}`;
    
    this.http.get(url).subscribe(data => {
      this.weatherData = data;
      // Get the first forecast item and format the date
      if (this.weatherData?.list?.length > 0) {
        this.latestWeather = {
          ...this.weatherData.list[0],
          formattedDate: this.formatDate(this.weatherData.list[0].dt_txt)
        };
      }
      this.loading = false;
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'MM/dd/yyyy') || '';
  }

  viewHome() {
    this.router.navigate(['/home'])
  }
}

