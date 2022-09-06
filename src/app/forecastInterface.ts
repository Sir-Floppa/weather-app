export interface IForecast {
    data: object[],
    city_name: string,
    lon: number,
    timezone: string,
    lat: number,
    country_code: string,
    state_code: string
}