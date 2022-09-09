import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';
import { IForecast } from './forecastInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forecast: IForecast;

  // Location Info
  lat: number;
  lon: number;

  // Header Info
  city: string;
  date: Date = new Date();

  // Forecast Info
  desc: string;

  icon: string;

  temp: number;
  wind: number;
  humidity: number;

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition( res => {
      this.lat = res.coords.latitude;
      this.lon = res.coords.longitude;
      
      this.apiService.getData(this.lat, this.lon)
        .subscribe(res => {
          this.forecast = res;
          // Header
          this.city = this.forecast.city_name;
          // Forecast
          this.desc = this.forecast.data[0].weather.description;
  
          this.icon = `https://www.weatherbit.io/static/img/icons/${this.forecast.data[0].weather.icon}.png`;
  
          this.temp = this.forecast.data[0].temp;
          this.wind = this.forecast.data[0].wind_spd;
          this.humidity = this.forecast.data[0].rh;
        })
    })

  }
  
  constructor(private apiService: ApiConnectionService) { }
}
