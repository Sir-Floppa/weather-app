import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  temp = 0;
  wind = 0;
  humidity = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
