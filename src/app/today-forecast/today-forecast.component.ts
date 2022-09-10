import { Component, Input, OnInit } from '@angular/core';
import { IForecastData } from '../forecastDataInterface';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.css']
})
export class TodayForecastComponent implements OnInit {
  @Input() index: number;

  @Input() forecastData: IForecastData[];

  getIcon(code: string): string {
    return `https://www.weatherbit.io/static/img/icons/${code}.png`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
