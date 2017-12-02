import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StateLandingComponent } from './state-landing/state-landing.component';

import { DataUtilsService } from './utilities/data-utils.service';
import { MapsLoaderService } from './utilities/maps-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    StateLandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataUtilsService,
    MapsLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
