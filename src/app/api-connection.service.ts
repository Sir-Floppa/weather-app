import { asNativeElements, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IForecast } from './forecastInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService implements OnInit {
  private apiUrl: string = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly';
  private apiKey: string = '749b37114amshf7430399b5fb346p1b59e2jsn451653c0fe81';
  private apiHost: string = 'weatherbit-v1-mashape.p.rapidapi.com';

  lat: number;
  lon: number;

  options: object = {
    headers: {
      'X-RapidAPI-Host': this.apiHost,
      'X-RapidAPI-Key': this.apiKey
    },
    params: {
      'lang': 'en',
      'lat': this.getLat(),
      'lon': this.getLon()
    },
    responseType: 'json'
  }

  ngOnInit(): void {
    this.lat = this.getLat();
    this.lon = this.getLon();
  }

  getData() {
    return this.http.get<IForecast>(this.apiUrl, this.options)
  }

  getLat() {
    let tempLat: number = 0;
    navigator.geolocation.getCurrentPosition(
      (ans) => {tempLat = ans.coords.latitude; console.log("NEW LATITUDE: " + tempLat);}
    )
    return tempLat;
  }

  getLon() {
    let tempLon: number = 0;
    navigator.geolocation.getCurrentPosition(
      (ans) => {tempLon = ans.coords.longitude; console.log("NEW LONGITUDE: " + tempLon)}
    )
    return tempLon;
  }

  constructor(private http: HttpClient) { }
}
