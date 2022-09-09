import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './forecast/forecast.component';
import { TodayForecastComponent } from './today-forecast/today-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForecastComponent,
    TodayForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
