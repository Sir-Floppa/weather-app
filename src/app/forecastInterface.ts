import { IForecastData } from "./forecastDataInterface";

export interface IForecast {
    data: IForecastData[],
    city_name: string,
    lon: number,
    timezone: string,
    lat: number,
    country_code: string,
    state_code: string
}