import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IForecast } from './forecastInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  private apiUrl: string = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly';
  private apiKey: string = '749b37114amshf7430399b5fb346p1b59e2jsn451653c0fe81';
  private apiHost: string = 'weatherbit-v1-mashape.p.rapidapi.com';

  getData(lat: number, lon: number) {
    let options: object = {
      headers: {
        'X-RapidAPI-Host': this.apiHost,
        'X-RapidAPI-Key': this.apiKey
      },
      params: {
        'lang': 'en',
        'lat': lat,
        'lon': lon,
        'days': 2
      },
      responseType: 'json'
    }
    return this.http.get<IForecast>(this.apiUrl, options)
  }

  constructor(private http: HttpClient) { }
}
