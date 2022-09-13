import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() desc?: string;

  @Input() iconUrl?: string;

  @Input() temp?: number;
  @Input() wind?: number;
  @Input() humidity?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
