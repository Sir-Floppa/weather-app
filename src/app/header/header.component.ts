import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { IForecast } from '../forecastInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  forecast: IForecast;

  city: string;
  date: Date = new Date(); 

  constructor(private apiService: ApiConnectionService) { }

  ngOnInit(): void {
    this.apiService.getData()
      .subscribe(res => {
        this.forecast = res;
        this.city = this.forecast.city_name;
      });
  }

}
