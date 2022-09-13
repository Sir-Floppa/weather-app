import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';
import { IForecastData } from './forecastDataInterface';
import { IForecast } from './forecastInterface';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forecast?: IForecast;
  currentDate: Date = new Date();
  index?: number;

  // Location Info
  lat?: number;
  lon?: number;

  // Header Info
  city?: string;
  date?: string;

  // Forecast Info
  desc?: string;

  icon?: string;

  temp?: number;
  wind?: number;
  humidity?: number;

  // Today Forecast Info
  forecastData?: IForecastData[];

  ngOnInit(): void {

    this.geolocation.getCurrentPosition().then( res => {
      this.lat = res.coords.latitude;
      this.lon = res.coords.longitude;
      
      this.apiService.getData(this.lat, this.lon)
        .subscribe(res => {
          this.forecast = res;
          this.forecast.data = this.forecast.data.slice(2, 10)

          this.index = this.getCurrentDataIndex(this.forecast.data);
          // Header
          this.city = this.forecast.city_name;
          this.date = this.forecast.data[this.index].timestamp_local;
          // Forecast
          this.desc = this.forecast.data[this.index].weather.description;
  
          this.icon = `https://www.weatherbit.io/static/img/icons/${this.forecast.data[this.index].weather.icon}.png`;
  
          this.temp = this.forecast.data[this.index].temp;
          this.wind = this.forecast.data[this.index].wind_spd;
          this.humidity = this.forecast.data[this.index].rh;
          // Today Forecast Info
          this.forecastData = this.forecast.data;
        })
    })

  }
  
  constructor(private apiService: ApiConnectionService, private geolocation: Geolocation) { }

  getCurrentDataIndex(dataArray: IForecastData[]): number {
    let tempIndex: number = 0;
    // Sat, 10 Sep 2022 22:01:30 GMT
    let currentUtc: string = this.currentDate.toUTCString();
    let currentUtcHour: number = Number(currentUtc.slice(16, 19));
    
    for(let i = 0; i < dataArray.length - 1; i++) {
      let indexHour = dataArray[i].timestamp_utc.slice(11, 13);
      let indexHourNumber = Number(indexHour);

      let nextHour = dataArray[i + 1].timestamp_utc.slice(11, 13);
      let nextHourNumber = Number(nextHour) == 0 ? 24 : Number(nextHour);

      console.log(`
      CURRENT UTC HOUR: ${currentUtcHour}
      INDEX HOUR: ${indexHourNumber}
      NEXT HOUR: ${nextHourNumber}
      =================================
      `)
      
      if(currentUtcHour >= indexHourNumber && currentUtcHour <= nextHourNumber) {
        tempIndex = i;
        console.log(tempIndex);
        break;
      }
      else {
        tempIndex = dataArray.length - 1;
      }
    }

    return tempIndex;
  }

}
